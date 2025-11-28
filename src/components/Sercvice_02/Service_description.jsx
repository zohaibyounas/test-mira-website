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
            {t("Our BMS Security Solutions & Pentesting Services")}{" "}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-5">
            {t(
              "From firmware analysis and penetration testing of control units to securing cloud backends – we offer comprehensive security services for Battery Management Systems. With practical testing, state-of-the-art tools, and deep embedded expertise, we ensure that your energy storage systems remain reliable, tamper-proof, and future-ready."
            )}
          </p>
          <NavLink
            to="/contact"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg inline-flex items-center hover:bg-blue-700"
          >
            {t("Start Project Now")}
          </NavLink>
        </div>

        {/* Right Side: Image and Services List */}
        <div className="lg:w-3/5 flex flex-col lg:flex-row items-center justify-between lg:mb-40">
          <div className="w-full flex justify-center mb-6 lg:mb-0 mt-1">
            <img
              src="/images/B12.jpg"
              alt={t("Embedded Engineering")}
              className="w-full max-w-md h-auto object-contain rounded-lg"
            />
          </div>
          <div className="flex flex-col lg:ml-8 mt-9">
            <ul className="space-y-4 text-lg text-gray-800 font-semibold ">
              <li className="">{t("Firmware-Analyse & Hardening")}</li>
              <li className="border-t border-gray-300 pt-4">
                {t("Hardware & Interface Testing")}
              </li>
              <li className="border-t border-gray-300 pt-4">
                {t("Software- & Cloud-Integration")}
              </li>
              <li className="border-t border-gray-300 pt-4">
                {t("Security Solutions & Pentesting")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringServices;
