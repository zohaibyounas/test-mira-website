import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage("");
      setToastType("");
    }, 5000);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      showToast("Please enter an email address!", "error");
      return;
    } else if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address!", "error");
      return;
    }

    const templateParams = { email };
    emailjs
      .send(
        "service_y6zacem",
        "template_l6g28th",
        templateParams,
        "rBlvscRL_SXhmKHx2"
      )
      .then(
        () => {
          showToast("Subscription successful", "success");
          setEmail("");
        },
        () => {
          showToast("Something went wrong. Please try again.", "error");
        }
      );
  };

  return (
    <footer className="bg-[#1e3a5f] text-white px-4 md:px-10 lg:px-20 py-12 ">
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-10">
        {/* Left Section */}
        <div className="w-full md:w-[260px] mx-4">
          <img
            src="/images/logo.png"
            alt="MIRA Tech"
            className="w-[115px] ml-[-20px] md:ml-[-30px] mt-[-33px]"
          />
          <p className="text-sm text-white ">
            {t("Welcome to Mira-EE")} <br />
            {t("Future-ready software Seamless performance.")} <br />
            {t(
              "We craft intelligent, scalable digital solutions through expert software development, IT services, and engineering."
            )}
          </p>
          <div className="mt-6">
            <img
              src="/images/logos.png"
              alt="EU Logo"
              className="w-[90%] bg-white rounded-lg p-2 mx-auto md:mx-0"
            />
          </div>
        </div>

        {/* Pages Section */}
        <div className="w-full md:w-auto">
          <h3 className="text-base font-bold mb-2">{t("PAGES")}</h3>
          <ul className="text-sm space-y-3 mt-4">
            {[
              { to: "/", text: t("Home") },
              { to: "/about", text: t("About") },
              { to: "/services", text: t("Our Services") },
              { to: "/gtcs", text: t("GTCs") },
              { to: "/privacypolicy", text: t("Privacy Policy") },
              { to: "/imprint", text: t("Imprint") },
            ].map((item, idx) => (
              <li key={idx}>
                <Link to={item.to} className="hover:text-blue-400">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="w-full md:w-auto">
          <h3 className="text-base font-bold mb-2">{t("Our Services")}</h3>
          <ul className="text-sm space-y-3 mt-4">
            {[
              {
                to: "/Battery-Management-Software-Entwicklung",
                text: t("Battery Management Software Development"),
              },
              {
                to: "/Energy-Management-Software-(EMS)-Entwicklung",
                text: t("Energy Management Software (EMS) Development"),
              },
              {
                to: "/Embedded-Systeme-Entwicklung",
                text: t("Embedded Systems Development"),
              },
              {
                to: "/Functional-Safety-&-Zertifizierbare-Systeme",
                text: t("Functional Safety & Zertifizierbare Systeme"),
              },
              {
                to: "/Battery-Management-System-Sicherheit-&-Penetrationstests",
                text: t(
                  "Battery-Management-System Sicherheit & Penetrationstests"
                ),
              },

              {
                to: "/Hardware-Design-PCB-Prototyping",
                text: t("Hardware- & PCB-Prototyping"),
              },
              // {
              //   to: "/services",
              //   text: t(
              //     "Automotive – Intelligent Embedded Solutions for Vehicle Diagnostics and Control"
              //   ),
              // },
            ].map((item, idx) => (
              <li key={idx}>
                <Link to={item.to} className="hover:text-blue-400">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="w-full md:w-[260px] mx-4">
          <h3 className="text-base font-bold mb-2">{t("NEWSLETTER")}</h3>
          <form
            onSubmit={handleSubscribe}
            className="mt-4 flex flex-col sm:flex-row md:flex-col gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder={t("Enter your email")}
              className="px-3 py-2 text-sm rounded-md text-black w-full"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto md:w-full"
            >
              {t("Subscribe")}
            </button>
          </form>
          <div className="mt-4 flex justify-start space-x-4 text-lg">
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg font-bold text-sm z-[9999] transition-opacity duration-300 ${
            toastType === "success"
              ? "bg-blue-500 text-white border border-blue-200"
              : "bg-red-500 text-white border border-red-300"
          }`}
        >
          {toastMessage}
        </div>
      )}
    </footer>
  );
};

export default Footer;
