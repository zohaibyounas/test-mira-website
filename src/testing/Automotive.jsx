import React from "react";
import { Link } from "react-router-dom";

const Automotive = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 px-6 sm:px-8 lg:px-16 py-12 space-y-12 lg:mx-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Schwerpunkte
        </h1>
        <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
          <li>
            <strong>Fahrzeug- und Komponentenprüfung:</strong> Umfassende Tests
            von elektronischen Steuergeräten, Sensoren, Aktoren und
            Batteriesystemen unter realistischen Bedingungen.
          </li>
          <li>
            <strong>Software- & Systemvalidierung:</strong> Validierung von
            Fahrzeugsoftware, Embedded-Systemen und Steueralgorithmen durch
            automatisierte Testframeworks und Echtzeit-Diagnose.
          </li>
          <li>
            <strong>Simulations- & Testplattformen:</strong> Einsatz von HIL-
            (Hardware-in-the-Loop) und SIL-Systemen (Software-in-the-Loop) zur
            frühzeitigen Fehlererkennung und Optimierung von Fahrzeugfunktionen.
          </li>
          <li>
            <strong>Datenanalyse & Reporting:</strong> Detaillierte Auswertung
            und Visualisierung von Testergebnissen, um fundierte Entscheidungen
            für Entwicklung und Serienproduktion zu unterstützen.
          </li>
        </ul>
        <Link to="/contact">
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Projekt jetzt starten
          </button>
        </Link>
      </section>

      {/* Automotive Testing im Detail */}
      {/* Automotive Testing im Detail – CARDS ONLY */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Unser Automotive-Testing im Detail
        </h2>

        {/* Intro Card */}
        <div className="bg-white rounded-2xl ">
          <p className="text-gray-800 leading-relaxed">
            Jede Testkomponente ist gezielt ausgewählt, um Qualität, Sicherheit
            und Nachvollziehbarkeit in automobilen Entwicklungsprojekten
            sicherzustellen – von der frühen Softwarevalidierung bis zur
            Serienfreigabe. Entwickelt von Mira Elektronikentwicklung.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
          {[
            {
              title: "Teststufen & Absicherung",
              items: [
                "Unit-, Integrations- und Systemtests",
                "Regressionstests & Smoke-Tests",
                "End-of-Line- (EOL) und produktionsnahe Prüfkonzepte",
                "Absicherung über den gesamten V-Modell-Prozess",
              ],
            },
            {
              title: "Normen & Compliance",
              items: [
                "ISO 26262 (funktionale Sicherheit)",
                "Automotive SPICE (ASPICE)",
                "MISRA-C / MISRA-C++",
                "Lückenlose Requirements- & Test-Traceability (z. B. DOORS, Polarion)",
              ],
            },
            {
              title: "Simulation & Modellbasierte Tests",
              items: [
                "MIL / SIL / PIL / HIL-Teststrategien",
                "Modellbasierte Entwicklung mit MATLAB/Simulink",
                "Szenario-, Grenzwert- und Fault-Injection-Tests",
                "Automatisierte Parameter- und Corner-Case-Analysen",
              ],
            },
            {
              title: "Hardware-in-the-Loop (HIL)",
              items: [
                "Echtzeitfähige HIL-Systeme für Steuergeräte & BMS",
                "Sensor- & Aktor-Simulation",
                "Fehler- und Diagnoseabsicherung (UDS, DTCs)",
                "Reproduzierbare Tests unter definierten Umweltbedingungen",
              ],
            },
            {
              title: "Automatisierung & CI/CD",
              items: [
                "Vollautomatisierte Testausführung in CI/CD-Pipelines",
                "Python-basierte Testframeworks & Skripting",
                "Continuous Testing bei jedem Software-Build",
                "Automatische Ergebnisaufbereitung & Reporting",
              ],
            },
            {
              title: "Kommunikation & Diagnose",
              items: [
                "CAN, CAN-FD, LIN, FlexRay, Ethernet",
                "ISO-TP, UDS, OBD-Diagnose",
                "Bus-Monitoring, Logging & Trace-Analyse",
                "Restbussimulation & Netzwerkfehler-Tests",
              ],
            },
            {
              title: "Werkzeuge & Analyse",
              items: [
                "Logic Analyzer, Oszilloskope, Bus-Analyzer",
                "Coverage- & Performance-Analysen",
                "Fehler-, Ereignis- & Zustandsprotokollierung",
                "Langzeittests & Stabilitätsanalysen",
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

      {/* Warum wir die richtige Wahl sind */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Warum wir die richtige Wahl für Automotive Testing sind
        </h2>
        <p className="text-gray-800 leading-relaxed">
          Setzen Sie auf ganzheitliche Test- und Validierungslösungen für
          automobile Steuergeräte und Battery-Management-Systeme – entwickelt
          von Mira Elektronikentwicklung. Unsere Testing-Ansätze verbinden
          tiefes Systemverständnis, normkonforme Prozesse und modernste
          Testautomatisierung für maximale Qualität und Sicherheit.
        </p>

        <h3 className="text-xl font-semibold mt-4">
          Umfassende Automotive-Teststrategien
        </h3>
        <p className="text-gray-800 leading-relaxed">
          Ganzheitliche Testkonzepte entlang des V-Modells – von Unit- und
          Integrationstests bis zu SIL-, HIL- und End-of-Line-Validierung. So
          stellen wir sicher, dass Software, Hardware und Systemverhalten
          zuverlässig zusammenspielen.
        </p>

        <h3 className="text-xl font-semibold mt-4">
          Normkonforme Absicherung & Traceability
        </h3>
        <p className="text-gray-800 leading-relaxed">
          Unsere Tests erfüllen höchste Anforderungen gemäß ISO 26262,
          Automotive SPICE und MISRA. Durch lückenlose Anforderungs-, Test- und
          Fehlerverfolgung schaffen wir Transparenz, Auditfähigkeit und
          nachhaltige Qualität.
        </p>

        <h3 className="text-xl font-semibold mt-4">
          Schnelle Validierung & Automatisierung
        </h3>
        <p className="text-gray-800 leading-relaxed">
          Automatisierte Testframeworks, CI/CD-Integration und reproduzierbare
          Tests ermöglichen kurze Feedbackzyklen, schnelle Iterationen und
          verkürzte Entwicklungszeiten – ohne Kompromisse bei Stabilität und
          Sicherheit.
        </p>
      </section>
    </div>
  );
};

export default Automotive;
