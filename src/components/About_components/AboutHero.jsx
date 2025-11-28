import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./AboutHero.css";
import { useTranslation } from "react-i18next";

const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <section className="about-hero">
      {/* Left Side Content */}
      <div className="about-content">
        <h1>
          {t("About")} <span className="highlight_01">{t("Us")}</span>
        </h1>
        <h2>
          {t("We Are A Cutting-Edge")}{" "}
          <span className="highlight_01">{t("Software Services")}</span>{" "}
          {t("Provider, Dedicated To")}
          <span className="highlight_01"> {t("Developing")}</span>{" "}
          {t("Innovative Solutions")}
        </h2>
        <p>
          {t(
            "Since our inception, we have been committed to providing innovative software solutions tailored to your needs, driving growth, and enhancing user experiences. Our dedication to excellence is reflected in our evolving expertise and successful projects."
          )}
        </p>
        <button className="join-btn">
          <a href="/contact" className="request-link">
            {t("Contact Us")}
          </a>{" "}
          {/* <FaArrowRight /> */}
        </button>
      </div>

      <div className="about-images">
        <div className="image-box mr-4">
          <img
            src="/images/office-2.png"
            alt={t("Team Work")}
            className="about-img w-[750px] "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
