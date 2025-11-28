import React from "react";
import { FaCar, FaCogs, FaLightbulb } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left side */}
        <div className="lg:w-1/2 space-y-6 ">
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
            {/* {t("Over Services")} */}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 ">
            {t(
              "Why We Are the Right Choice for Your Battery Management System"
            )}
          </h2>
          <p className="text-base text-gray-600 ">
            {t(
              "Rely on us for high-performance Battery Management Systems – developed by Mira Electronics Development. Our solutions are based on thorough process analysis, intelligent system architecture, and innovative approaches for the e-mobility, automotive, and energy storage industries."
            )}
          </p>
        </div>

        {/* Right side: Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaCar className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Advanced BMS Technology Stacks")}
              </h3>
              <p className="text-sm text-gray-600 text-justify">
                {t(
                  "Modern hardware platforms, precise cell monitoring ICs, and secure communication protocols for reliable energy management."
                )}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaCogs className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Tailor-Made BMS Solutions")}
              </h3>
              <p className="text-sm text-gray-600 text-justify">
                {t(
                  "Custom algorithms for State of Charge (SoC), State of Health (SoH), and cell balancing – precisely adapted to your application."
                )}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaLightbulb className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Rapid Prototyping & Validation")}
              </h3>
              <p className="text-sm text-gray-600 text-justify">
                {t(
                  "Efficient development and PCB testing, combined with real-time simulation and cloud monitoring for shorter time-to-market."
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
