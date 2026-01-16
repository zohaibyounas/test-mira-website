import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EmbeddedSystems = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 px-6 sm:px-8 lg:px-16 py-12 space-y-16 lg:mx-12 mt-12">
        {/* Intro Section */}
        <section className="space-y-6 max-w-6xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Embedded Systems Testing
          </h1>

          <p className="text-gray-800 leading-relaxed">
            Wir testen Embedded Software und Hardware ganzheitlich: von
            mikrocontroller-naher Firmware über Echtzeitbetriebssysteme bis hin
            zu kompletten Steuergeräten. Dabei kombinieren wir strukturierte
            Testmethoden mit automatisierten Prüfprozessen für reproduzierbare
            und belastbare Ergebnisse.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Mit modernsten Teststrategien validieren wir Funktionen wie
            Task-Scheduling, Interrupt-Verhalten, Kommunikationsschnittstellen,
            Speicherverwaltung und Fehlermanagement – unter realistischen und
            auch extremen Betriebsbedingungen.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Mira Elektronikentwicklung verbindet tiefgehendes Embedded-Know-how
            mit normkonformen Testprozessen, um Risiken frühzeitig zu erkennen
            und Entwicklungszyklen nachhaltig zu verkürzen. Wir bieten
            Ingenieur-Dienstleistungen und maßgeschneiderte Testlösungen, die
            Unternehmen dabei unterstützen, robuste und zuverlässige Embedded-
            Systeme zu entwickeln.
          </p>
        </section>

        {/* Prozesse – Cards ONLY */}
        <section className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Unsere Prozesse für Embedded Systems Testing
          </h2>

          <div className="bg-white rounded-2xl   max-w-6xl">
            <p className="text-gray-800 leading-relaxed">
              Jede Testkomponente ist gezielt ausgewählt, um Zuverlässigkeit,
              Echtzeitfähigkeit und funktionale Sicherheit in Embedded-Projekten
              sicherzustellen – von der Low-Level-Firmware bis zur System- und
              Hardwarevalidierung. Entwickelt von Mira Elektronikentwicklung.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Programmiersprachen & Skripting",
                items: [
                  "C, C++",
                  "Python (Testautomatisierung, Testframeworks, Analyse & Tooling)",
                ],
              },
              {
                title: "Betriebssysteme & Laufzeitumgebungen",
                items: [
                  "FreeRTOS",
                  "Zephyr",
                  "Bare-Metal",
                  "Embedded Linux (RT-kritische & sicherheitsrelevante Komponenten)",
                ],
              },
              {
                title: "Hardwareplattformen",
                items: [
                  "ARM-Cortex-M MCUs",
                  "Sicherheitszertifizierte MCUs",
                  "SoCs",
                  "Sensor- & Aktorhardware",
                  "Peripherie-ICs",
                ],
              },
              {
                title: "Testmethoden & Teststufen",
                items: [
                  "Unit-, Integrations- und Systemtests",
                  "SIL / MIL / PIL / HIL",
                  "Regressionstests",
                  "End-of-Line-Tests",
                ],
              },
              {
                title: "Kommunikation & Schnittstellen",
                items: [
                  "CAN, CAN-FD, LIN",
                  "SPI, I²C, UART, Ethernet",
                  "Bus-Monitoring & Restbussimulation",
                  "Fehlerprovokation & Analyse",
                ],
              },
              {
                title: "Werkzeuge & Testinfrastruktur",
                items: [
                  "JTAG / SWD-Debugging",
                  "Logic Analyzer & Oszilloskop",
                  "Hardware-Debugger",
                  "Testframeworks",
                  "Git & CI/CD-Pipelines",
                ],
              },
              {
                title: "Sicherheits- & Robustheitsprüfungen",
                items: [
                  "Watchdog-Tests",
                  "Speicher- & Timing-Analysen",
                  "Fehlereinspritzung",
                  "Exception-Handling",
                  "Langzeit- & Stresstests",
                ],
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:bg-blue-600 hover:text-white cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-3 hover:text-white">
                  {card.title}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 hover:text-white">
                  {card.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EmbeddedSystems;
