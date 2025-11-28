import React from "react";
import { Helmet } from "react-helmet"; // ✅ Import Helmet
import Navbar from "../components/Navbar";
import Hero_02 from "../components/Sercvice_06/Hero_02";
import Core_industries from "../components/Sercvice_06/Core_industries";
import WhyChooseUs from "../components/Sercvice_06/WhyChooseUs";
import Service_description from "../components/Sercvice_06/Service_description";
import Testimonials from "../components/Home_components/Testimonials";
import Footer from "../components/Footer";

const Service = () => {
  return (
    <div>
      {/* ✅ SEO Meta Tags for Hardware Design & PCB Prototyping */}
      <Helmet>
        <title>
          Hardware Design & PCB Prototyping | Präzises PCB Layout &
          Leiterplatten Prototypen
        </title>
        <meta
          name="description"
          content="Hardware Design & PCB Prototyping: Wir bieten maßgeschneiderte Leiterplattenprototypen, exaktes Layout und High-Speed Hardware Entwicklungsservices. Von Schaltplan bis Produktion — schnell, präzise & zuverlässig."
        />
        <meta
          name="keywords"
          content="Hardware Design PCB Prototyping, Leiterplatten Prototypen, PCB Layout Deutschland, Hardware Entwicklung Leiterplatte, Prototyping Services Elektronik"
        />
        <link
          rel="canonical"
          href="https://mira-ee.de/Hardware-Design-PCB-Prototyping"
        />
      </Helmet>

      <Navbar />
      <Hero_02 />
      <Core_industries />
      <WhyChooseUs />
      <Service_description />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Service;
