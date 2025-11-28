"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const CoreIndustries = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 px-6 py-20 overflow-x-hidden overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between overflow-x-hidden overflow-hidden">
        {/* Left side illustration */}
        <div className="flex-1 flex justify-center mb-10 md:mb-0">
          <img
            src="/images/illustration.png"
            alt={t("Illustration")}
            className="w-3/5 h-auto"
          />
        </div>

        {/* Right side content */}
        <div className="flex-1 md:pl-12 text-gray-600">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">
            {t("Our")}{" "}
            <span className="text-blue-600">
              {t("Technology Stack – Functional Safety")}
            </span>
          </h2>

          <p className="mb-8 leading-relaxed text-gray-800">
            {t(
              "Our solutions are developed according to the principles of functional safety — robust, traceable, and auditable. Every technology used is carefully evaluated and documented in accordance with standard requirements to ensure maximum reliability."
            )}
          </p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-4 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <p className="text-gray-800">
                <b className="text-gray-800">
                  {t("Safety Standards & Regulations")}:
                </b>{" "}
                {t(
                  "ISO 26262 (Automotive), IEC 61508 (Industrial), EN 50128 / EN 50129 (Rail), ISO 13849 (Machinery)"
                )}
              </p>
            </li>

            <li className="flex items-start">
              <span className="w-3 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <p className="text-gray-800">
                <b>{t("Safety Methods & Evidence")}:</b>{" "}
                {t(
                  "HARA, FMEA, FMEDA, FTA, DFA, Diagnostic Coverage, Safety Case, Traceability"
                )}
              </p>
            </li>

            <li className="flex items-start">
              <span className="w-2.5 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <p className="text-gray-800">
                <b>{t("Programming Languages & Frameworks")}:</b>{" "}
                {t("C, C++, Embedded C, MISRA-C, Python (Scripting & Testing)")}
              </p>
            </li>

            <li className="flex items-start">
              <span className="w-3 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <p className="text-gray-800">
                <b>{t("Operating Systems & Safety Kernels")}:</b>{" "}
                {t(
                  "FreeRTOS (Safety Certified), SafeRTOS, Zephyr, AUTOSAR Classic / Adaptive"
                )}
              </p>
            </li>

            <li className="flex items-start">
              <span className="w-3.5 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <p className="text-gray-800">
                <b>{t("Hardware Platforms")}:</b>{" "}
                {t(
                  "Infineon AURIX (ASIL-D), NXP S32K, STM32 (SIL-2), Texas Instruments TMS570, Microchip dsPIC33"
                )}
              </p>
            </li>

            <li className="flex items-start">
              <span className="w-3.5 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <p className="text-gray-800">
                <b>{t("Safety Mechanisms & Architecture")}:</b>{" "}
                {t(
                  "Lockstep MCUs, CRC Checks, Watchdogs, Plausibility Checks, Redundancies, Safe-State Strategies"
                )}
              </p>
            </li>

            <li className="flex items-start">
              <span className="w-5 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <p className="text-gray-800">
                <b>{t("Tools & Development Environment")}:</b>{" "}
                {t(
                  "JTAG / Trace32 / Debuggers, Vector CANoe / CANalyzer, Jenkins (CI/CD), Polarion / Codebeamer (Requirements Tracing), Enterprise Architect (Modeling)"
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CoreIndustries;
