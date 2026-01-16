import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CyberSecurity = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 px-6 sm:px-8 lg:px-16 py-12 space-y-16 lg:mx-12 mt-12">
        {/* Intro Section */}
        <section className="space-y-6 max-w-6xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Cyber Security Penetration Testing
          </h1>

          <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed">
            <li>
              Wir analysieren digitale Systeme ganzheitlich: Netzwerke,
              Anwendungen, Steuergeräte und Kommunikationsschnittstellen. Ziel
              ist es, reale Angriffsvektoren aufzudecken und Sicherheitslücken
              frühzeitig zu schließen, bevor sie ausgenutzt werden können.
            </li>
            <li>
              Mit strukturierten Penetration-Testing-Methoden prüfen wir
              Zugriffskontrollen, Authentifizierungsmechanismen, Datenflüsse und
              Systemhärtung – unter Berücksichtigung aktueller
              Bedrohungsszenarien und Industriestandards.
            </li>
            <li>
              Mira Elektronikentwicklung kombiniert tiefgehendes
              Systemverständnis mit erprobten Cyber-Security-Strategien, um
              robuste, widerstandsfähige und zukunftssichere Systeme zu
              realisieren.
            </li>
          </ul>
        </section>

        {/* Prozesse – Cards */}
        <section className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Unser Prozesse für Cyber Security Penetration Testing
          </h2>

          <div className="bg-white rounded-2xl  max-w-6xl">
            <p className="text-gray-800 leading-relaxed">
              Jede Komponente ist gezielt ausgewählt, um Schwachstellen
              systematisch aufzudecken, reale Angriffsszenarien zu simulieren
              und die Sicherheit von IT-, OT- und Embedded-Systemen nachhaltig
              zu erhöhen – von der Analyse bis zur Absicherung. Entwickelt von
              Mira Elektronikentwicklung.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Testmethoden & Vorgehensmodelle",
                items: [
                  "Blackbox-, Greybox- & Whitebox-Penetrationstests",
                  "Red- & Purple-Team-Ansätze",
                  "Threat Modeling",
                  "Risiko- & Angriffsflächenanalyse",
                ],
              },
              {
                title: "Zielsysteme & Umgebungen",
                items: [
                  "IT-Infrastrukturen",
                  "Web- & Backend-Applikationen",
                  "Cloud-Umgebungen",
                  "Embedded Systems",
                  "Automotive-Steuergeräte & vernetzte Geräte",
                ],
              },
              {
                title: "Kommunikationsschnittstellen & Protokolle",
                items: [
                  "TCP/IP, HTTP/HTTPS, TLS",
                  "MQTT",
                  "CAN / CAN-FD, LIN, Ethernet",
                  "Bluetooth, WLAN",
                  "OTA-Update-Schnittstellen",
                ],
              },
              {
                title: "Werkzeuge & Frameworks",
                items: [
                  "Metasploit",
                  "Burp Suite",
                  "Nmap",
                  "Wireshark",
                  "OWASP-Tools",
                  "Fuzzing-Frameworks",
                  "Eigene Skripte & Automatisierungstools",
                ],
              },
              {
                title: "Sicherheitsanalysen & Prüfbereiche",
                items: [
                  "Authentifizierung & Autorisierung",
                  "Zugriffskontrollen",
                  "Kryptographie & Schlüsselmanagement",
                  "Secure Boot & Secure Update",
                  "Datenintegrität",
                ],
              },
              {
                title: "Normen & Richtlinien",
                items: [
                  "ISO/SAE 21434",
                  "IEC 62443",
                  "OWASP Top 10",
                  "NIST",
                  "BSI IT-Grundschutz",
                  "Kundenspezifische Security-Guidelines",
                ],
              },
              {
                title: "Ergebnisse & Absicherung",
                items: [
                  "Detaillierte Schwachstellenberichte",
                  "Risikobewertung",
                  "Konkrete Handlungsempfehlungen",
                  "Retests",
                  "Kontinuierliche Sicherheitsverbesserung",
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

          <div className="max-w-4xl">
            <p className="text-gray-800 leading-relaxed">
              Wir bieten Cyber-Security-Dienstleistungen und maßgeschneiderte
              Penetration-Testing-Konzepte, die Unternehmen bei der Absicherung
              kritischer Infrastrukturen, Embedded-Systeme und vernetzter
              Produkte unterstützen.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CyberSecurity;
