import React from "react";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 px-5 md:px-10 lg:px-20 py-12 flex flex-col lg:flex-row items-start justify-between gap-10 text-center lg:text-left">
      {/* Left Image */}
      <div className="hidden lg:flex w-3/2 h-[430px] mt-2 lg:ml-4 lg:mr-4">
        <img
          src="/images/homeimg.jpg"
          alt={t("Team Working")}
          className="w-full h-full rounded-lg object-cover shadow-md"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 space-y-6 mx-4">
        <h3 className="text-blue-600 text-sm font-bold uppercase tracking-wide">
          {t("WHY US")}
        </h3>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {t("We have over")}{" "}
          <span className="text-blue-600">{t("10+ years")}</span>{" "}
          {t("in the Tech Industry")}
        </h2>

        <p className="text-gray-600 text-base leading-relaxed">
          {t("Over 10 Years of Expertise in Embedded Systems & Automotive")}
          <br />
          {t(
            "We provide innovative solutions in embedded engineering, automotive technology, and security systems. Our expertise is built on years of collaboration with leading industry players."
          )}
        </p>

        <div className="space-y-6 mx-2">
          {[
            {
              title: t("Dedicated Development Teams"),
              desc: t(
                "Our specialists deliver customized solutions for your projects – from concept to mass production."
              ),
            },
            {
              title: t("Certified Professionals"),
              desc: t(
                "Our experts are highly qualified and work with cutting-edge technologies."
              ),
            },
            {
              title: t("Reliable Support – Anytime You Need It"),
              desc: t(
                "We provide technical expertise and fast support whenever you need us."
              ),
            },
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-blue-600 text-2xl font-bold hidden sm:inline">
                +
              </span>
              <div>
                <h4 className="text-md font-bold">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
