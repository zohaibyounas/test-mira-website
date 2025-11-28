import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import './Blog_description.css';

const SingleBlogPage = () => {
    const { t } = useTranslation(); // Initialize the translation hook

    return (
        <div className="single-blog-container">
            <div className="text-section">
                <h1 className="blog-heading"> 
                    <span className="highlighted-text">{t('Cybersecurity')}</span> {t('in Embedded Systems:')}
                </h1>
                <h4 className="blog-subtitle">{t('Challenges and Solutions')}</h4>
                <p className="blog-content">
                    {t('With the rise of connected devices, cybersecurity in embedded systems has become a crucial concern. As the number of IoT and automotive applications increases, industries need to prioritize security measures to prevent cyber threats and data breaches. IT support plays a fundamental role in ensuring robust protection across all embedded platforms.')}
                    <br /> <br />
                    <h4 className="blog-subtitle">{t('Key Cybersecurity Challenges')}</h4>
                    {t('Embedded systems in automotive and industrial applications face unique security challenges. The increasing number of connected devices demands stronger IT informatics and secure software solutions. Without the right protective measures, vulnerabilities in embedded firmware can be exploited, leading to data leaks, system malfunctions, and even cyberattacks on critical infrastructures.')}
                </p>
            </div>

            <div className="image-section">
                <img
                    src="/images/B8.jpg" // Replace with your image path
                    alt={t('Drive Safe 360° Initiative')}
                    className="blog-image"
                />
            </div>

            {/* Horizontal Image Section */}
            <div className="horizontal-image-section">
                <img
                    src="/images/blog2.jpg" // Replace with your horizontal image path
                    alt={t('Technological Innovations')}
                    className="horizontal-image"
                />
            </div>

            <div className="text-section_01">
                <p className="blog-content">
                    <h4 className="blog-subtitle">{t('Solutions for Secure Embedded Systems')}</h4>
                    {t('To combat cyber threats, enterprises are investing in secure software development practices, implementing encryption, access control, and AI-driven threat detection mechanisms. Automotive embedded systems are now being built with advanced software testing strategies, ensuring that security flaws are identified and patched before they can be exploited. Secure over-the-air updates (OTA) are also emerging as a critical solution for real-time security updates.')}
                </p>
            </div><br />
            <div className="text-section_01">
                <p className="blog-content">
                    <h4 className="blog-subtitle">{t('The Future of Embedded System Security')}</h4>
                    {t('As technology evolves, cybersecurity will remain a top priority. Continuous development of proactive security measures will ensure safe and secure connected devices. With security innovations leading the way, industries can protect their embedded systems against evolving cyber threats, ensuring long-term reliability and trust in digital solutions.')}
                </p>
            </div>
        </div>
    );
};

export default SingleBlogPage;
