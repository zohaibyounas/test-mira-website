import React from "react";
import "./Core_industries.css"; // Import the CSS file
import { useTranslation } from "react-i18next"; // Import the translation hook

const CoreIndustries = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <section className="core-industries">
      <div className="industries-content">
        {/* Left side: Illustration */}
        <div className="illustration">
          <img
            src="/images/illustration.png" // Replace with the correct image path
            alt={t("Illustration")}
            className="illustration-image"
          />
        </div>

        {/* Right side: Description and List */}
        <div className="industries-list">
          <h2 className="industries-heading">
            {t("Our Technologies &")}{" "}
            <span className="highlight_01">{t("Tech-Stack ")}</span>
          </h2>
          <p className="industries-description text-justify">
            {t(
              "As an experienced software development agency in Kiel, we rely on cutting-edge technologies to develop embedded systems and custom software solutions reliably and future-proof. Our focus is on efficiency, security, and scalability, ensuring that companies benefit in the long term from stable and innovative solutions."
            )}
          </p>
          <ul className="industries-items">
            <h3 className="industries-heading text-lg -mb-0 ">
              {t("Our technology stack at a glance:")}
            </h3>
            <li className="industries-item mt-3">
              <span className="dot"></span> <b>{t("Programming Languages")}:</b>{" "}
              C, C++, Python, Rust
            </li>
            <li className="industries-item">
              <span className="dot"></span> <b>{t("Operating Systems")}:</b>{" "}
              FreeRTOS, Zephyr
            </li>
            <li className="industries-item">
              <span className="dot"></span>
              <b>{t("Hardware Platforms")}:</b> STM32, ESP32, ARM Cortex
            </li>
            <li className="industries-item">
              <span className="dot"></span>{" "}
              <b>{t("Communication Protocols")}:</b> CAN, UART, SPI, I²C, MQTT
            </li>
            <li className="industries-item">
              <span className="dot"></span> <b>{t("Tools & Development")}:</b>{" "}
              JTAG Debugger, Logic Analyzers, Git
            </li>
          </ul>
          <p className="industries-description mt-5 text-justify">
            {t(
              "By combining technological expertise, IT support, and innovative testing solutions, we develop systems that meet the highest quality standards and fulfill the requirements of modern companies."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreIndustries;
