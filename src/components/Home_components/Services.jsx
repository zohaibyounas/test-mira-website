import React, { useState } from "react";
import "./Services.css";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const servicesData = [
    {
      title: t("Energy & Battery Systems"),
      shortDesc: t(
        "We develop intelligent Battery Management Systems (BMS) for demanding applications – from mobile devices to stationary storage systems. Our BMS solutions are designed for safety, efficiency, and scalability."
      ),
      fullDesc: t(
        "Precise cell monitoring & active balancing (LFP, LTO, NMC, etc.)Communication via CAN, LIN, Ethernet – including redundancy.Development in accordance with IEC 61508 / ISO 26262 (SIL/ASIL-compliant).Integrated diagnostic functions & over-the-air (OTA) software updates.Series-ready prototyping and EMC-compliant design.Whether in automotive, industrial, or railway applications – we develop powerful, safe BMS solutions that reliably control and protect your energy systems."
      ),
    },
    // {
    //   title: t("Building & Access Control"),
    //   shortDesc: t(
    //     "With our eID-based access technology, we bring digital security right to your building's doorstep. Whether it's a data center, production facility, or administrative building – we enable legally compliant, person-specific access without keys or passwords."
    //   ),
    //   fullDesc: t(
    //     "The eID function of the German ID card enables government-certified digital identity verification – fast, secure, and GDPR-compliant. Using NFC-enabled devices or terminals, a person's identity is verified before access is granted.Access only after successful eID verification (e.g., via smartphone or card reader)No keys, no passwords – no security gaps Time-limited, role-based access rights (“Technician,” “Visitor,” “Auditor”) Audit-proof logging of all access events Easy integration into existing access control systems Applications:Industrial facilities & critical infrastructure (KRITIS)Data centers, laboratories, utility buildings Temporary access for external service providers or maintenance teams Experience digital access security at the highest level – with eID-based solutions from Mira."
    //   ),
    // },
    {
      title: t("Embedded Systems & Cloud Integration"),
      shortDesc: t(
        "We develop high-performance embedded systems with seamless cloud connectivity – for smart products, connected applications, and automated processes."
      ),
      fullDesc: t(
        "Our Services: Development of microcontroller-based systems (ARM, STM32, AURIX™ etc.).Integration of communication technologies: Wi-Fi, BLE, LoRaWAN, LTE.Cloud connectivity via MQTT, REST APIs, or proprietary protocols.Edge computing logic for local pre-processing.OTA updates, remote diagnostics, and lifecycle management.Data modeling and integration with cloud platforms like AWS, Azure, or Telekom Cloud  Your Benefits: Faster time-to-market through proven architectures.Full control over devices, data, and security.Scalable platform for future features and business models.Whether it's Smart Industry, IoT devices, or embedded gateways – we combine embedded intelligence with connected efficiency."
      ),
    },
    {
      title: t("Medical – Sleep Tracking for Health Monitoring"),
      shortDesc: t(
        "The sleep tracking system developed by Mira Elektronikentwicklung is an intelligent solution for monitoring patients with sleep and chronic conditions. It captures vital data such as heart rate, SpO₂, and sleep patterns in real time – contactless, precise, and cloud-based."
      ),
      fullDesc: t(
        "Key Features: Sensor integration for vital signs and environmental data.Snoring and sleep phase analysis.Secure cloud connectivity & remote access.Automated operation for clinical and home useApplications: Detection of sleep apnea and hypoxia.Homecare monitoring for at-risk patients.Preventive health monitoring for the elderly With this system, we bridge the gap between wearables and clinical diagnostics – for greater safety during sleep."
      ),
    },
    {
      title: t(
        "Automotive – Intelligent Embedded Solutions for Vehicle Diagnostics and Control"
      ),
      shortDesc: t(
        "Mira Electronics Development offers powerful embedded solutions for automotive applications.We have developed a customizable OBD-II firmware based on the dsPIC33EP256GP504, which, in addition to ISO 15765-4 (CAN), also supports features like multi-frame processing, CAN filtering, and dynamic baud rates."
      ),
      fullDesc: t(
        "Our solution provides diagnostic data such as VIN, RPM, speed, and temperature – and enables control of external peripherals via GPIO, ADC, and custom commands. Development is carried out in Embedded C with comprehensive automated testing based on Python – ensuring maximum stability and quality. Ideal for: Vehicle diagnostics, embedded control systems & CAN-based applications."
      ),
    },
  ];

  return (
    <section className="services">
      <div className="services-header">
        <h2 className="services-title">
          {t("Applications &")}{" "}
          <span className="highlight_01">{t("development skills")}</span>
        </h2>
      </div>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`service-card ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <h3>{service.title}</h3>
            {/* 👇 show both short + full description if expanded */}
            <p>
              {service.shortDesc}
              {expandedIndex === index && (
                <>
                  <br />
                  <br />
                  {service.fullDesc}
                </>
              )}
            </p>
            <button
              className="learn-more"
              onClick={(e) => {
                e.stopPropagation(); // Prevent toggle when clicking button
                handleToggle(index);
              }}
            >
              {expandedIndex === index ? t("Show Less") : t("Read More")} ➝
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
