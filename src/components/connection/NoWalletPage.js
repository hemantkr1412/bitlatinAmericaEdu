import "./Connection.css";
import Bitwallet from "./assets/bitwallet.jpg";
import { useNavigate } from "react-router-dom";
import React from "react";

const NoWalletPage = () => { 
  const navigate = useNavigate();
  return (
    <div className="nowalletpage">
      <img src={Bitwallet} height={200} alt="" />
      <h2 style={{ fontSize: "20px", marginBottom: "40px" }}>
        Seems like you don't have a blockchain wallet installed.
      </h2>

      <button
        onClick={() => {
          navigate("/bitwalletpage");
        }}
      >
        Download Bit Wallet
      </button>
      <h1 style={{ fontSize: "18px", marginTop: "30px" }}>
        A blockchain wallet is your entry to the WEB3.0 world
      </h1>
      <h2>Learn more about metamask:</h2>
      <div>
        <iframe
          src="https://www.youtube.com/embed/YDsqedqmF84"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default NoWalletPage;
