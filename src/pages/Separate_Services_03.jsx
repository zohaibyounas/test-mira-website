import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Hero_02 from "../components/Sercvice_03/Hero_02";
import Core_industries from "../components/Sercvice_03/Core_industries";
import WhyChooseUs from "../components/Sercvice_03/WhyChooseUs";
import Service_description from "../components/Sercvice_03/Service_description";
import Testimonials from "../components/Home_components/Testimonials";
import Footer from "../components/Footer";
import SeoService3 from "../components/Sercvice_03/SeoService3";

const Service = () => {
  return (
    <div>
      <Helmet>
        <title>
          Batteriemanagement Software für Elektrofahrzeuge & BMS Entwicklung
        </title>
        <meta
          name="description"
          content="Entdecken Sie unsere Batteriemanagement System Software. Innovative BMS Software für Elektrofahrzeuge und Batterie Management Software Entwicklung."
        />
        <meta
          name="keywords"
          content="Batterie Management Software Entwicklung, Batterie management System Software, BMS Software für Elektrofahrzeuge"
        />
        <link
          rel="canonical"
          href="https://mira-ee.de/Battery-Management-Software-Entwicklung"
        />
      </Helmet>

      <Navbar />
      <Hero_02 />
      <Core_industries />
      <WhyChooseUs />
      <Service_description />
      <Testimonials />
      <SeoService3 />

      <Footer />
    </div>
  );
};

export default Service;
