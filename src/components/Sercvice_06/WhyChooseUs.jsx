import React from "react";
import "./WhyChooseUs.css"; // Import the CSS file
import { FaCar, FaCogs, FaLightbulb } from "react-icons/fa"; // Example of icons from react-icons
import { useTranslation } from "react-i18next"; // Import the translation hook

const WhyChooseUs = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left side */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
            {t("Reasoning")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {t("Why you should choose us")}
          </h2>
          <p className="text-base text-gray-600">
            {t(
              "Choose us for automotive embedded solutions driven by proven expertise in automotive lighting, workwear automotive mechatronics, chassis innovation, process analysis methods, and engineering services—delivering scalable and future-ready technologies tailored for modern mobility."
            )}
          </p>
        </div>

        {/* Right side: Boxes with icons and text */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaCar className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("End-to-End Hardware Development")}
              </h3>
              <p className="text-sm text-gray-600">
                {t(
                  "From schematic design to PCB assembly, system house Nuremberg delivers."
                )}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaCogs className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Scalable & Cost-Effective Solutions")}
              </h3>
              <p className="text-sm text-gray-600">
                {t(
                  "Optimized for high performance, low power in automotive check systems."
                )}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaLightbulb className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Industry-Specific Expertise")}
              </h3>
              <p className="text-sm text-gray-600">
                {t(
                  "Serving automotive company and industrial automation systems."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div />
      <div></div>
    </section>
  );
};

export default WhyChooseUs;
