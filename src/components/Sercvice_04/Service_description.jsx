import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EngineeringServices = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-12">
        {/* Left Side - Intro */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
            {t("Our Services")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug">
            {t("Our Functional Safety Engineering Services")}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t(
              "We develop and validate safety-oriented systems for automotive, industrial, railway, and energy applications. From the concept phase and risk analyses to certification, we deliver verifiable, scalable, and auditable solutions in compliance with international standards such as ISO 26262, IEC 61508, and EN 50128/50129."
            )}
          </p>

          <NavLink
            to="/contact"
            className="inline-block mt-4 px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300 font-medium"
          >
            {t("Start Project Now")}
          </NavLink>
        </div>

        {/* Center - Image */}
        <div className="w-full lg:w-full  rounded-xl overflow-hidden shadow-md">
          <img
            src="/images/B10.jpg"
            alt={t("Functional Safety Engineering")}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Right Side - Focus Areas */}
        <div className="lg:w-1/2 flex flex-col items-start space-y-8">
          <ul className="w-full text-gray-600 text-lg space-y-6">
            <li>
              <span className="font-semibold text-gray-800">
                {t("Safety Concepts & Risk Analyses:")}
              </span>{" "}
              {/* {t(
                "Development of Safety Goals, HARA, FMEA, FMEDA, and FTA for hardware and software — precisely documented and verifiable."
              )} */}
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                {t("Architecture & Safety Mechanisms:")}
              </span>{" "}
              {/* {t(
                "Design of standards-compliant system and software architectures featuring watchdogs, plausibility checks, CRC checks, and safe-state strategies."
              )} */}
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                {t("Validation & Evidence Management:")}
              </span>{" "}
              {/* {t(
                "Test concepts, coverage analyses, requirements tracing, and safety case preparation for audit and certification processes."
              )} */}
            </li>
            <li>
              <span className="font-semibold text-gray-800">
                {t("Automotive & Industrial Integration:")}
              </span>{" "}
              {/* {t(
                "Development and assessment of safety-related control units (ECUs), energy, and sensor systems using protocols such as CAN, CAN FD, SPI, I²C, and Ethernet."
              )} */}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EngineeringServices;
