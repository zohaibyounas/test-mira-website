import React from "react";
import { useTranslation } from "react-i18next";

const ImprintHero = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 lg:p-12 bg-gray-100 mt-10 ml-2 m">
      <div className="w-full md:w-1/2 text-center md:text-left mx-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          <span className="text-blue-600">MIRA</span> {t("Software")}{" "}
          <span className="text-blue-600">{t("Agency Imprints")}</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-3">
          {t("We value your privacy")}
        </p>
        <div className="mt-5 flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder={t("Enter your email for your latest tech news")}
            className="w-full sm:w-[80%] md:w-[300px] lg:w-[350px] px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none"
          />
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition">
            {t("Subscribe")}
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src="/images/privacy-policy-image.png"
          alt={t("Imprint")}
          className="w-[65%] h-auto lg:ml-32 mt-5"
        />
      </div>
    </div>
  );
};

export default ImprintHero;
