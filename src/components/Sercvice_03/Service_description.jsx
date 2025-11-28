import React from "react";
import { NavLink } from "react-router-dom"; // Make sure to import NavLink
import { useTranslation } from "react-i18next"; // Import the translation hook

const EngineeringServices = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Title, Description, Button */}
        <div className="lg:w-2/5 text-left  lg:mb-20">
          <p className="text-blue-500 text-lg mb-4">{t("Our Services")}</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6">
            {t("Our BMS Engineering Services")}{" "}
          </h2>
          <p className="text-md mb-4 text-gray-600 ">
            {t(
              "We develop tailor-made Battery Management Systems (BMS) for automotive, e-mobility, and energy storage applications. From cell monitoring and charge/discharge strategies to cloud-based monitoring – we deliver scalable, safe, and efficient solutions."
            )}
          </p>

          <p className="text-md mb-4 text-gray-600 font-semibold">
            {t("Key Focus Areas:")}
          </p>
          <ul className=" text-gray-600 mb-6 space-y-2">
            <li>
              <span className="font-semibold">
                {t("High-Performance BMS Systems:")}
              </span>{" "}
              {t(
                "Precise cell monitoring, temperature and current measurement with active/passive balancing functions."
              )}
            </li>
            <li>
              <span className="font-semibold">
                {t("Intelligent Algorithms & Real-Time Computing:")}
              </span>{" "}
              {t(
                "State of Charge (SoC) and State of Health (SoH) models, fault diagnostics, and safety strategies."
              )}
            </li>
            <li>
              <span className="font-semibold">
                {t("Tailor-Made Embedded Solutions:")}
              </span>{" "}
              {t(
                "Customized system architectures and communication protocols (CAN, CAN-FD, SPI, I²C) designed for your application."
              )}
            </li>
            <li>
              <span className="font-semibold">
                {t("Digital Transformation in Energy Management:")}
              </span>{" "}
              {t(
                "Cloud integration, monitoring dashboards, and remote diagnostics to increase efficiency."
              )}
            </li>
          </ul>

          <NavLink
            to="/contact"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg inline-flex items-center hover:bg-blue-700"
          >
            {t("Start Project Now")}
          </NavLink>
        </div>

        {/* Right Side: Image and Services List */}
        <div className="lg:w-3/5 flex flex-col lg:flex-row items-center justify-between mb-[26rem]">
          <div className="w-full flex justify-center mb-6 lg:mb-0 md:mb-0">
            <img
              src="/images/B8.jpg"
              alt={t("Embedded Engineering")}
              className="w-full lg:mt-6 max-w-lg h-auto object-contain rounded-lg"
            />
          </div>
          <div className="flex flex-col lg:ml-8">
            <ul className="space-y-4 text-lg text-gray-800 font-semibold  ">
              <li className="">{t("Secure Firmware Development")}</li>
              <li className="border-t border-gray-300 pt-4">
                {t("Advanced Data Security")}
              </li>
              <li className="border-t border-gray-300 pt-4">
                {t("Cyber Threat Monitoring")}
              </li>
              <li className="border-t border-gray-300 pt-4">
                {t("Risk Management")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringServices;
