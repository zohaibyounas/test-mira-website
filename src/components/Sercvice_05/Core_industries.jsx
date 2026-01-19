import React from "react";
import { useTranslation } from "react-i18next";

const CoreIndustries = () => {
  const { t } = useTranslation();

  return (
    <section className="px-5 py-20 bg-gray-100 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Left side: Illustration */}
        <div className="flex-1 flex justify-center md:justify-start md:ml-[-5%]">
          <img
            src="/images/illustration.png"
            alt={t("Illustration")}
            className="max-w-[60%] h-auto"
          />
        </div>

        {/* Right side: Description and List */}
        <div className="flex-1 text-left mt-10 md:mt-0 md:pl-10">
          <h2 className="text-3xl font-bold mb-5 text-gray-800">
            {t(
              "Unser Technologie‑Stack für Software-Defined-Vehicle-Entwicklung",
            )}
          </h2>
          <p className="text-base text-gray-600 mb-8 md:mr-20">
            {t(
              " Jede Komponente ist bewusst gewählt, um Echtzeitfähigkeit, Sicherheit und Effizienz in SDV-Projekten zu gewährleisten – von der Fahrzeugsteuerung bis zur OTA-Diagnose. Entwickelt von Mira Elektronikentwicklung speziell für Automotive-OEMs.",
            )}
          </p>

          <ul className="space-y-4">
            <li className="flex items-start text-gray-800">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>
                <b>{t("Programming Languages")}:</b>{" "}
                {t("C, C++, Rust, Python (Tests, Simulation, Tooling,")}
              </span>
            </li>
            <li className="flex items-start text-gray-800">
              <span className="w-3.5 h-2.5 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>
                <b>{t("Betriebssysteme")}:</b>{" "}
                {t(
                  " AUTOSAR Adaptive/Classic, Linux, QNX, Zephyr, Bare-Metal (RT-kritische Steuerungen)",
                )}
              </span>
            </li>
            <li className="flex items-start text-gray-800">
              <span className="w-3.5 h-2.5 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>
                <b>{t("Hardwareplattformen")}:</b>{" "}
                {t(
                  "ARM-Cortex-MCUs, funktional sichere MCUs (ASIL-D), GPUs & SoCs für ADAS/Infotainment, Vehicle Network Gateways",
                )}
              </span>
            </li>
            <li className="flex items-start text-gray-800">
              <span className="w-4 h-2.5 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>
                <b>{t("Kommunikationsprotokolle")}:</b>{" "}
                {t(
                  "CAN/CAN-FD, Automotive Ethernet (TSN), FlexRay, LIN, MOST, SOME/IP, MQTT für Cloud-Integration",
                )}
              </span>
            </li>
            <li className="flex items-start text-gray-800">
              <span className="w-3 h-2.5 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>
                <b>{t(" Werkzeuge & Entwicklung")}:</b>{" "}
                {t(
                  " JTAG/SWD, Logic-Analyzer & Oszilloskop, Git & CI/CD, automatisierte Tests, modellbasierte Entwicklung/HIL-/SIL-Simulation, OTA-Update-Frameworks",
                )}
              </span>
            </li>
            <li className="flex items-start text-gray-800">
              <span className="w-4 h-2.5 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>
                <b>{t(" Sicherheits- & Funktionsmodule")}:</b>{" "}
                {t(
                  "Fahrzeug- und Domain-Security, Over-the-Air Updates, SoC/SoH-Algorithmen, Schutzlogiken, Watchdogs, Ereignis-/Fehlerprotokollierung, funktionale Sicherheit (ISO 26262)",
                )}
              </span>
            </li>
            <li className="flex items-start text-gray-800">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>
                <b>{t("Visualization & UI")}:</b>{" "}
                {t(
                  "modern web frontend (SPA/SSR), dashboards (energy/cost/CO₂)",
                )}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CoreIndustries;
