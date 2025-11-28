import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import the translation hook

import "./FullBlogList.css"; // Import CSS for styling

const BlogPost = ({ title, description, date, image, link }) => {
  const { t } = useTranslation(); // Initialize the translation hook
  return (
    <div className="blog-post">
      <img src={image} alt={title} className="blog-post-image" />
      <div className="blog-post-details">
        <h3 className="blog-post-title">{title}</h3>
        <p className="blog-post-description">{description}</p>
        <p className="blog-post-meta">
          <span className="blog-post-date">{date}</span>
        </p>
        <NavLink to={link} className="read-more-btn">
          {t("Read More")}
        </NavLink>
      </div>
    </div>
  );
};

const BlogsPage = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  const blogPosts = [
    {
      id: 1,
      title: t(
        "Embedded Systems in the Automotive Industry: Trends and Innovations"
      ),
      description: t(
        "The automotive industry is evolving with embedded systems, focusing on enhancing vehicle safety, performance, and connectivity through advanced technologies."
      ),
      date: t("29 Mar 2025"),
      image: "/images/blog1.jpg",
      link: "/Blog1", // unique link for each blog
    },
    {
      id: 2,
      title: t("Cybersecurity in Embedded Systems: Challenges and Solutions"),
      description: t(
        "As IoT and automotive applications grow, cybersecurity in embedded systems becomes critical, with IT support playing a key role in preventing cyber threats and data breaches."
      ),
      date: "29 Mar 2025",
      image: "/images/blog2.jpg",
      link: "/Blog2",
    },
    {
      id: 3,
      title: t(
        "From Development to Market Launch: The Process Behind Innovative Embedded Systems"
      ),
      description: t(
        "Developing an embedded system from concept to market launch requires a structured approach, thorough testing, and IT support to ensure optimal performance and compliance with industry standards."
      ),
      date: "29 Mar 2025",
      image: "/images/blog3.jpg",
      link: "/Blog3",
    },
    {
      id: 4,
      title: t(
        "Automotive Embedded Solutions: The Role of Software in Modern Vehicles"
      ),
      description: t(
        "The automotive industry is evolving rapidly, with embedded technologies and advanced software test strategies enhancing vehicle safety, efficiency, and connectivity for the future of mobility."
      ),
      date: "29 Mar 2025",
      image: "/images/blog4.jpg",
      link: "/Blog4",
    },
    {
      id: 5,
      title: t("Cloud Technologies for Industry: Opportunities and Challenges"),
      description: t(
        "Cloud computing is transforming industries by offering scalable, flexible, and cost-effective solutions that enhance workflow automation, data management, and streamline IT operations."
      ),
      date: "29 Mar 2025",
      image: "/images/blog5.jpg",
      link: "/Blog5",
    },
    {
      id: 6,
      title: t(
        "How International Collaboration Drives Innovation in Embedded Systems"
      ),
      description: t(
        "The rapid advancement of technology makes international collaboration crucial for embedded system development, accelerating innovation, optimizing execution, and boosting global competitiveness."
      ),
      date: "29 Mar 2025",
      image: "/images/blog6.jpg",
      link: "/Blog6",
    },
  ];

  return (
    <div className="blogs-container px-12 bg-[#f4f4f4]">
      <h2 id="heading">{t("All blog posts")}</h2>
      <div className="blog-posts ">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            description={post.description}
            date={post.date}
            image={post.image}
            link={post.link} // Pass the unique link for each blog
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
