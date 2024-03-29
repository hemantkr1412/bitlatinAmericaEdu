import "./landing.css";
import UserContext from "../../../context/userContext/UserContext";
import NoWalletPage from "../../connection/NoWalletPage";
import Connect from "../../connection/Connect";
import KYC from "../../kyc/kyc";
// import { useTranslation } from "react-i18next";
import { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import DNFTMainPage from "../dNFT";

const DNFTLandingPage = () => {
  const user = useContext(UserContext);
  const [isSidebar, setIsSidebar] = useState(false);

  const { t } = useTranslation();

  const Navbar = () => {
    return (
      <div
        className="institutenavbar"
        style={{
          left: "0px",
          height: "50px",
        }}
      >
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          Dynamic NFT Certificates
        </div>
      </div>
    );
  };

  return (
    <div className="institutepageadvanced">
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Navbar />

          {!user.iswalletAvailable ? (
            <NoWalletPage />
          ) : !user.isConnected ? (
            <Connect />
          ) : user.userData.status !== "Approved" ? (
            <KYC />
          ) : (
            <div
              style={{
                position: "absolute",
                top: "50px",
                left: "0px",
                width: "100%",
              }}
            >
              <DNFTMainPage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DNFTLandingPage;
