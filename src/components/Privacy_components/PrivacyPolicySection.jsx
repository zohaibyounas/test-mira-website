import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicySection = () => {
  const { t } = useTranslation();

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 py-10 text-black font-sans max-w-[95%] md:max-w-[90%] lg:max-w-[80%] mx-auto leading-relaxed">
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          {t("1. General Information")}
        </h2>
        <p className="text-justify text-base text-black md:text-lg mb-4">
          {t(
            "The protection of your personal data is important to us. This privacy policy explains which data we collect, how we use it, and your rights under the GDPR."
          )}
        </p>

        <h3 className="text-lg font-semibold mt-4">
          {t("Responsible Entity")}
        </h3>
        <p className="text-justify mb-4 text-black">
          {t(
            "Mira Elektronikentwicklung GmbH, Schauenburgerstraße 116, 24118 Kiel, Phone: +49 152 26426128, Email: info@mira-ee.de"
          )}
        </p>

        <h3 className="text-lg font-semibold mt-4">
          {t("Data Protection Officer")}
        </h3>
        <p className="text-justify text-black">
          {t(
            "For any questions regarding data processing, you can contact our data protection officer at datenschutz@mira-ee.de"
          )}
        </p>
        <br />
      </div>

      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          {t("2. Data Protection Officer")}
        </h2>

        <p className="text-justify mb-2 text-black">
          {t(
            "For questions regarding data protection or the processing of your personal data, please contact our data protection officer, heyData GmbH, at the following address:"
          )}
        </p>

        <p className="text-justify  text-black">
          {t("heyData GmbH ")} <br />
          {t("Schützenstraße 5  ")}
          <br />
          {t("10117 Berlin")} {t("Deutschland")}
          <br />
          <a
            href="mailto:datenschutz@heydata.de"
            className="text-blue-600 hover:underline"
          >
            datenschutz@heydata.de
          </a>
        </p>

        <br />
      </div>
      {/* Section 2 */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          {t("3. Collection and Processing of Personal Data")}
        </h2>

        <h3 className="text-lg font-semibold mt-4">
          {t("Automatically Collected Data")}
        </h3>
        <p className="text-justify mb-4 text-black">
          {t(
            "During website visits, certain data is automatically collected, such as IP address, access time, visited pages, browser version, and operating system."
          )}
        </p>

        <h3 className="text-lg font-semibold mt-4">
          {t("Data from Contact Forms")}
        </h3>
        <p className="text-justify mb-4 text-black">
          {t(
            "When you contact us via email or contact form, we process your name, email address, and message content."
          )}
        </p>

        <h3 className="text-lg font-semibold mt-4">{t("Use of Cookies")}</h3>
        <p className="text-justify text-black">
          {t(
            "We use cookies to enhance website usability. You can adjust cookie settings anytime."
          )}
        </p>
        <br />
      </div>

      {/* Section 3 */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          {t("4. Web Analysis & Tracking Technologies")}
        </h2>

        <h3 className="text-lg font-semibold mt-4">{t("Google Analytics")}</h3>
        <p className="text-justify mb-4 text-black">
          {t(
            "This website uses Google Analytics for site usage analysis. Data may be transmitted to Google servers in the USA."
          )}
        </p>

        <h3 className="text-lg font-semibold mt-4">
          {t("LinkedIn Insight Tag")}
        </h3>
        <p className="text-justify mb-4 text-black">
          {t(
            "We use LinkedIn Insight Tag for website analysis and targeted advertising."
          )}
        </p>

        <h3 className="text-lg font-semibold mt-4">
          {t("Google Tag Manager")}
        </h3>
        <p className="text-justify mb-4 text-black">
          {t("Allows management of analytics and marketing tags.")}
        </p>

        <h3 className="text-lg font-semibold mt-4">{t("SimilarWeb")}</h3>
        <p className="text-justify mb-4 text-black">
          {t("Used to analyze website visitor behavior.")}
        </p>

        <h3 className="text-lg font-semibold mt-4">{t("Semrush")}</h3>
        <p className="text-justify mb-4 text-black">
          {t("Provides search engine and web traffic analysis.")}
        </p>

        <h3 className="text-lg font-semibold mt-4">{t("Leadfeeder")}</h3>
        <p className="text-justify text-black">
          {t("Analyzes which companies visit our website.")}
        </p>
        <br />
      </div>

      {/* Section 4 */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          {t("5. Your Rights as a Data Subject")}
        </h2>
        <p className="text-justify text-black">
          {t(
            "You have the right to request access, rectification, deletion, restriction of processing, and data portability under GDPR."
          )}
        </p>
      </div>

      {/* Section 5 */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          {t("6. Changes to this Privacy Policy")}
        </h2>
        <p className="text-justify text-black">
          {t(
            "We reserve the right to update this policy to comply with legal requirements."
          )}
        </p>
        <br />
      </div>

      {/* Last updated */}
      <div>
        <h4 className=" text-sm text-black">{t("Last updated: 01.06.2024")}</h4>
      </div>
    </div>
  );
};

export default PrivacyPolicySection;
