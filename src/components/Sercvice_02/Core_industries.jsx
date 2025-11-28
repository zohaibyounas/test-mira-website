import React from "react";
import { useTranslation } from "react-i18next";

const CoreIndustries = () => {
  const { t } = useTranslation();

  return (
    <section className="px-5 py-20 bg-gray-100 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto">
        {/* Left side: Illustration */}
        <div className="flex-1 flex justify-center lg:ml-[-10%]">
          <img
            src="/images/illustration.png"
            alt={t("Illustration")}
            className="max-w-[60%] h-auto"
          />
        </div>

        {/* Right side: Description and List */}
        <div className="flex-1 text-left lg:pl-10 lg:ml-10 mt-10 lg:mt-11 lg:mr-[-36]">
          <h2 className="text-3xl font-bold mb-5 text-gray-800">
            {t("Our BMS Pentesting Tech Stack")}
          </h2>
          <p className="text-base text-gray-600 mb-8  w-3/4">
            {t(
              "We use specialized tools and methodologies to reliably test Battery Management Systems for vulnerabilities and secure them against attacks."
            )}
          </p>
          <ul className="list-none space-y-3 leading-relaxed">
            <li className="flex items-start text-gray-800">
              <span className="w-2.5 h-2.5 mt-2 rounded-full bg-blue-500 mr-3"></span>
              <p className="text-gray-800">
                <b>{t("Protocol Analysis & Attack Simulation")}:</b> CANoe,
                Wireshark, Scapy, UDS Security Testing
              </p>
            </li>

            <li className="flex items-start text-gray-800">
              <span className="w-2.5 h-2.5 mt-2 rounded-full bg-blue-500 mr-3"></span>
              <p className="text-gray-800">
                <b>{t("Hardware & Debugging")}:</b>{" "}
                {t(
                  "JTAG/SWD Debugger, Logic Analyzer, ChipWhisperer, Oscilloscopes"
                )}
              </p>
            </li>

            <li className="flex items-start text-gray-800">
              <span className="w-2.5 h-2.5 mt-2 rounded-full bg-blue-500 mr-3"></span>
              <p className="text-gray-800">
                <b>{t("Firmware & Reverse Engineering")}:</b> IDA Pro, Ghidra,
                Binwalk, Radare2
              </p>
            </li>

            <li className="flex items-start text-gray-800">
              <span className="w-2.5 h-2.5 mt-2 rounded-full bg-blue-500 mr-3"></span>
              <p className="text-gray-800">
                <b>{t("Network & Communication Testing")}:</b> Metasploit, Burp
                Suite, MQTT Security Framework, LTE Cat.1 bis Testing
              </p>
            </li>

            <li className="flex items-start text-gray-800">
              <span className="w-2.5 h-2.5 mt-2 rounded-full bg-blue-500 mr-3"></span>
              <p className="text-gray-800">
                <b>{t("Fuzzing & Exploitation")}:</b> AFL (American Fuzzy Lop),
                Peach Fuzzer, CAN-Fuzzing-Frameworks
              </p>
            </li>

            <li className="flex items-start text-gray-800">
              <span className="w-2.5 h-2.5 mt-2 rounded-full bg-blue-500 mr-3"></span>
              <p className="text-gray-800">
                <b className="text-gray-800">
                  {t("Cloud & Backend Security")}:
                </b>{" "}
                TLS/SSL Auditing, OWASP ZAP, Container Security Tools
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CoreIndustries;
