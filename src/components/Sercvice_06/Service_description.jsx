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
            {t("Our")} <span className="text-blue-500">{t("Expertise  ")}</span>{" "}
            {t("in")} <br />
            <span className="text-blue-500">{t("Hardware  ")}</span>{" "}
            {t("Development Services")}
          </h2>

          <NavLink
            to="/contact"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg inline-flex items-center hover:bg-blue-700"
          >
            {t("Start Project Now")}
          </NavLink>
        </div>

        {/* Right Side: Image and Services List */}
        <div className="lg:w-3/5 flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full flex justify-center mb-6 lg:mb-0 lg:mr-24 mr-9">
            <img
              src="/images/B2.jpeg"
              alt={t("Embedded Engineering")}
              className="w-full max-w-md h-auto object-contain rounded-lg"
            />
          </div>
          <div className="flex flex-col lg:ml-8">
            <ul className="space-y-4 text-lg text-gray-800 font-semibold">
              <li>{t("Custom PCB Design & Layout ")}</li>
              <li className="border-t border-gray-300 pt-4">
                {t("Embedded System Hardware Design")}
              </li>
              <li className="border-t border-gray-300 pt-4">
                {t("Prototyping")}
              </li>
              <li className="border-t border-gray-300 pt-4">
                {t("Wireless Connectivity")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringServices;
