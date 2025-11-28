import React from "react";
import { useTranslation } from "react-i18next";

const CoreIndustries = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Illustration */}
          <div className="flex justify-center">
            <img
              src="/images/illustration.png"
              alt={t("Illustration")}
              className="w-3/4 max-w-sm md:max-w-md lg:max-w-lg h-auto"
            />
          </div>

          {/* Right: Text */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              {t("Our Technology Stack for Battery Management Systems")}{" "}
              <span className="text-blue-600">{t("")}</span> {t("Stack")}
            </h2>

            <p className="text-base md:text-md text-gray-600">
              {t(
                "Each component is carefully selected to ensure real-time capability, safety, and efficiency in BMS projects – from cell monitoring to diagnostics. Developed by Mira Electronics Development."
              )}
            </p>

            <ul className="mt-6 space-y-4 ">
              {/* 1 */}
              <li className="flex items-start text-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-3 mt-2 flex-shrink-0"></span>
                <div className="flex-1">
                  <span className="font-semibold block md:inline">
                    {t("Programming Languages")}:
                  </span>
                  <span className="block md:inline md:ml-1">
                    {t("C, C++, Rust, Python (testing, simulation, tooling)")}
                  </span>
                </div>
              </li>

              {/* 2 */}
              <li className="flex items-start text-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-3 mt-2 flex-shrink-0"></span>
                <div className="flex-1">
                  <span className="font-semibold block md:inline">
                    {t("Operating Systems")}:
                  </span>
                  <span className="block md:inline md:ml-1">
                    {t(
                      "FreeRTOS, Zephyr, Bare-Metal (real-time critical components)"
                    )}
                  </span>
                </div>
              </li>

              {/* 3 */}
              <li className="flex items-start text-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-3 mt-2 flex-shrink-0"></span>
                <div className="flex-1">
                  <span className="font-semibold block md:inline">
                    {t("Hardware Platforms")}:
                  </span>
                  <span className="block md:inline md:ml-1">
                    {t(
                      "ARM Cortex MCUs, functionally safe MCUs, DSPs/MCUs for control; cell monitoring/AFE ICs & isolation monitoring"
                    )}
                  </span>
                </div>
              </li>

              {/* 4 */}
              <li className="flex items-start text-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-3 mt-2 flex-shrink-0"></span>
                <div className="flex-1">
                  <span className="font-semibold block md:inline">
                    {t("Communication Protocols")}:
                  </span>
                  <span className="block md:inline md:ml-1">
                    {t(
                      "CAN/CAN-FD, LIN, SPI, I²C, UART; ISO-TP/UDS for diagnostics"
                    )}
                  </span>
                </div>
              </li>

              {/* 5 */}
              <li className="flex items-start text-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-3 mt-2 flex-shrink-0"></span>
                <div className="flex-1">
                  <span className="font-semibold block md:inline">
                    {t("Tools & Development")}:
                  </span>
                  <span className="block md:inline md:ml-1">
                    {t(
                      "JTAG/SWD, logic analyzer & oscilloscope, Git & CI/CD, automated testing, model-based development/HIL-/SIL-simulation"
                    )}
                  </span>
                </div>
              </li>

              {/* 6 */}
              <li className="flex items-start text-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-3 mt-2 flex-shrink-0"></span>
                <div className="flex-1">
                  <span className="font-semibold block md:inline">
                    {t("Safety & Control Functions")}:
                  </span>
                  <span className="block md:inline md:ml-1">
                    {t(
                      "Balancing, SoC/SoH algorithms, protection logics (OV/UV/OC/OT), watchdogs, event/error logging"
                    )}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreIndustries;
