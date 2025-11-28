import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import './Blog_description.css';

const SingleBlogPage = () => {
    const { t } = useTranslation(); // Initialize the translation hook

    return (
        <div className="single-blog-container">
            <div className="text-section">
                <h1 className="blog-heading"> 
                    <span className="highlighted-text">{t('Embedded Systems')}</span> {t('in the Automotive Industry')}
                </h1>
                <h4 className="blog-subtitle">{t('Trends and Innovations')}</h4>
                <p className="blog-content">
                    {t('The automotive industry is undergoing a significant transformation, driven by advancements in embedded systems. From software development to major industry players, the focus is on developing intelligent systems that enhance vehicle safety, performance, and connectivity. As the demand for innovative solutions grows, enterprises are investing in state-of-the-art technologies to drive the future of mobility.')}
                    <br /> <br />
                    <h4 className="blog-subtitle">{t('The Rise of Smart Vehicles')}</h4>
                    {t('Modern vehicles are now equipped with sophisticated IT support, enabling real-time data processing and enhanced functionalities. These embedded systems facilitate autonomous driving, advanced driver assistance systems (ADAS), and vehicle-to-everything (V2X) communication. With the implementation of IT informatics, manufacturers can ensure that cars remain connected, efficient, and secure.')}
                </p>
            </div>

            <div className="image-section">
                <img
                    src="/images/B7.jpg" // Replace with your image path
                    alt={t('Drive Safe 360° Initiative')}
                    className="blog-image"
                />
            </div>

            {/* Horizontal Image Section */}
            <div className="horizontal-image-section">
                <img
                    src="/images/B1.jpg" // Replace with your horizontal image path
                    alt={t('Technological Innovations')}
                    className="horizontal-image"
                />
            </div>

            <div className="text-section_01">
                <p className="blog-content">
                    <h4 className="blog-subtitle">{t('Key Innovations in Embedded Systems')}</h4>
                    {t('One of the biggest advancements is the integration of AI-driven diagnostics, predictive maintenance, and over-the-air software updates (OTA). The development of software test strategies ensures that automotive embedded systems are rigorously tested for efficiency and reliability. Additionally, the industry is making strides in high-voltage battery storage, which is crucial for the success of electric vehicles.')}
                </p>
            </div> 
            <br />
            <div className="text-section_01">
                <p className="blog-content">
                    <h4 className="blog-subtitle">{t('The Future of Automotive Embedded Systems')}</h4>
                    {t('The future of embedded systems in the automotive industry is promising, with ongoing research in automation and connectivity. As electric mobility grows, advancements in high-voltage battery storage and AI development will play an essential role in shaping the next generation of vehicles. Automotive safety and vehicle efficiency will continue to be at the forefront, ensuring that drivers benefit from smart, secure, and sustainable technologies.')}
                </p>
            </div>
        </div>
    );
};

export default SingleBlogPage;
