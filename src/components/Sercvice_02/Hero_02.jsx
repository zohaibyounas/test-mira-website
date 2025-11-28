import React from "react";
import { useTranslation } from "react-i18next";

const EmbeddedEngineering = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white w-full mt-12">
      <header className="bg-gradient-to-b from-gray-100 to-white py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {t("Battery Management System Security & Pentesting")}
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              {t(
                "Our security solutions are specifically tailored to Battery Management Systems (BMS) and ensure the protection of critical energy storage in automotive, industrial, and IoT applications. Mira Electronics Development combines deep expertise in embedded systems and automotive security with practical penetration testing. We examine BMS firmware for vulnerabilities, harden microcontrollers and control units (e.g., ESP32, STM32, dsPIC33), analyze communication channels such as CAN bus and LTE Cat.1, and conduct comprehensive security audits for cloud and backend integrations – ensuring end-to-end protection from the battery cell to the cloud."
              )}
            </p>

            {/* Subscribe Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 ">
              <input
                type="email"
                placeholder={t("Enter your email for latest tech news")}
                className="w-full  sm:w-auto flex-1 px-4 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition ">
                {t("Subscribe")}
              </button>
            </div>

            <p className="text-sm text-gray-500">
              {t("We care about your data in our")}{" "}
              <a href="/privacy-policy" className="text-blue-600 underline">
                {t("privacy policy")}
              </a>
              .
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 lg:mb-24">
            <img
              src="/images/pintest.png"
              alt={t("Embedded Engineering Process")}
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default EmbeddedEngineering;
