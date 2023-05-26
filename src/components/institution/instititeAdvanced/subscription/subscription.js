import { ethers } from "ethers";
import abi from "../../../Scripts/tokenContract.json";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useContext } from "react";
import { paymentApi } from "../../../Scripts/apiCalls";
import UserContext from "../../../../context/userContext/UserContext";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import BuyPopup from "./buyPopup";

const Subscription = ({ setView, back }) => {
  const [isBuying, setIsBuying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [certNumber, setCertNumber] = useState(99);
  const user = useContext(UserContext);

  const PlanCard2 = ({ planName, noOfCerts, amount, isRecommended }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid black",
          borderRadius: "20px",
          background: "var(--secondary)",
          color: "var(--primary)",
          width: "300px",
          transform: isRecommended ? "scale(1.1)" : "none",
          boxShadow: "10px 10px 10px 5px rgba(0, 0, 0, 0.5) ",
        }}
      >
        <div
          style={{
            background: "var(--primary)",
            color: "var(--secondary)",
            width: "100%",
            borderRadius: "20px 20px 0px 0px",
          }}
        >
          <h1>{planName}</h1>
        </div>
        <div style={{ fontSize: "50px" }}>{noOfCerts}</div>
        <div style={{ fontSize: "25px" }}>CERTIFICATES</div>

        <div
          style={{
            background: "var(--primary)",
            color: "var(--secondary)",
            width: "100%",
          }}
        >
          <h1>{amount} $ /certificate</h1>
        </div>

        <div
          style={{
            display: "flex",
            margin: "20px 0px",
          }}
        >
          <Button
            sx={{
              background: "var(--primary)",
              color: "var(--secondary)",
              display: "flex",
              width: "200px",
              borderRadius: "40px",
              fontSize: "20px",
            }}
            onClick={() => {
              setIsBuying(true);
              setCertNumber(parseInt(noOfCerts));
            }}
          >
            Buy now
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Select a Subscription Plan</h1>
      <h3>{parseInt(user.userData.nft_quota)} Certificates available</h3>

      <div
        style={{
          display: "flex",
          gap: "50px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          margin: "50px 0px",
        }}
      >
        <PlanCard2
          planName="Silver Plan"
          noOfCerts="100"
          amount={2}
          duration="1 Month"
          isRecommended={false}
        />
        <PlanCard2
          planName="Gold Plan"
          noOfCerts="500"
          amount={1.75}
          duration="3 Months"
          isRecommended={true}
        />
        <PlanCard2
          planName="Platinum Plan"
          noOfCerts="1000"
          amount={1.5}
          duration="6 Months"
          isRecommended={false}
        />
      </div>
      <h1>Need trial certificates?</h1>
      <h3>Drop us an email and we'll get you started. </h3>
      <h3> support@beimagine.tech </h3>
      <div style={{ marginTop: "50px" }}>
        <button onClick={back}>{"<"} Back</button>
      </div>
      {isBuying && (
        <BuyPopup
          certNumber={certNumber}
          back={() => {
            setIsBuying(false);
          }}
        />
      )}
      {isLoading && <LoadingPage />}
    </div>
  );
};

export default Subscription;

const LoadingPage = () => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress />
    </Backdrop>
  );
};
