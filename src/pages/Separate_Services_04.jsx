import React from "react";
import { Helmet } from "react-helmet"; // ✅ Import Helmet
import Navbar from "../components/Navbar";
import Hero_02 from "../components/Sercvice_04/Hero_02";
import Core_industries from "../components/Sercvice_04/Core_industries";
import WhyChooseUs from "../components/Sercvice_04/WhyChooseUs";
import Service_description from "../components/Sercvice_04/Service_description";
import Testimonials from "../components/Home_components/Testimonials";
import Footer from "../components/Footer";
import SeoService4 from "../components/Sercvice_04/SeoService4";

const Service = () => {
  return (
    <div>
      {/* ✅ SEO Meta Tags for Automobil Embedded Lösungen */}
      <Helmet>
        <title>
          Funktionale Sicherheit | Functional Safety nach IEC 61508 & CENELEC
        </title>
        <meta
          name="description"
          content="Meta description	Entdecken Sie professionelle Functional-Safety-Lösungen – Funktionale Sicherheit nach IEC 61508 und Functional-Safety-Entwicklung nach CENELEC für zuverlässige Systemkonformität."
        />
        <meta
          name="keywords"
          content="Funktionale Sicherheit Funktionale Sicherheit nach IEC 61508,Funktionale Sicherheit nach IEC 61508, 	Functional-Safety-Entwicklung nach CENELEC"
        />
        <link
          rel="canonical"
          href="https://mira-ee.de/Functional-Safety-&-Zertifizierbare-Systeme"
        />
      </Helmet>

      <Navbar />
      <Hero_02 />
      <Core_industries />
      <WhyChooseUs />
      <Service_description />
      <Testimonials />
      <SeoService4 />
      <Footer />
    </div>
  );
};

export default Service;
