import React from "react";
import { useTranslation } from "react-i18next";

const MissionSection = () => {
  const { t } = useTranslation();

  return (
    <section className="flex items-center justify-center px-[10%] py-[60px] bg-[#f4f4f4] text-black gap-[30px] max-lg:flex-col max-lg:text-center max-lg:px-[5%]">
      {/* Left Side Image */}
      <div className="flex-[0.5] flex justify-start -ml-[6%] mt-[60px] max-lg:justify-center max-lg:ml-0">
        <div className="bg-[#007bff] rounded-[25px] p-[10px] h-[230px] inline-block relative mt-12">
          <img
            src="/images/person-pointing.png"
            alt={t("Our Mission")}
            className="w-[260px] rounded-[10px] ml-[15%]  -mb-[5%] -mt-[190px] block"
          />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="flex-[0.7] text-left ml-[-20%] max-lg:ml-0 max-lg:text-center">
        <h2 className="text-[1.8rem] font-bold text-[#007bff] mb-[15px] max-lg:text-[1.5rem]">
          {t("Our Mission")}
        </h2>
        <p className="text-[1rem] text-[#555] leading-[1.6] max-w-full text-justify max-lg:text-[0.95rem]">
          {t(
            "At MIRA Electronics Development, we optimize performance, reliability, and security through customized embedded solutions. As a leading software development agency in Kiel, we specialize in industrial automation, AI-driven analytics, and smart manufacturing, helping enterprises drive efficiency and innovation.Recognized among Schleswig-Holstein's Best 50, we integrate cutting-edge hardware and software to deliver scalable, future-proof solutions in automotive, healthcare, industrial IoT, and cybersecurity. Partner with us to transform your vision into reality with intelligent, high-performance technology."
          )}
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
