import React from "react";
import { FaMobileAlt, FaCode, FaBug } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import "./SpecialServices.css";
import { useTranslation } from "react-i18next";

const SpecialServices = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t("Battery Management Software Development"),
      icon: <FaBug />,
      description: t(
        "Advanced Battery Management Software (EMS) solutions for automotive, e-mobility, and industrial applications ensure precise cell monitoring, charge/discharge control, temperature regulation, and safety management. Through innovative testing strategies, these systems deliver scalability, energy efficiency, and long-term reliability for sustainable energy management."
      ),
      link: "/Battery-Management-Software-Entwicklung", // Unique link for each service
    },

    {
      id: 2,
      title: t("Energy Management Software (EMS) Development"),
      icon: <FaCode />,
      description: t(
        "We provide advanced Energy Management Software (EMS) for industrial, building, microgrid, and e-mobility systems. Our solutions include peak shaving, load management, energy forecasting, storage and PV optimization, as well as e-mobility management. We ensure secure integration, ISO 50001 compliance, and customized solutions for sustainable, efficient energy systems."
      ),
      link: "/Energy-Management-Software-(EMS)-Entwicklung", // Unique link for each service
    },

    {
      id: 3,
      title: t("Embedded Systems Development"),
      icon: <FaMobileAlt />,
      description: t(
        "Tailor-made embedded solutions for industrial embedded systems and automotive embedded software, ensuring functional safety in embedded systems with edge computing in embedded systems and AI in embedded systems. Our expertise includes programming languages such as C, C++, Python, and Rust, running on FreeRTOS, Zephyr."
      ),
      link: "/Embedded-Systeme-Entwicklung", // Unique link for each service
    },
    {
      id: 4,
      title: t("Functional Safety & Certifiable Systems"),
      icon: <FaMobileAlt />,
      description: t(
        "Functional safety development and safety-oriented system solutions that are standards-compliant, scalable, and auditable. Provided by a software and electronics development agency with strong expertise in functional safety, system and software architecture, risk analysis, test strategies, and certification preparation according to ISO 26262, IEC 61508, and EN 50128/50129."
      ),
      link: "/Functional-Safety-&-Zertifizierbare-Systeme", // Unique link for each service
    },

    {
      id: 5,
      title: t("Battery Management System Security & Pentesting"),
      icon: <FaCode />,
      description: t(
        "Our specialized security solutions for Battery Management Systems (BMS) protect critical energy storage in automotive, industrial, and IoT applications. By conducting targeted penetration tests, analyzing firmware, hardware, and communication protocols, and securing cloud integrations, we ensure tamper-proof, resilient, and future-ready BMS systems – from the battery cell to the cloud."
      ),
      highlight: true,
      link: "/Battery-Management-System-Sicherheit-&-Penetrationstests", // Unique link for each service
    },
    {
      id: 6,
      title: t("Hardware Design & PCB Prototyping"),
      icon: <FaBug />,
      description: t(
        "High-quality electronics development, engineering services, and high-voltage battery storage solutions for circuit board design, PCB prototyping, and hardware manufacturing. We specialize in designing custom embedded solutions using STM32, ESP32, and Raspberry Pi."
      ),
      link: "/Hardware-Design-PCB-Prototyping", // Unique link for each service
    },
  ];

  return (
    <section className="special-services">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("Our Special")} <span className="highlight_01">{t("Services")}</span>{" "}
        {t("we offer")}
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <NavLink
            to={service.link} // Link to the corresponding service page
            key={service.id}
            className={`service-card ${
              service.highlight ? "blue-highlight" : ""
            }`}
            style={{ textDecoration: "none" }}
          >
            <motion.div
              className="service-card-content"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.9 }}
            >
              <motion.div
                className="service-icon"
                whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
              >
                {service.icon}
              </motion.div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default SpecialServices;
