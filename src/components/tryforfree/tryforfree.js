import { useState } from "react";
import img from "./tryimage.jpg";
import { useNavigate } from "react-router-dom";
import { tryforfreeApi } from "../Scripts/apiCalls";
import { useTranslation } from "react-i18next";

const TryForFree = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const handleSubmit = () => {
    let language = document.getElementsByTagName("html")[0]["lang"];
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
      setStatus(t("tryforfree.requiredFields"));
      return;
    }
    setStatus(t("tryforfree.submitting"));
    tryforfreeApi({
      name,
      lastname,
      designation,
      email,
      institute,
      contact,
      country,
      language,
    })
      .then((res) => {
        setStatus("");
        alert(t("tryforfree.thankYou"));
        navigate("/home");
      })
      .catch((err) => {
        setStatus("");
        alert(t("tryforfree.somethingWentWrong"));
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
          <h1>{t("tryforfree.signup")}</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name-input">{t("tryforfree.firstName")}*</label>
            <input
              type="text"
              id="name-input"
              placeholder={t("tryforfree.enterfirstname")}
            />
            <label htmlFor="last-name-input">{t("tryforfree.lastName")}*</label>
            <input
              type="text"
              id="last-name-input"
              placeholder={t("tryforfree.enterlastname")}
            />
            <label htmlFor="designation-input">
              {t("tryforfree.designation")}*
            </label>
            <input
              type="text"
              id="designation-input"
              placeholder={t("tryforfree.enterdesignation")}
            />
            <label htmlFor="email-input">{t("tryforfree.email")}*</label>
            <input
              type="text"
              id="email-input"
              placeholder={t("tryforfree.enteremail")}
            />
            <label htmlFor="institute-input">
              {t("tryforfree.organization")}*
            </label>
            <input
              type="text"
              id="institute-input"
              placeholder={t("tryforfree.enterorganization")}
            />
            <label htmlFor="contact-input">{t("tryforfree.contact")}*</label>
            <input
              type="text"
              id="contact-input"
              placeholder={t("tryforfree.enterContact")}
            />
            <label htmlFor="country-input">{t("tryforfree.country")}*</label>
            <input
              type="text"
              id="country-input"
              placeholder={t("tryforfree.entercountry")}
            />
          </div>
          <div className="status">{status}</div>
          <button
            style={{
              marginTop: "20px",
            }}
            onClick={handleSubmit}
          >
            {t("tryforfree.enter")}
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
