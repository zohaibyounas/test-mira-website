import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import './Blog_description.css';

const SingleBlogPage = () => {
    const { t } = useTranslation(); // Initialize the translation hook

    return (
        <div className="single-blog-container">
            <div className="text-section">
                <h1 className="blog-heading"> 
                    <span className="highlighted-text">{t('Automotive')}</span> {t('Embedded Solutions:')}
                </h1>
                <h4 className="blog-subtitle">{t('The Role of Software in Modern Vehicles')}</h4>
                <p className="blog-content">
                    {t('The automotive industry is evolving rapidly, with embedded technologies playing a crucial role in shaping the future of mobility. With advancements in software test strategy 2024, vehicles are now equipped with intelligent software that enhances safety, efficiency, and connectivity.')}
                    <br /> <br />
                    <h4 className="blog-subtitle">{t('The Impact of Software in Vehicles')}</h4>
                    {t('From real-time diagnostics to predictive maintenance, IT support ensures that vehicles operate seamlessly. AI development is transforming automotive systems, improving real-time communication and smart decision-making processes. The integration of IT informatics is also helping manufacturers enhance vehicle connectivity and performance.')}
                </p>
            </div>

            <div className="image-section">
                <img
                    src="/images/blog4.jpg" // Replace with your image path
                    alt={t('Drive Safe 360° Initiative')}
                    className="blog-image"
                />
            </div>

            {/* Horizontal Image Section */}
            <div className="horizontal-image-section">
                <img
                    src="/images/B12.jpg" // Replace with your horizontal image path
                    alt={t('Technological Innovations')}
                    className="horizontal-image"
                />
            </div>

            <div className="text-section_01">
                <p className="blog-content">
                    <h4 className="blog-subtitle">{t('Innovations in Automotive Embedded Systems')}</h4>
                    {t('Software-driven solutions have revolutionized automotive safety, reducing human error and enhancing accident prevention mechanisms. The integration of high-voltage battery storage ensures that electric vehicles achieve optimal performance, leading to a more sustainable future. With AI-powered vehicle diagnostics, drivers can now benefit from real-time alerts and proactive maintenance solutions.')}
                </p>
            </div><br />
            <div className="text-section_01">
                <p className="blog-content">
                    <h4 className="blog-subtitle">{t('The Future of Mobility')}</h4>
                    {t('As industries continue to push the boundaries of automotive embedded systems, leading IT service providers are developing next-generation vehicle solutions. Autonomous driving, smart traffic systems, and AI-based safety features will continue to evolve, redefining the driving experience and ensuring that mobility remains intelligent and sustainable.')}
                </p>
            </div>
        </div>
    );
};

export default SingleBlogPage;
