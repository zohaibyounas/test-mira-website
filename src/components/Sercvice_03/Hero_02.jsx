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
              {t("Battery Management Software Development")}
              <span className="text-blue-600">{t("")}</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 ">
              {t(
                "Development of High-Performance Battery Management Software (BMS) – from secure data processing to precise diagnostic and testing solutions. Our solutions provide scalable, energy-efficient, and future-proof battery management systems for automotive, e-mobility, and industrial applications."
              )}
            </p>
            <p className="text-base sm:text-lg text-gray-600 ">
              {t(
                "Using state-of-the-art methods, we develop BMS software that reliably integrates cell monitoring, charge/discharge management, temperature control, and safety functions."
              )}
            </p>
            <p className="text-base sm:text-lg text-gray-600 ">
              {t(
                "Mira Electronics Development combines innovations in energy management with an advanced software testing strategy to ensure the highest quality and safety."
              )}
            </p>
            <p className="text-base sm:text-lg text-gray-600 ">
              {t(
                "We offer engineering services and tailor-made system solutions that support companies in implementing sustainable energy systems."
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
          <div className="w-full lg:w-1/2 lg:mb-52 lg:ml-6 ">
            <img
              src="/images/new.png"
              alt={t("Embedded Engineering Process")}
              className="lg:w-[95%] w-fullnp h-auto rounded-lg lg:mb-16 shadow-md object-cover"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default EmbeddedEngineering;
