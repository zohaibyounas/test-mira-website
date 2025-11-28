import React from "react";
import { FaCar, FaCogs, FaLightbulb } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left side */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
            {t("Reasoning")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {t("Why We Are the Right Choice for Your BMS Security")}
          </h2>
          <p className="text-base text-gray-600">
            {t(
              "Choose Mira Electronics Development for securing and testing Battery Management Systems (BMS). Our expertise covers embedded security, automotive penetration testing, and reliable security strategies for energy storage. We identify vulnerabilities in firmware, hardware, and communication protocols, simulate targeted attacks, and develop customized protection concepts – from the battery cell to the cloud. This ensures that your systems are not only high-performing, but also tamper-proof, resilient, and future-ready."
            )}
          </p>
        </div>

        {/* Right side: Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:mt-2">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaCar className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("End-to-End BMS Security")}
              </h3>
              <p className="text-sm text-gray-600">
                {t(
                  "From firmware analysis and penetration testing of control units to securing cloud backends – we provide comprehensive security solutions for Battery Management Systems."
                )}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaCogs className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Scalable & Future-Proof")}
              </h3>
              <p className="text-sm text-gray-600">
                {t(
                  "Our security strategies reliably protect BMS in automotive, industrial, and IoT applications, and can be flexibly adapted to growing requirements and emerging threats."
                )}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaLightbulb className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Customer-Oriented Service")}
              </h3>
              <p className="text-sm text-gray-600">
                {t(
                  "We develop customized security concepts for your BMS, support you from risk analysis through implementation, and ensure that your systems remain protected in the long term."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
