import React from "react";
import { useTranslation } from "react-i18next";

const EmbeddedEngineering = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white w-full mt-12">
      <header className="bg-gradient-to-b from-gray-100 to-white py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {t("Embedded")}{" "}
              <span className="text-blue-600">{t("Systems")}</span>{" "}
              {t("Development")}
            </h1>
            <p className="text-base sm:text-md text-gray-600 text-justify">
              {t(
                "Professional embedded systems development – from hardware to software. Mira Electronics Development offers scalable, energy-efficient, and future-proof embedded solutions for innovative companies."
              )}
            </p>
            <p className="text-base sm:text-md text-gray-600">
              {t("Our range of services includes:")}
            </p>
            <ul className="list-disc list-inside text-gray-600 ">
              <li className="text-justify">
                {t(
                  "Development of embedded systems using AI-supported methods"
                )}
              </li>
              <li className="text-justify">
                {t("Secure boot and security solutions for embedded hardware")}
              </li>
              <li>
                {t(
                  "Testing solutions and validation strategies for maximum reliability"
                )}
              </li>
              <li>
                {t(
                  "Tailor-made system house solutions and engineering services"
                )}
              </li>
            </ul>
            <p className="text-base sm:text-md text-gray-600 text-justify">
              {t(
                "With our advanced 2025 software testing strategy, we ensure the quality, safety, and sustainability of your products."
              )}
            </p>

            {/* Subscribe Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder={t("Enter your email for latest tech news")}
                className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
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
          <div className="w-full lg:w-1/2">
            <img
              src="/images/blog1.jpg"
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
