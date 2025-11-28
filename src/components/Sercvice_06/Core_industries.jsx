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
            {t("Our")} <span className="highlight_01">{t("Technology")}</span>{" "}
            {t("Stack")}
          </h2>
          <p className="industries-description">
            {t(
              "You can explore each feature we offer with ease and enjoyment, as every option has its unique functionality — thoughtfully designed by our software development agency Kiel, supported with expert IT support, and driven by practical IT informatics and innovative testing solutions."
            )}
          </p>
          <ul className="industries-items">
            <li className="industries-item">
              <span className="dot"></span> <b>{t("Programming Languages")}:</b>{" "}
              C, C++, Python, Rust
            </li>
            <li className="industries-item">
              <span className="dot"></span> <b>{t("Operating Systems")}:</b>{" "}
              FreeRTOS, Zephyr, Embedded Linux, RTOS
            </li>
            <li className="industries-item">
              {" "}
              <span className="dot"></span> <b>{t("Hardware Platforms")}:</b>{" "}
              STM32, ESP32, ARM Cortex, Raspberry Pi
            </li>
            <li className="industries-item">
              <span className="dot"></span>{" "}
              <b>{t("Communication Protocols")}:</b> CAN, UART, SPI, I²C, MQTT,
              RS-485
            </li>
            <li className="industries-item">
              <span className="dot"></span> <b>{t("Tools & Development")}:</b>:
              JTAG Debugger, Logic Analyzers, Jenkins
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CoreIndustries;
