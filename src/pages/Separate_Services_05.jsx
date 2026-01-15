import React from "react";
import { Helmet } from "react-helmet"; // ✅ Import Helmet
import Navbar from "../components/Navbar";
import Hero_02 from "../components/Sercvice_05/Hero_02";
import Core_industries from "../components/Sercvice_05/Core_industries";
import WhyChooseUs from "../components/Sercvice_05/WhyChooseUs";
import Service_description from "../components/Sercvice_05/Service_description";
import Testimonials from "../components/Home_components/Testimonials";
import Footer from "../components/Footer";
import SeoService5 from "../components/Sercvice_05/SeoService5";

const Service = () => {
  return (
    <div>
      {/* ✅ SEO Meta Tags for EMS Page */}
      <Helmet>
        <title>
          Batteriemanagement System Software & BMS für Elektrofahrzeuge
          Entwicklung
        </title>
        <meta
          name="description"
          content="Batteriemanagement System Software für optimale Leistung. Unsere BMS Software für Elektrofahrzeuge bietet innovative Batterie Management Software Entwicklung."
        />
        <meta
          name="keywords"
          content="Energiemanagement Software Entwicklung, EMS Softwarelösungen Deutschland, Software für Energiemanagement Systeme"
        />
        <link
          rel="canonical"
          href="https://mira-ee.de/Software-Defined-Vehicle-Entwicklung-für-Automotive-OEMs"
        />
      </Helmet>

      <Navbar />
      <Hero_02 />
      <Core_industries />
      <WhyChooseUs />
      <Service_description />
      <Testimonials />
      <SeoService5 />
      <Footer />
    </div>
  );
};

export default Service;
