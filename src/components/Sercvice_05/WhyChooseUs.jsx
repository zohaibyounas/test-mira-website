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
            {/* {t("Reasoning")} */}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 ">
            {t(
              "Why We Are the Right Choice for Your Energy Management System (EMS)"
            )}
          </h2>
          <p className="text-base text-gray-600">
            {t(
              "Choose MiraElektronikentwicklung for high-performance Energy Management Software (EMS). Our solutions are built on in-depth process analysis, intelligent system architecture, and innovative optimization approaches – from peak shaving and load management to forecasting and the integration of PV, storage, and charging infrastructure. This enables you to achieve measurably lower energy costs, greater grid stability, and ISO 50001-compliant transparency."
            )}
          </p>
        </div>

        {/* Right side: Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-9">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaCar className="text-blue-600 text-6xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Advanced EMS Technology Stacks")}
              </h3>
              <p className="text-sm text-gray-600">
                {t(
                  "Modern edge gateways, meter/sensor interfaces, and secure protocols (MQTT, Modbus/TCP, OPC UA, OCPP). Time-series data storage & cloud/on-premises platforms for reliable energy monitoring and control."
                )}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaCogs className="text-blue-600 text-6xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Tailor-Made EMS Solutions")}
              </h3>
              <p className="text-sm text-gray-600">
                {t(
                  "Peak shaving, load shifting, and dynamic schedule/tariff optimization with forecasts (load, PV, storage). Integration of PV, storage, and charging infrastructure with prioritized control loops and fallback strategies."
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
              <p className="text-sm text-gray-600">
                {t(
                  "Fast piloting, HIL/SIL simulation, automated testing, and KPI reporting. Commissioning & remote/cloud monitoring for shorter time-to-market."
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
