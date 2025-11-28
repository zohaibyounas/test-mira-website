import React from "react";
import Navbar from "../components/Navbar"; // adjust path if needed
import Footer from "../components/Footer"; // adjust path if needed

const Testing = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 mt-12">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 px-6 sm:px-8 lg:px-16 py-12 max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Partnerschaft mit Treo – Mehr Sicherheit. Mehr Geschwindigkeit. Mehr
            Zukunft.
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 italic">
            (Stil: exakt wie Mira-EE „Energy-Management-Software“-Seite –
            sachlich, verständlich, technologisch.)
          </p>
        </section>

        {/* Introduction */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Gemeinsam stärker: Prüfkompetenz trifft Engineering-Exzellenz
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Die Zusammenarbeit zwischen MiraElektronikentwicklung und Treo
            verbindet zwei Welten, die sich perfekt ergänzen:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-800 leading-relaxed">
            <li>akkreditierte Test- und Prüfverfahren auf der einen Seite –</li>
            <li>moderne Embedded- und Safety-Entwicklung auf der anderen.</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            Für unsere Kunden entsteht daraus ein zuverlässiger, durchgängiger
            Entwicklungs- und Zertifizierungsprozess, der Risiken reduziert und
            die Markteinführung beschleunigt.
          </p>
        </section>

        {/* Why Treo */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Warum Treo?
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Treo ist eines der führenden Testhäuser für:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-800 leading-relaxed">
            <li>EMV- und elektrische Sicherheit</li>
            <li>Mechanische & klimatische Prüfungen</li>
            <li>Vibrations- und Schocktests</li>
            <li>Beflammungs- und Materialprüfungen</li>
            <li>Normkonformität & Zertifizierungsbegleitung</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            Durch die Partnerschaft fließt diese Prüfkompetenz unmittelbar in
            unsere Entwicklungsprozesse ein.
          </p>
        </section>

        {/* Advantages */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Ihr Vorteil: Entwicklungsprozesse, die von Beginn an auf
            Zertifizierung ausgelegt sind
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Durch die enge Abstimmung mit Treo berücksichtigen wir die späteren
            Prüfanforderungen bereits während:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-800 leading-relaxed">
            <li>der Systemarchitektur</li>
            <li>der Hardwareentwicklung</li>
            <li>der Funktionssicherheitsanalyse (FMEDA, FTA, HARA)</li>
            <li>der Software- und Diagnosekonzeption</li>
            <li>der Prototypvalidierung</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            Fehler, die sonst erst in der Testphase auftreten, werden frühzeitig
            erkannt. Das spart Zeit, Budget und technische Iterationen.
          </p>
        </section>

        {/* Process */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Von der Idee bis zur geprüften Lösung – aus einem Guss
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-800 leading-relaxed">
            <li>Schnellere Zertifizierungen</li>
            <li>Reduzierte Entwicklungsrisiken</li>
            <li>Optimierte Hardwaredesigns durch Pre-Compliance-Analysen</li>
            <li>Validierte Sicherheitskonzepte für anspruchsvolle Branchen</li>
            <li>Reproduzierbare Qualitätsstandards für Serienprodukte</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            Durch den durchgängigen Prozess erhalten Kunden eine robuste,
            normkonforme Lösung – ohne Medienbrüche oder Verantwortungsgrenzen.
          </p>
        </section>

        {/* Engineering + Testing */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Engineering + Testing = Höchste Zuverlässigkeit
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Mira bringt ein breites Spektrum an Entwicklungskompetenzen ein:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-800 leading-relaxed">
            <li>Embedded-Systeme</li>
            <li>Batterie- und Energiemanagement</li>
            <li>Safety-Elektronik (ISO 26262, IEC 61508)</li>
            <li>Sensorik & Signalverarbeitung</li>
            <li>Real-Time Softwaredesign</li>
            <li>Industrial- und Automotive-Technologien</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            Mit Treo als akkreditiertem Testpartner schaffen wir Lösungen, die
            nicht nur funktionieren – sondern offiziell geprüft und technisch
            belastbar sind.
          </p>
        </section>

        {/* Target Industries */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Für Branchen mit höchsten Anforderungen
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-800 leading-relaxed">
            <li>Automotive & Safety Electronics</li>
            <li>Batterie- & Energiesysteme</li>
            <li>Industrie- und Maschinenbau</li>
            <li>Rail & Transportation</li>
            <li>Medizintechniknahe Anwendungen</li>
            <li>Luft- und Raumfahrtkomponenten</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            Überall dort, wo Normen, Sicherheit und Qualität entscheidend sind,
            profitieren Kunden von der Kombination aus Engineering und
            Testlabor.
          </p>
        </section>

        {/* Competitive Advantage */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Ihr Wettbewerbsvorteil
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-800 leading-relaxed">
            <li>
              Planungssicherheit: Prüffähige Designs ab dem ersten Prototyp
            </li>
            <li>Transparenz: Klare Test- und Risikoanalysen</li>
            <li>
              Höhere Effizienz: Weniger Iterationen, schnellere Entscheidungen
            </li>
            <li>
              Nachweisbare Qualität: Akzeptierte Testberichte und Zertifikate
            </li>
            <li>Ein Ansprechpartner: Durchgängige technische Betreuung</li>
            <li>Bereit für die nächste Entwicklungsstufe</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            Die Verbindung von MiraElektronikentwicklung und Treo schafft ein
            Ökosystem, das technische Innovation und geprüfte Qualität vereint.
            So entstehen robuste, zertifizierbare Produkte – von der ersten Idee
            bis zur Serienfreigabe.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Testing;
