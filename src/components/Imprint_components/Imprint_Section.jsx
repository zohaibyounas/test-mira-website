import React from "react";
import { useTranslation } from "react-i18next";

const Imprint_Section = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white px-4 sm:px-8 lg:px-16 py-8 mt-6">
      <div className="max-w-4xl mx-auto text-gray-800 text-sm sm:text-base leading-relaxed">
        <p className="text-black">{t("Postal address")}</p>
        <p className="text-black">{t("Mira Elektronikentwicklung GmbH")}</p>
        <p className="text-black">{t("Schauenburgerstraße 116")}</p>
        <p className="text-black">{t("24118 Kiel")}</p>
        <p className="text-black">
          {t("Email")}:{" "}
          <a
            href="mailto:raza.abbas@mira-ee.de"
            className="text-blue-600 hover:underline"
          >
            raza.abbas@mira-ee.de
          </a>
        </p>
        <p className="text-black">{t("Phone")}: +49 1522 6426128</p>
        <p className="text-black">
          {t("Commercial register number")}: HRB 24555 B
        </p>
        <p className="text-black">{t("Responsible for content")}: Raza Abbas</p>

        <p className="mt-4 text-black">
          {t(
            "The European Commission provides a platform for online dispute resolution (ODR), which you can find here"
          )}{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            ec.europa.eu/consumers/odr
          </a>
          .
        </p>

        <h3 className="text-lg font-semibold mt-6">{t("Disclaimer")}</h3>
        <p className="mt-2 text-black">{t("DisclaimerText")}</p>

        <h3 className="text-lg font-semibold mt-6">{t("Image Material")}</h3>
        <p className="mt-2 text-black">{t("Used hero image from Unsplash")}</p>
        <p className="text-black">{t("Others are our own images")}</p>

        <h3 className="text-lg font-semibold mt-6">{t("Legal Notice")}</h3>
        <p className="mt-2 text-black">{t("LegalNoticeText")}</p>

        <h3 className="text-lg font-semibold mt-6">
          {t("Liability for links")}
        </h3>
        <p className="mt-2 text-black">{t("LiabilityForLinksText")}</p>
      </div>
    </div>
  );
};

export default Imprint_Section;
