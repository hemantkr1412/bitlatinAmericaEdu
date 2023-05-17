import "./Connection.css";
import metamaskimage from "./assets/bitwallet.jpg";
import { useTranslation } from 'react-i18next'
import { useNavigate } from "react-router-dom";
import React from "react";
import i18next from 'i18next'

const NoWalletPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="nowalletpage">
      <img src={metamaskimage} height={200} alt="" />
      <h2 style={{ fontSize: "20px", marginBottom: "40px" }}>
        {t('connection.noWallet.heading')}
      </h2>

      <button
        onClick={() => {
          navigate("/bitwalletpage");
        }}
      >
        {t('Download BitWallet')}
      </button>
      <h1 style={{ fontSize: "18px", marginTop: "30px" }}>
        {t('connection.noWallet.subheading')}
      </h1>
      <h2>{t('Learn More About BitMemoir')}</h2>
      <div>
        {/* <iframe
          src="https://www.youtube.com/embed/YDsqedqmF84"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
        {
                                    i18next.language === "en" ? <iframe width="560" height="315" src="https://www.youtube.com/embed/YDsqedqmF84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> : <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FIx3HdzXCDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                }
      </div>
    </div>
  );
};

export default NoWalletPage;
