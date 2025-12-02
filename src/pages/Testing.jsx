import React from "react";
import { useTranslation } from "react-i18next"; // for translation
import Navbar from "../components/Navbar"; // adjust path if needed
import Footer from "../components/Footer"; // adjust path if needed

const Testing = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 mt-12">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 px-6 sm:px-8 lg:px-16 py-12 max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            {t(
              "Partnership with Treo – More Security. More Speed. More Future."
            )}
          </h1>

          {/* Treo Image */}
          {/* <div className="mt-6 mb-8">
            <img
              src="/images/testimg.png"
              alt={t(
                "Partnership with Treo - Collaboration between Mira Electronics Development and Treo"
              )}
              className="w-full h-auto max-h-[600px] object-contain rounded-lg shadow-lg mt-6"
            />
          </div> */}
        </section>

        {/* Introduction */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            {t(
              "Stronger Together: Testing Expertise Meets Engineering Excellence"
            )}
          </h2>
          <p className="text-gray-800 leading-relaxed">
            {t(
              "The collaboration between Mira Electronics Development and Treo brings together two worlds that complement each other perfectly:"
            )}
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-800 leading-relaxed">
            <li>
              {t("Accredited testing and inspection procedures on one side –")}
            </li>
            <li>{t("Modern embedded and safety development on the other.")}</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            {t(
              "For our customers, this creates a reliable, seamless development and certification process, that reduces risks and accelerates time-to-market."
            )}
          </p>
        </section>

        {/* Why Treo */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            {t("Why Treo?")}
          </h2>
          <p className="text-gray-800 leading-relaxed">
            {t("Treo is one of the leading testing companies for:")}
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-800 leading-relaxed">
            <li>{t("EMC and electrical safety")}</li>
            <li>{t("Mechanical & climatic tests")}</li>
            <li>{t("Vibration and shock tests")}</li>
            <li>{t("Flammability and material tests")}</li>
            <li>{t("Standards compliance & certification support")}</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            {t(
              "Through the partnership, this testing expertise flows directly into our development processes."
            )}
          </p>
        </section>

        {/* Advantages */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            {t(
              "Your Advantage: Development Processes Designed for Certification from the Start"
            )}
          </h2>
          <div className="mt-6 mb-8">
            <img
              src="/images/test.png"
              alt={t(
                "Partnership with Treo - Collaboration between Mira Electronics Development and Treo"
              )}
              className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-lg"
            />
          </div>
          <p className="text-gray-800 leading-relaxed">
            {t(
              "Through close coordination with Treo, we consider the later testing requirements already during:"
            )}
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-800 leading-relaxed">
            <li>{t("System architecture")}</li>
            <li>{t("Hardware development")}</li>
            <li>{t("Functional safety analysis (FMEDA, FTA, HARA)")}</li>
            <li>{t("Software and diagnostic concept")}</li>
            <li>{t("Prototype validation")}</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            {t(
              "Errors that would otherwise occur only in the testing phase are detected early. This saves time, budget, and technical iterations."
            )}
          </p>
        </section>

        {/* Process */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            {t("From Idea to Certified Solution – Seamlessly")}
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-800 leading-relaxed">
            <li>{t("Faster certifications")}</li>
            <li>{t("Reduced development risks")}</li>
            <li>
              {t("Optimized hardware designs through pre-compliance analyses")}
            </li>
            <li>{t("Validated safety concepts for demanding industries")}</li>
            <li>{t("Reproducible quality standards for serial products")}</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            {t(
              "Through the seamless process, customers receive a robust, standards-compliant solution – without media breaks or responsibility gaps."
            )}
          </p>
        </section>

        {/* Engineering + Testing */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            {t("Engineering + Testing = Maximum Reliability")}
          </h2>
          <div className="mt-6 mb-8">
            <img
              src="/images/newone.png"
              alt={t(
                "Partnership with Treo - Collaboration between Mira Electronics Development and Treo"
              )}
              className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <p className="text-gray-800 leading-relaxed">
            {t("Mira brings a broad range of development competencies:")}
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-800 leading-relaxed">
            <li>{t("Embedded systems")}</li>
            <li>{t("Battery and energy management")}</li>
            <li>{t("Safety electronics (ISO 26262, IEC 61508)")}</li>
            <li>{t("Sensors & signal processing")}</li>
            <li>{t("Real-time software design")}</li>
            <li>{t("Industrial and automotive technologies")}</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            {t(
              "With Treo as an accredited testing partner, we create solutions that not only work – but are officially tested and technically robust."
            )}
          </p>
        </section>

        {/* Target Industries */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            {t("For Industries with the Highest Demands")}
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-800 leading-relaxed">
            <li>{t("Automotive & Safety Electronics")}</li>
            <li>{t("Battery & Energy Systems")}</li>
            <li>{t("Industrial and Mechanical Engineering")}</li>
            <li>{t("Rail & Transportation")}</li>
            <li>{t("Medical-related applications")}</li>
            <li>{t("Aerospace components")}</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            {t(
              "Wherever standards, safety, and quality are crucial, customers benefit from the combination of engineering and testing lab."
            )}
          </p>
        </section>

        {/* Competitive Advantage */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            {t("Your Competitive Advantage")}
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-800 leading-relaxed">
            <li>
              {t(
                "Planning reliability: Testable designs from the first prototype"
              )}
            </li>
            <li>{t("Transparency: Clear test and risk analyses")}</li>
            <li>
              {t("Higher efficiency: Fewer iterations, faster decisions")}
            </li>
            <li>
              {t("Proven quality: Accepted test reports and certificates")}
            </li>
            <li>
              {t("Single point of contact: Continuous technical support")}
            </li>
            <li>{t("Ready for the next development stage")}</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            {t(
              "The combination of Mira Electronics Development and Treo creates an ecosystem that unites technical innovation and certified quality. This results in robust, certifiable products – from the first idea to series release."
            )}
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Testing;
