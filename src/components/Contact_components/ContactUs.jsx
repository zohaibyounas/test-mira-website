import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    setLoading(true);

    emailjs
      .send(
        "service_y6zacem",
        "template_ig2kqbj",
        templateParams,
        "rBlvscRL_SXhmKHx2"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setToastMessage("✅ Nachricht erfolgreich übermittelt");
          setShowToast(true);
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        },
        (error) => {
          console.error("Email send error:", error.text);
          setToastMessage("❌ Failed to send message. Please try again!");
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 bg-gray-100 mt-10">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          {t("CONTACT US")}
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Contact Form */}
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-2">
              {t("Leave us a message")}
            </label>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder={t("Your Name")}
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder={t("Your Email Address")}
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder={t("Your Message")}
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-10 rounded-full transition-all duration-300 disabled:opacity-50"
              >
                {loading ? t("Sending...") : t("Send")}
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex-1 space-y-4 text-sm text-gray-700">
            <p className="text-gray-800 font-sans text-sm">
              <span className="text-gray-800 font-sans text-sm">
                {t("Schauenburgerstraße 116")}
              </span>
              <br />
              <span>{t("24118 Kiel")}</span>
            </p>
            <p>
              <strong className="text-gray-800 font-sans text-sm">
                📞 {t("+49 4321 97994454")}
              </strong>
            </p>
            <p className="text-gray-900">📧 {t("info@mira-ee.de")}</p>

            {/* Google Map - fixed height */}
            <iframe
              title={t("Google Map")}
              className="w-full h-40 md:h-56 rounded-md border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.2963360187687!2d10.117745276665514!3d54.33977577257747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2433d6cb86ab1%3A0x6d8d16d78e1212c2!2sSchauenburgerstra%C3%9Fe%20116%2C%2024118%20Kiel%2C%20Germany!5e0!3m2!1sen!2sde!4v1693159477321!5m2!1sen!2sde"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Toast Message */}
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg text-base z-50">
          {toastMessage}
        </div>
      )}
    </section>
  );
};

export default ContactUs;
