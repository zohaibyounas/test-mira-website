import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-gray-100 mt-12 mx-4 md:mt-20 md:mx-5">
      <div className="text-center md:text-left md:max-w-[50%]">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          <span className="text-blue-600">MIRA</span> {t("Software")}{" "}
          <span className="text-blue-600">{t("Agency Privacy")}</span> &{" "}
          {t("Policies")}
        </h1>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          {t("We value your privacy")}
        </p>
        <div className="mt-5 flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder={t("Enter your email for your latest tech news")}
            className="p-3 w-full sm:w-80 border border-gray-300 rounded-lg text-sm focus:outline-none"
          />
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 mt-4 sm:mt-0">
            {t("Subscribe")}
          </button>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:ml-12 w-full md:w-1/2">
        <img
          src="/images/privacy-policy-image.png"
          alt={t("Privacy Policy")}
          className="w-[65%] h-auto lg:ml-32 ml-12 mt-5"
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
