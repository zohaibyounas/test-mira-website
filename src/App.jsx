import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import { Helmet } from "react-helmet";
import GTM from "../GTM";
import ConsentBanner from "./components/ConsentBanner";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Imprint from "./pages/Imprint";
import GTCs from "./pages/GTCs";
import Separate_Services_01 from "./pages/Separate_Services_01";
import Separate_Services_02 from "./pages/Separate_Services_02";
import Separate_Services_03 from "./pages/Separate_Services_03";
import Separate_Services_04 from "./pages/Separate_Services_04";
import Separate_Services_05 from "./pages/Separate_Services_05";
import Separate_Services_06 from "./pages/Separate_Services_06";
import Blogs_Main from "./pages/Blogs_Main";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import Blog4 from "./pages/Blog4";
import Blog5 from "./pages/Blog5";
import Blog6 from "./pages/Blog6";
import Partnership from "./pages/Partnership";
import Testing from "./pages/Testing";
import Automotive from "./testing/automotive";
function App() {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();
  const [consentGiven, setConsentGiven] = useState(false);
  const [appData] = useState({
    settings: {
      // siteName: "Mira Elektronikentwicklung", // Add your actual site name here
    },
  });

  useEffect(() => {
    const checkConsent = () => {
      const consent = JSON.parse(localStorage.getItem("userConsent"));
      if (
        consent &&
        (consent.preferences || consent.statistics || consent.marketing)
      ) {
        setConsentGiven(true);
      } else {
        setConsentGiven(false);
      }
    };

    checkConsent();
    window.addEventListener("storage", checkConsent);
    return () => window.removeEventListener("storage", checkConsent);
  }, []);

  return (
    <>
      <Helmet>
        {/* SEO Meta Tags */}
        <title>{appData.settings.siteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="bslthemes" />
      </Helmet>

      {consentGiven && <GTM />}
      <ConsentBanner />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Partnership" element={<Partnership />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/gtcs" element={<GTCs />} />
        <Route
          path="/Embedded-Systeme-Entwicklung"
          element={<Separate_Services_01 />}
        />
        <Route
          path="/Battery-Management-System-Sicherheit-&-Penetrationstests"
          element={<Separate_Services_02 />}
        />
        <Route
          path="/Battery-Management-Software-Entwicklung"
          element={<Separate_Services_03 />}
        />
        <Route
          path="/Functional-Safety-&-Zertifizierbare-Systeme"
          element={<Separate_Services_04 />}
        />
        <Route
          path="/Energy-Management-Software-(EMS)-Entwicklung"
          element={<Separate_Services_05 />}
        />
        <Route
          path="/Hardware-Design-PCB-Prototyping"
          element={<Separate_Services_06 />}
        />
        <Route path="/Blogs_Main" element={<Blogs_Main />} />
        <Route path="/Blog1" element={<Blog1 />} />
        <Route path="/Blog2" element={<Blog2 />} />
        <Route path="/Blog3" element={<Blog3 />} />
        <Route path="/Blog4" element={<Blog4 />} />
        <Route path="/Blog5" element={<Blog5 />} />
        <Route path="/Blog6" element={<Blog6 />} />
        <Route path="/Automotive-Testing" element={<Automotive />} />
      </Routes>
    </>
  );
}

export default App;
