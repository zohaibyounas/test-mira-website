import React from "react";
import { FaCar, FaCogs, FaLightbulb } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left side */}
        <div className="lg:w-1/2 space-y-6 ">
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
            {/* {t("Reasoning")} */}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 ">
            {t(
              "Warum wir die richtige Wahl für Software-Defined Vehicles sind",
            )}
          </h2>
          <p className="text-base text-gray-600">
            {t(
              "Mit unserem tiefgreifenden Know-how in der Software-Defined-Vehicle-Entwicklung unterstützen wir Automotive-OEMs bei der Transformation hin zu softwaregetriebenen Fahrzeugplattformen. Unser SDV-Stack vereint modulare Softwarearchitekturen, zentrale Steuerungslogik und sichere Kommunikationsschnittstellen für moderne Fahrzeugfunktionen. Durch CI/CD-basierte Entwicklungsprozesse, HIL/SIL-Validierung und kontinuierliche Integration stellen wir höchste Qualität, Sicherheit und Skalierbarkeit sicher. Unsere Lösungen ermöglichen schnelle Feature-Updates, reduzierte Entwicklungszeiten und eine effiziente Integration in bestehende OEM-Systemlandschaften. Mit Fokus auf Performance, Sicherheit und Zukunftsfähigkeit sind wir Ihr strategischer SDV-Partner.",
            )}
          </p>
        </div>

        {/* Right side: Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-9">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaCar className="text-blue-600 text-6xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Erweiterter SDV-Technologie-Stack")}
              </h3>
              <p className="text-sm text-gray-600">
                {t(
                  "Unser erweiterter SDV-Technologie-Stack kombiniert echtzeitfähige Fahrzeugsoftware, skalierbare Middleware und sichere Update-Mechanismen, um flexible, leistungsstarke und langlebige Software-Defined-Vehicle-Plattformen zu realisieren.",
                )}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaCogs className="text-blue-600 text-6xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Maßgeschneiderte SDV-Lösungen")}
              </h3>
              <p className="text-sm text-gray-600">
                {t(
                  "Unsere maßgeschneiderten SDV-Lösungen passen sich individuell an OEM-Architekturen an und vereinen Fahrzeugsteuerung, Datenverarbeitung und Cloud-Integration zu einer einheitlichen, zukunftssicheren Softwareplattform.",
                )}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
            <FaLightbulb className="text-blue-600 text-4xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("Schnelles Prototyping & Validierung")}
              </h3>
              <p className="text-sm text-gray-600">
                {t(
                  "Unser Ansatz für schnelles Prototyping und Validierung ermöglicht die effiziente Entwicklung, Simulation und Absicherung von SDV-Architekturen, verkürzt Entwicklungszyklen und gewährleistet höchste funktionale Sicherheit und Systemstabilität.",
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
