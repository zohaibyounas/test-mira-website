import React from "react";

const Automotive = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 px-6 sm:px-8 lg:px-16 py-12 space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Schwerpunkte
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Fahrzeug- und Komponentenprüfung
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Umfassende Tests von elektronischen Steuergeräten, Sensoren,
              Aktoren und Batteriesystemen unter realistischen Bedingungen.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Software- & Systemvalidierung
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Validierung von Fahrzeugsoftware, Embedded-Systemen und
              Steueralgorithmen durch automatisierte Testframeworks und
              Echtzeit-Diagnose.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Simulations- & Testplattformen
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Einsatz von HIL- (Hardware-in-the-Loop) und SIL-Systemen
              (Software-in-the-Loop) zur frühzeitigen Fehlererkennung und
              Optimierung von Fahrzeugfunktionen.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Datenanalyse & Reporting
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Detaillierte Auswertung und Visualisierung von Testergebnissen, um
              fundierte Entscheidungen für Entwicklung und Serienproduktion zu
              unterstützen.
            </p>
          </div>
        </div>

        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Projekt jetzt starten
        </button>
      </section>

      {/* Automotive Testing im Detail */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Unser Automotive-Testing im Detail
        </h2>
        <p className="text-gray-800 leading-relaxed">
          Jede Testkomponente ist gezielt ausgewählt, um Qualität, Sicherheit
          und Nachvollziehbarkeit in automobilen Entwicklungsprojekten
          sicherzustellen – von der frühen Softwarevalidierung bis zur
          Serienfreigabe. Entwickelt von Mira Elektronikentwicklung.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {/* Card for Teststufen & Absicherung */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Teststufen & Absicherung
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Unit-, Integrations- und Systemtests</li>
              <li>Regressionstests & Smoke-Tests</li>
              <li>End-of-Line- (EOL) und produktionsnahe Prüfkonzepte</li>
              <li>Absicherung über den gesamten V-Modell-Prozess</li>
            </ul>
          </div>

          {/* Card for Normen & Compliance */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Normen & Compliance</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>ISO 26262 (funktionale Sicherheit)</li>
              <li>Automotive SPICE (ASPICE)</li>
              <li>MISRA-C / MISRA-C++</li>
              <li>
                Lückenlose Requirements- & Test-Traceability (z. B. DOORS,
                Polarion)
              </li>
            </ul>
          </div>

          {/* Card for Simulation & Modellbasierte Tests */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Simulation & Modellbasierte Tests
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>MIL / SIL / PIL / HIL-Teststrategien</li>
              <li>Modellbasierte Entwicklung mit MATLAB/Simulink</li>
              <li>Szenario-, Grenzwert- und Fault-Injection-Tests</li>
              <li>Automatisierte Parameter- und Corner-Case-Analysen</li>
            </ul>
          </div>

          {/* Card for Hardware-in-the-Loop */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Hardware-in-the-Loop (HIL)
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Echtzeitfähige HIL-Systeme für Steuergeräte & BMS</li>
              <li>Sensor- & Aktor-Simulation</li>
              <li>Fehler- und Diagnoseabsicherung (UDS, DTCs)</li>
              <li>Reproduzierbare Tests unter definierten Umweltbedingungen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Warum wir die richtige Wahl sind */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Warum wir die richtige Wahl für Automotive Testing sind
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Umfassende Automotive-Teststrategien
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Ganzheitliche Testkonzepte entlang des V-Modells – von Unit- und
              Integrationstests bis zu SIL-, HIL- und End-of-Line-Validierung.
              So stellen wir sicher, dass Software, Hardware und Systemverhalten
              zuverlässig zusammenspielen.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Normkonforme Absicherung & Traceability
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Unsere Tests erfüllen höchste Anforderungen gemäß ISO 26262,
              Automotive SPICE und MISRA. Durch lückenlose Anforderungs-, Test-
              und Fehlerverfolgung schaffen wir Transparenz, Auditfähigkeit und
              nachhaltige Qualität.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Schnelle Validierung & Automatisierung
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Automatisierte Testframeworks, CI/CD-Integration und
              reproduzierbare Tests ermöglichen kurze Feedbackzyklen, schnelle
              Iterationen und verkürzte Entwicklungszeiten – ohne Kompromisse
              bei Stabilität und Sicherheit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Automotive;
