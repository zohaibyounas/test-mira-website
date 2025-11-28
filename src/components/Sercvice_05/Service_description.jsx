import React from "react";
import { NavLink } from "react-router-dom"; // Make sure to import NavLink
import { useTranslation } from "react-i18next"; // Import the translation hook

const EngineeringServices = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Title, Description, Button */}
        <div className="lg:w-2/5 text-left mb-10 lg:mb-0">
          <p className="text-blue-500 text-lg mb-4">{t("Our Services")}</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6">
            <span className="text-gray-800">
              {t("Our EMS Engineering Services")}
            </span>
          </h2>
          <p className="text-gray-600 mb-4">
            {t(
              "We develop customized Energy Management Systems (EMS) for industry, buildings, microgrids, and e-mobility infrastructure. From secure data acquisition to peak shaving and load management, all the way to cloud monitoring – we deliver scalable, secure, and efficient solutions."
            )}
          </p>
          <p className="text-gray-600 mb-3">{t("Focus Areas:")}</p>

          {/* Focus Area Details */}
          <p className="text-gray-600 mb-3">
            {t(
              "High-Performance EMS Platforms: Real-time acquisition of energy, power, and tariff data; integration of PV systems, storage units, and charging points; reliable control loops for energy flow and priorities."
            )}
          </p>
          <p className="text-gray-600 mb-3">
            {t(
              "Intelligent Forecasting & Real-Time Optimization: Load/production forecasts, dynamic schedule and tariff optimization, load shifting, and peak shaving, including fallback strategies."
            )}
          </p>
          <p className="text-gray-600 mb-3">
            {t(
              "Tailor-Made Edge & Cloud Architectures: Industrial gateways and secure interfaces (MQTT, Modbus/TCP, OPC UA, OCPP, REST), hybrid on-prem/cloud setups, role-based access control, and audit-capable logging."
            )}
          </p>
          <p className="text-gray-600 mb-6">
            {t("Digital Transformation in Energy Management")}
          </p>

          <NavLink
            to="/contact"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg inline-flex items-center hover:bg-blue-700"
          >
            {t("Start Project Now")}
          </NavLink>
        </div>

        {/* Right Side: Image and Services List */}
        <div className="lg:w-3/5 flex flex-col lg:flex-row items-center justify-between lg:mb-[23rem]">
          <div className="w-full flex justify-center mb-6 lg:mb-0">
            <img
              src="/images/Service_image_05.jpg"
              alt={t("Embedded Engineering")}
              className="w-full max-w-md h-auto object-contain rounded-lg"
            />
          </div>
          <div className="flex flex-col lg:ml-8 lg:mb-20 mt-4">
            <ul className="space-y-4 text-lg text-gray-800 font-semibold">
              <li>{t("Embedded AI & Edge Computing")}</li>
              <li className="border-t border-gray-300 pt-4">
                {t("Predictive Analytics")}
              </li>
              <li className="border-t border-gray-300 pt-4">
                {t("Computer Vision")}
              </li>
              <li className="border-t border-gray-300 pt-4">
                {t("Sensor Fusion")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringServices;
