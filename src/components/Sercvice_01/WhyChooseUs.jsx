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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {t("Why We Are the Right Choice for You")}
          </h2>
          <p className="text-base text-gray-600 text-justify">
            {t(
              "Mira Electronics Development is your partner for embedded systems that are powerful, scalable, and future-proof. We combine process analysis, intelligent system architectures, and innovative technologies to create solutions that perfectly match the needs of modern businesses."
            )}
          </p>
        </div>

        {/* Right side: Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-3">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaCar className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Advanced Tech Stack")}
              </h3>
              <p className="text-sm text-gray-600 text-justify">
                {t(
                  "Use of state-of-the-art hardware platforms, operating systems, and programming languages – complemented by professional engineering services."
                )}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaCogs className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Tailored Solutions")}
              </h3>
              <p className="text-sm text-gray-600 text-justify">
                {t(
                  "Development of customized embedded systems that can flexibly adapt to your business processes and growth strategies."
                )}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaLightbulb className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Fast Prototyping")}
              </h3>
              <p className="text-sm text-gray-600 text-justify">
                {t(
                  "Short development cycles and quick PCB testing ensure that your ideas can be validated early and brought to market quickly."
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
