import React from "react";
import { useTranslation } from "react-i18next";

const CoreIndustries = () => {
  const { t } = useTranslation();

  return (
    <section className="px-5 py-20 bg-gray-100 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Left side: Illustration */}
        <div className="flex-1 flex justify-center md:justify-start md:ml-[-5%]">
          <img
            src="/images/illustration.png"
            alt={t("Illustration")}
            className="max-w-[60%] h-auto"
          />
        </div>

        {/* Right side: Description and List */}
        <div className="flex-1 text-left mt-10 md:mt-0 md:pl-10">
          <h2 className="text-3xl font-bold mb-5 text-gray-800">
            {t("Our Technology Stack for Energy Management Software (EMS)")}
          </h2>
          <p className="text-base text-gray-600 mb-8 md:mr-20">
            {t(
              "Each component is carefully selected to ensure real-time capability, security, and efficiency in EMS projects – from data acquisition to optimization and visualization. Developed by MiraElektronikentwicklung."
            )}
          </p>

          <ul className="space-y-4">
            <li className="flex items-start text-gray-800">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>
                <b>{t("Programming Languages")}:</b>{" "}
                {t("Python, TypeScript/Node.js, Go, C/C++ (for edge/gateways)")}
              </span>
            </li>
            <li className="flex items-start text-gray-800">
              <span className="w-3.5 h-2.5 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>
                <b>{t("Runtime & platforms")}:</b>{" "}
                {t(
                  "Linux (server/edge), containerization & orchestration (Docker/Kubernetes), RTOS for gateways"
                )}
              </span>
            </li>
            <li className="flex items-start text-gray-800">
              <span className="w-3.5 h-2.5 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>
                <b>{t("Data storage")}:</b>{" "}
                {t(
                  "time series database (TSDB), relational SQL database, key-value cache, object storage (raw data/logs)"
                )}
              </span>
            </li>
            <li className="flex items-start text-gray-800">
              <span className="w-4 h-2.5 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>
                <b>{t("Communication & interfaces")}:</b>{" "}
                {t(
                  "MQTT, Modbus/TCP, OPC UA, OCPP (charging infrastructure), IEC 61850, REST/GraphQL, WebSockets"
                )}
              </span>
            </li>
            <li className="flex items-start text-gray-800">
              <span className="w-3 h-2.5 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>
                <b>{t("Messaging & streaming")}:</b>{" "}
                {t(
                  "message broker (MQTT/AMQP), event streaming for high data throughput"
                )}
              </span>
            </li>
            <li className="flex items-start text-gray-800">
              <span className="w-4 h-2.5 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>
                <b>{t("Analytics & optimization")}:</b>{" "}
                {t(
                  "time series forecasts (load/production), peak shaving & schedule optimization (LP/MILP), anomaly detection"
                )}
              </span>
            </li>
            <li className="flex items-start text-gray-800">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>
                <b>{t("Visualization & UI")}:</b>{" "}
                {t(
                  "modern web frontend (SPA/SSR), dashboards (energy/cost/CO₂)"
                )}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CoreIndustries;
