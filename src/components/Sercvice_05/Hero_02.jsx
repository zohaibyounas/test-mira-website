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
              {t("Energy Management Software (EMS) Development")}{" "}
              <span className="text-blue-600">{t("")}</span>{" "}
              {/* <span className="text-blue-600">{t("Embedded Systems")}</span> */}
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              {t(
                "Development of high-performance Energy Management Software (EMS) – from real-time data acquisition to optimized control and reliable diagnostics. Our solutions provide scalable load and energy data management for industry, buildings, microgrids, and e-mobility infrastructure."
              )}
            </p>
            <p className="text-base sm:text-lg text-gray-600">
              {t(
                "With modern methods, we develop EMS that reduces peak loads (peak shaving), enables flexible load management, and supports grid services such as frequency control/regulating power. Measurement data from meters, PV systems, storage units, charging points, and production lines are securely collected, analyzed, and condensed into automated schedules."
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
              src="/images/B25.jpg"
              alt={t("Embedded Engineering Process")}
              className="w-full h-auto rounded-lg shadow-md object-cover lg:mb-56"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default EmbeddedEngineering;
