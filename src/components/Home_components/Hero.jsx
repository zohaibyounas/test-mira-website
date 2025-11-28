import React, { useState } from "react";
import { FaGlobe, FaCog, FaBatteryFull, FaCar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const Hero = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      showToast("Please enter an email address!");
      return;
    } else if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address!");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_y6zacem",
        "template_l6g28th",
        { email },
        "rBlvscRL_SXhmKHx2"
      )
      .then(
        () => {
          showToast("Subscription successful!");
          setEmail("");
        },
        () => showToast("Something went wrong. Please try again.")
      )
      .finally(() => setLoading(false));
  };

  const showToast = (msg) => {
    setMessage(msg);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center text-white px-4 sm:px-6 md:px-16"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-6xl lg:text-left text-center lg:mr-[35%] md:mr-[20%] sm:mr-0 mt-12 sm:mt-20 text-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          {t("High-Quality")} <br />
          {t("Embedded Engineering")} {t("For")}{" "}
          <span className="text-blue-500"> {t("technology")}</span> {t("&")}
          <span className="text-blue-500"> {t("innovation")}</span>
        </h1>

        <p className="mt-3 text-sm sm:text-base opacity-80">
          {t(
            "MiraElektronikentwicklung implements embedded systems, BMS, and EMS – fast, secure, and scalable. From cell to cloud."
          )}
          <br />
          {/* {t("The future belongs to those who create it.")} */}
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:items-stretch mt-5 w-full max-w-[37rem] gap-2 sm:gap-0">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder={t("Enter your email for latest tech news")}
            className="flex-1 px-2 py-2  text-black text-sm focus:outline-none"
          />
          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm sm:rounded-l-none sm:rounded-r-md"
          >
            {loading ? "Subscribing..." : t("Subscribe")}
          </button>
        </div>

        <div className="mt-6 ">
          <p className="font-bold">{t("EXPERT IN")}:</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-4 text-sm justify-center lg:justify-start ">
            <span className="flex items-center gap-1">
              <FaGlobe /> {t("Embedded Systems")} |
            </span>
            <span className="flex items-center gap-1">
              <FaCog /> {t("Industrial Automation")} |
            </span>
            <span className="flex items-center gap-1">
              <FaBatteryFull /> {t("Smart Energy")} |
            </span>
            <span className="flex items-center gap-1">
              <FaCar /> {t("Advanced Engineering")}
            </span>
          </div>
        </div>
      </div>

      {/* Toast */}
      {showMessage && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-md text-white text-sm z-50 ${
            message.includes("successful") ? "bg-blue-500" : "bg-red-500"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Hero;
