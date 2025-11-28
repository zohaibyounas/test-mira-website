import React from "react";
import Navbar from "../components/Navbar";
import Hero_main from "../components/Blogs_Main_components/Hero_main";
// import BlogSubscription from "../components/Blogs_components/BlogSubscription";
// import LiveBlogs from "../components/Blogs_components/LiveBlogs";
// import TechBlogs from "../components/Blogs_components/TechBlogs";
import FullBlogList from "../components/Blogs_Main_components/FullBlogList";
// import RelatedArticles from "../components/Blogs_components/RelatedArticles";
import Footer from "../components/Footer";


const service = () => {
    return (
      <div>
        <Navbar />
        <Hero_main />
        {/* <BlogSubscription /> */}
       {/* <LiveBlogs /> */}
       {/* <TechBlogs /> */}
       <FullBlogList />
       {/* <RelatedArticles /> */}
        <Footer />
      </div>
    );
  };
  
  export default service;