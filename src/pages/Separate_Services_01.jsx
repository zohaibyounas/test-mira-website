import React from "react";
import { Helmet } from "react-helmet"; // ✅ Import Helmet
import Navbar from "../components/Navbar";
import Service_Hero from "../components/Sercvice_01/Service_Hero";
import Core_industries from "../components/Sercvice_01/Core_industries";
import WhyChooseUs from "../components/Sercvice_01/WhyChooseUs";
import Service_description from "../components/Sercvice_01/Service_description";
import Testimonials from "../components/Home_components/Testimonials";
import Footer from "../components/Footer";
import SeoService1 from "../components/Sercvice_01/SeoService1";

const Service = () => {
  return (
    <div>
      {/* ✅ SEO Meta Tags for Embedded Systeme Page */}
      <Helmet>
        <title>
          Embedded Systeme Entwicklung | Deutschland Embedded Software
          Engineering
        </title>
        <meta
          name="description"
          content="Embedded Systeme Entwicklung Deutschland für innovative Lösungen. Spezialisiert auf Embedded Software Engineering und professionelle Eingebettete Systeme Entwicklung."
        />
        <meta
          name="keywords"
          content="Embedded Systeme Entwicklung Deutschland, Embedded Software Engineering, Eingebettete Systeme Entwicklung"
        />
        <link
          rel="canonical"
          href="https://mira-ee.de/Embedded-Systeme-Entwicklung"
        />
      </Helmet>

      <Navbar />
      <Service_Hero />
      <Core_industries />
      <WhyChooseUs />
      <Service_description />
      <Testimonials />
      <SeoService1 />
      <Footer />
    </div>
  );
};

export default Service;
