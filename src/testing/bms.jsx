import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Bms = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 px-6 sm:px-8 lg:px-16 py-12 space-y-16 lg:mx-12 mt-12">
        {/* Intro Section */}
        <section className="space-y-6 max-w-6xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Battery Management System Testing
          </h1>

          <p className="text-gray-800 leading-relaxed">
            Wir testen Battery Management Systeme ganzheitlich: von
            Zellüberwachungs- und Messfunktionen über Lade-/ Entladestrategien
            bis hin zu Diagnose-, Kommunikations- und Sicherheitsmechanismen.
            Dabei berücksichtigen wir reale Betriebsbedingungen sowie kritische
            Fehler- und Grenzfälle.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Mit modernen Testmethoden validieren wir BMS-Funktionen wie State of
            Charge (SoC), State of Health (SoH), Zellbalancing,
            Temperaturüberwachung und Schutzlogiken. Unsere Tests decken sowohl
            Software-, Hardware- als auch Systemaspekte ab und sorgen für
            reproduzierbare und belastbare Ergebnisse.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Mira Elektronikentwicklung kombiniert tiefgehendes BMS- und
            Systemverständnis mit strukturierten Teststrategien, um höchste
            Qualität, funktionale Sicherheit und Zuverlässigkeit über den
            gesamten Entwicklungszyklus hinweg zu gewährleisten.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Wir bieten Ingenieur-Dienstleistungen und maßgeschneiderte
            Testlösungen, die Unternehmen bei der Entwicklung, Validierung und
            Serienfreigabe moderner Battery Management Systeme unterstützen.
          </p>
        </section>

        {/* Prozesse Section */}
        <section className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Unser Prozesse für Battery Management System Testing
          </h2>

          <div className="bg-white rounded-2xl  max-w-6xl">
            <p className="text-gray-800 leading-relaxed">
              Jede Testkomponente ist gezielt ausgewählt, um Sicherheit,
              Zuverlässigkeit und Normkonformität von Battery Management
              Systemen sicherzustellen – von der Zellmessung bis zur
              Gesamtfahrzeugintegration. Entwickelt von Mira
              Elektronikentwicklung.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Testmethoden & Teststufen",
                items: [
                  "Unit-, Integrations- und Systemtests",
                  "SIL / MIL / PIL / HIL-Tests",
                  "Regressionstests",
                  "End-of-Line- (EOL) & Produktionstests",
                ],
              },
              {
                title: "BMS-Funktionsabsicherung",
                items: [
                  "Zellspannungs- & Strommessung",
                  "Temperaturüberwachung",
                  "Lade- / Entlademanagement",
                  "Zellbalancing",
                  "SoC- / SoH-Validierung",
                ],
              },
              {
                title: "Hardware- & Testplattformen",
                items: [
                  "BMS-Steuergeräte",
                  "Zellüberwachungs- / AFE-ICs",
                  "Batterie-Simulatoren & Lasten",
                  "Sensor- & Aktor-Simulation",
                ],
              },
              {
                title: "Kommunikation & Diagnose",
                items: [
                  "CAN, CAN-FD, LIN",
                  "SPI, I²C, UART",
                  "ISO-TP / UDS-Diagnose",
                  "Fehlercodes, Event- & Trace-Analyse",
                ],
              },
              {
                title: "Sicherheits- & Fehlertests",
                items: [
                  "Schutzfunktionen (OV / UV / OC / OT)",
                  "Watchdog-Tests",
                  "Fehlereinspritzung",
                  "Grenzwert- & Corner-Case-Tests",
                ],
              },
              {
                title: "Werkzeuge & Testautomatisierung",
                items: [
                  "Python-basierte Testframeworks",
                  "CI / CD-Integration",
                  "Automatisierte Testausführung",
                  "Logging & Reporting",
                ],
              },
              {
                title: "Normen & Freigabeprozesse",
                items: [
                  "ISO 26262",
                  "Automotive SPICE",
                  "OEM-spezifische Vorgaben",
                  "Traceability von Anforderungen bis Testergebnis",
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

export default Bms;
