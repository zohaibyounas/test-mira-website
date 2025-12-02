import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const TeamSection = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: t("M.Sc Ing Raza Abbas"),
      role: t("CEO"),
      image: "/images/abbas.jpg",
      linkedin:
        "https://www.linkedin.com/in/raza-abbas-4576a0147?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "mailto:raza.abbas@mira-ee.de",
      showLinkedin: true,
    },
    {
      id: 2,
      name: t("Karsten Steinhorst"),
      role: t("Vertriebsleiter"),
      image: "/images/custon.jpg",
      linkedin: "https://www.linkedin.com/in/karsten-steinhorst-25970020/",
      email: "mailto:karsten.steinhorst@mira-ee.de",
      showLinkedin: true,
    },
    {
      id: 3,
      name: t("Irtaza Madad Naqvi "),
      role: t("Operations Lead (Management)"),
      image: "/images/irtaza1.jpg",
      email: "mailto:irtaza.madad@mira-ee.de",
      showLinkedin: false,
    },
    {
      id: 4,
      name: t("Muhammad Aqib "),
      role: t("Senior Embedded Engineer"),
      image: "/images/aqib1.jpg",
      email: "mailto:mohammad.aqib@mira-ee.de",
      showLinkedin: false,
    },
    {
      id: 5,
      name: t("Muhammad Bilal Rasool"),
      role: t("Senior Software Engineer"),
      image: "/images/bilal1.jpg",
      email: "mailto:bilal.rasool@mira-ee.de",
      showLinkedin: false,
    },
    {
      id: 6,
      name: t("Zohaib Athar "),
      role: t("Backend Engineer"),
      image: "/images/zohaib1.jpg",
      email: "mailto:zohaib.athar@mira-ee.de",
      showLinkedin: false,
    },
    {
      id: 7,
      name: t("Munsif Waseem"),
      role: t("System Security Engineer"),
      image: "/images/munsif1.jpg",
      email: "mailto:musif.waseem@mira-ee.de",
      showLinkedin: false,
    },
    {
      id: 8,
      name: t("Muhammad Sulaiman"),
      role: t("Embedded Engineer"),
      image: "/images/sulo1.jpg",
      email: "mailto:muhammad.sulaiman@mira-ee.de",
      showLinkedin: false,
    },
  ];

  // Split team members for different row layouts
  const firstRowMembers = teamMembers.slice(0, 2);
  const remainingMembers = teamMembers.slice(2);

  return (
    <section className="text-center py-16 px-4 md:px-8 bg-gray-100 text-black ">
      <h3 className="text-sm font-bold text-blue-600 uppercase ">
        {t("TEAM")}
      </h3>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        {t("Our certified")}{" "}
        <span className="text-blue-600">{t("experts")}</span>
      </h2>

      {/* First Row - 2 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 mx-auto max-w-4xl">
        {firstRowMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl p-4 shadow-md hover:-translate-y-1 transition-transform duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[400px] lg:h-[700px] object-cover rounded-md mb-4 "
            />
            <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{member.role}</p>
            <div className="flex justify-center gap-4">
              {member.showLinkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-600 text-xl hover:text-blue-800 transition" />
                </a>
              )}
              <a href={member.email}>
                <FaEnvelope className="text-blue-600 text-xl hover:text-blue-800 transition" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Remaining Rows - 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 mx-auto max-w-6xl">
        {remainingMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl p-4 shadow-md hover:-translate-y-1 transition-transform duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[300px] lg:h-[500px] rounded-md mb-4 object-contain image-rendering-crisp"
            />

            <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{member.role}</p>
            <div className="flex justify-center gap-4">
              {/* LinkedIn icon removed for these members */}
              <a href={member.email}>
                <FaEnvelope className="text-blue-600 text-xl hover:text-blue-800 transition" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center gap-4">
        <div className="flex -space-x-2">
          <img
            src="/images/abbas.jpg"
            alt={t("Avatar 1")}
            className="w-8 h-9 rounded-full border-2 border-white"
          />
          <img
            src="/images/custon.jpg"
            alt={t("Avatar 2")}
            className="w-8 h-9 rounded-full border-2 border-white"
          />
        </div>
        <p className="text-sm text-gray-600 text-center md:text-left">
          {t(
            "Meet Our Team – A Passionate Group of Experts Dedicated to Your Success"
          )}{" "}
          <a
            href="/services"
            className="text-blue-600 font-semibold hover:underline"
          >
            {t("Explore more")} →
          </a>
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
