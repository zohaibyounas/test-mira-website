import React from "react";
import { FaCar, FaCogs, FaLightbulb } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left side */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
            {t("Reasoning")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {t("Why We Are the Right Choice for You")}
          </h2>
          <p className="text-base text-gray-600">
            {t(
              "Choose our functional safety solutions — backed by deep experience in safety-critical systems, standards-compliant development, and practical implementation. Our expertise combines engineering mindset, system understanding, and process reliability — delivering dependable products that stand up to any test."
            )}
          </p>
        </div>

        {/* Right side: Icon boxes */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaCar className="text-blue-600 text-6xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("End-to-End Safety Development")}
              </h3>
              <p className="text-sm text-gray-600">
                {t(
                  "From hazard analysis to architecture design, safety mechanisms, and certification, we guide you through the entire development process in accordance with ISO 26262, IEC 61508, and EN 50128/50129."
                )}
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaCogs className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Scalable and Auditable Systems")}
              </h3>
              <p className="text-sm text-gray-600">
                {t(
                  "Our safety concepts are modular — cost-efficient, verifiable, and adaptable to different SIL and ASIL levels."
                )}
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaLightbulb className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Industry-Specific Expertise")}
              </h3>
              <p className="text-sm text-gray-600">
                {t(
                  "We support projects in the automotive, railway, energy and battery technology, and industrial automation sectors — anywhere safety holds the highest priority."
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
