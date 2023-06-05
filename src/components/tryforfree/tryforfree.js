import { useState } from "react";
import img from "./tryimage.jpg";
import { useNavigate } from "react-router-dom";
import { tryforfreeApi } from "../Scripts/apiCalls";

const TryForFree = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const handleSubmit = () => {
    let name = document.getElementById("name-input").value;
    let lastname = document.getElementById("last-name-input").value;
    let designation = document.getElementById("designation-input").value;
    let email = document.getElementById("email-input").value;
    let institute = document.getElementById("institute-input").value;
    let contact = document.getElementById("contact-input").value;
    let country = document.getElementById("country-input").value;
    if (
      name === "" ||
      lastname === "" ||
      designation === "" ||
      email === "" ||
      institute === "" ||
      contact === "" ||
      country === ""
    ) {
      setStatus("* marked fields are required.");
      return;
    }
    setStatus("Submitting. Please wait...");
    tryforfreeApi({
      name,
      lastname,
      designation,
      email,
      institute,
      contact,
      country,
    })
      .then((res) => {
        setStatus("");
        alert(
          "Thankyou for choosing bitmemoir. Our representative will contact you shortly."
        );
        navigate("/home");
      })
      .catch((err) => {
        setStatus("");
        alert(
          "Something went wrong. Please contact us at support@beimagine.tech"
        );
      });
  };
  return (
    <div
      style={{
        minHeight: "90vh",
        width: "100%",
        background: "var(--primary)",
        color: "var(--secondary)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "500px",
          }}
        >
          <h1>Sign-up to get Free Certificates</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name-input">First Name*</label>
            <input type="text" id="name-input" placeholder="Enter name..." />
            <label htmlFor="last-name-input">Last Name*</label>
            <input
              type="text"
              id="last-name-input"
              placeholder="Enter last name..."
            />
            <label htmlFor="designation-input">Designation*</label>
            <input
              type="text"
              id="designation-input"
              placeholder="Enter designation..."
            />
            <label htmlFor="email-input">Email*</label>
            <input type="text" id="email-input" placeholder="Enter email..." />
            <label htmlFor="institute-input">Organization*</label>
            <input
              type="text"
              id="institute-input"
              placeholder="Enter organization's name..."
            />
            <label htmlFor="contact-input">Contact number*</label>
            <input
              type="text"
              id="contact-input"
              placeholder="Enter phone number..."
            />
            <label htmlFor="country-input">Country*</label>
            <input
              type="text"
              id="country-input"
              placeholder="Enter country..."
            />
          </div>
          <div className="status">{status}</div>
          <button
            style={{
              marginTop: "20px",
            }}
            onClick={handleSubmit}
          >
            Enter
          </button>
        </div>
        <div
          style={{
            maxWidth: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={img} alt="BitMemoir" />
        </div>
      </div>
    </div>
  );
};

export default TryForFree;
