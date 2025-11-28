import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import './Blog_description.css';

const SingleBlogPage = () => {
    const { t } = useTranslation(); // Initialize the translation hook

    return (
        <div className="single-blog-container">
            <div className="text-section">
                <h1 className="blog-heading">
                    {t('From')} <span className="highlighted-text">{t('Development')}</span> {t('to Market Launch:')}
                </h1>
                <h4 className="blog-subtitle">{t('The Process Behind Innovative Embedded Systems')}</h4>
                <p className="blog-content">
                    {t('Developing an embedded system from concept to market launch requires a structured approach, extensive testing, and IT support to ensure high performance. The process involves designing, testing, and optimizing hardware and software solutions to meet industry standards.')}
                    <br /> <br />
                    <h4 className="blog-subtitle">{t('The Development Process')}</h4>
                    {t('The journey begins with in-depth research and IT informatics, ensuring that new systems align with market demands. Engineers design and prototype systems, integrating AI development and software testing strategies to validate functionality. Advanced simulation tools allow developers to assess system performance in real-world conditions.')}
                </p>
            </div>

            <div className="image-section">
                <img
                    src="/images/blog3.jpg" // Replace with your image path
                    alt={t('Drive Safe 360° Initiative')}
                    className="blog-image"
                />
            </div>

            {/* Horizontal Image Section */}
            <div className="horizontal-image-section">
                <img
                    src="/images/B9.jpg" // Replace with your horizontal image path
                    alt={t('Technological Innovations')}
                    className="horizontal-image"
                />
            </div>

            <div className="text-section_01">
                <p className="blog-content">
                    <h4 className="blog-subtitle">{t('Challenges and Solutions')}</h4>
                    {t('One major challenge is ensuring compliance with evolving cybersecurity regulations. High-voltage battery storage technology is also revolutionizing embedded systems, enabling efficient energy management in modern vehicles. By integrating over-the-air updates (OTA) and secure firmware, businesses ensure embedded solutions remain reliable and secure.')}
                </p>
            </div><br />
            <div className="text-section_01">
                <p className="blog-content">
                    <h4 className="blog-subtitle">{t('Market Launch and Industry Impact')}</h4>
                    {t('Once validated, the product moves toward mass production and distribution. IT training programs help developers stay updated on the latest trends in embedded technologies. By leveraging AI-driven testing and automated software validation, businesses ensure that their solutions are market-ready, setting new standards for innovation in the industry.')}
                </p>
            </div>
        </div>
    );
};

export default SingleBlogPage;
