import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EngineeringServices = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Title, Description, Button */}
        <div className="lg:w-2/5 text-left mb-10 lg:mb-56">
          <p className="text-blue-500 text-lg mb-2">{t("Our Services")}</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6">
            {t("Our")} <span className="text-blue-500">{t("Embedded")}</span>{" "}
            {t("Engineering Services")}
          </h2>
          <p className="text-base text-gray-600 mb-4 text-justify">
            {t(
              "Rely on our expertise in embedded development.We support you from concept and prototyping to series production – with solutions that deliver top performance, efficiency, and security."
            )}
          </p>
          <p className="text-base text-gray-600 mb-6 text-justify">
            {t(
              "Start your project now – together we’ll develop the embedded solution that drives your business forward."
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
        <div className="lg:w-[59%] flex flex-col lg:flex-row items-start justify-between">
          <div className="w-full flex justify-center mb-6 lg:mb-0">
            <img
              src="/images/B5.jpeg"
              alt={t("Embedded Engineering")}
              className="w-full max-w-md h-auto object-contain rounded-lg"
            />
          </div>
          <div className="flex flex-col lg:ml-8">
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="font-semibold">
                {t("High-Performance Embedded Systems")}
              </li>
              <p className="text-base text-gray-600 text-justify">
                {t(
                  "Development of scalable systems for industry, automotive, and IoT."
                )}
              </p>
              <li className="border-t font-semibold border-gray-300 pt-4">
                {t("AI, Electronics, and Real-Time Computing")}
              </li>
              <p className="text-base text-gray-600 text-justify">
                {t(
                  "Intelligent embedded solutions with machine learning and real-time processing."
                )}
              </p>
              <li className="border-t font-semibold border-gray-300 pt-4">
                {t("Custom Embedded Solutions")}
              </li>
              <p className="text-base text-gray-600 text-justify">
                {t(
                  "Custom system architectures precisely tailored to your requirements."
                )}
              </p>
              <li className="border-t font-semibold border-gray-300 pt-4">
                {t("Driving Digital Transformation")}
              </li>
              <p className="text-base text-gray-600 text-justify">
                {t(
                  "Future-proof technologies for the automation and modernization of your processes."
                )}
              </p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringServices;
