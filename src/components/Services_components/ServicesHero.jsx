/* eslint-disable no-irregular-whitespace */
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ServicesHero.css";
import { useTranslation } from "react-i18next";

const SuccessHero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          {t("From Cell to Cloud –")}{" "}
          {/* <span className="highlight_)1">{t("Digital presence")}</span>{" "} */}
          {t("Engineering That Delivers")}
        </h1>
        <p className="subtitle">
          {t(
            "Mira Elektronikentwicklung develops customized embedded systems, battery management software, and energy management solutions – fast, secure, and scalable."
          )}{" "}
          <br />
          {/* {t("over 20 years of experience in the industry.")} */}
        </p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => navigate("/contact")}>
            {t("Start Project Now")}
                   
          </button>
          {/* <button className="secondary-btn" onClick={() => navigate("/about")}>{t("Read More")}</button> */}
        </div>
      </div>
    </div>
  );
};

export default SuccessHero;
