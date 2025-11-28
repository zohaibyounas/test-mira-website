import React from "react";
import { Helmet } from "react-helmet"; // ✅ Import Helmet
import Navbar from "../components/Navbar";
import Hero_02 from "../components/Sercvice_02/Hero_02";
import Core_industries from "../components/Sercvice_02/Core_industries";
import WhyChooseUs from "../components/Sercvice_02/WhyChooseUs";
import Service_description from "../components/Sercvice_02/Service_description";
import Testimonials from "../components/Home_components/Testimonials";
import Footer from "../components/Footer";
import SeoService2 from "../components/Sercvice_02/SeoService2";

const Service = () => {
  return (
    <div>
      {/* ✅ SEO Meta Tags for BMS Sicherheit & Penetrationstests Page */}
      <Helmet>
        <title>
          BMS Sicherheitstests | Penetrationstests für Batteriemanagement
          Systeme
        </title>
        <meta
          name="description"
          content="BMS Sicherheitstests für höchste Zuverlässigkeit. Unsere Penetrationstests für Batteriemanagement Systeme verbessern die Sicherheit von Batteriesystemen nachhaltig."
        />
        <meta
          name="keywords"
          content="BMS Sicherheitstests, Penetrationstests für Batteriemanagement Systeme, Sicherheit von Batteriesystemen"
        />
        <link
          rel="canonical"
          href="https://mira-ee.de/Battery-Management-System-Sicherheit-&-Penetrationstests"
        />
      </Helmet>

      <Navbar />
      <Hero_02 />
      <Core_industries />
      <WhyChooseUs />
      <Service_description />
      <Testimonials />
      <SeoService2 />
      <Footer />
    </div>
  );
};

export default Service;
