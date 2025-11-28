import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

const BlogSection = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState(""); // "success" or "error"

  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage("");
      setToastType("");
    }, 5000);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
    <div className="w-full px-4 py-12 md:py-20 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <h5 className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2">
          {t("Our Blog")}
        </h5>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 ">
          {t("Our")} <span className="text-blue-600">{t("Latest Blog")}</span>{" "}
          {t("Posts")}
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          {t(
            "Expert stories in tech firmJoin to explore tech updates on AI development, IT support tips, and insights"
          )}{" "}
          <br className="hidden sm:block" />
          {t("from a leading software company and IT service provider.")}
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4"
        >
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder={t("Enter your email for latest tech news")}
            className="w-full lg:w-[58%] sm:w-96 px-4 py-2 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-white hover:text-blue-600 border hover:border-blue-600 text-white rounded-full text-sm font-semibold shadow-md transition duration-300"
          >
            {t("Subscribe")}
          </button>
        </form>

        <p className="text-sm text-gray-700">
          {t("We care about your data in our")}{" "}
          <a href="/privacypolicy" className="text-blue-600 hover:underline">
            {t("privacy policy")}
          </a>
          .
        </p>
      </div>

      {toastMessage && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md text-sm font-semibold z-[9999] shadow-lg transition-all duration-300 ${
            toastType === "success"
              ? "bg-blue-600 text-white border border-blue-300"
              : "bg-red-600 text-white border border-red-300"
          }`}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default BlogSection;
