import { Helmet } from 'react-helmet-async';
import About from '../components/About';

const AboutPage = () => {
    return (
        <section className="page-section about-page" style={{ paddingTop: '100px' }}>
            <Helmet>
                <title>About Me - Sajid Inamdar | Cybersecurity Student & Python Developer</title>
                <meta name="description" content="Learn about Sajid Inamdar - Cybersecurity Student, Ethical Hacker, and Python Developer from Sangamner, Maharashtra. Discover his journey, skills, and passion for cybersecurity." />
                <meta name="keywords" content="Sajid Inamdar, About, Cybersecurity Student, Ethical Hacker, Python Developer, India, Portfolio" />
                <link rel="canonical" href="https://sajid-portfolio-nine.vercel.app/about" />

                {/* OpenGraph */}
                <meta property="og:title" content="About Me - Sajid Inamdar | Cybersecurity Student & Python Developer" />
                <meta property="og:description" content="Learn about Sajid Inamdar - Cybersecurity Student, Ethical Hacker, and Python Developer from Sangamner, Maharashtra." />
                <meta property="og:url" content="https://sajid-portfolio-nine.vercel.app/about" />
                <meta property="og:image" content="https://sajid-portfolio-nine.vercel.app/img/sajid-inamdar.jpg" />
                <meta property="og:type" content="profile" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Me - Sajid Inamdar" />
                <meta name="twitter:description" content="Learn about Sajid Inamdar - Cybersecurity Student, Ethical Hacker, and Python Developer." />
                <meta name="twitter:image" content="https://sajid-portfolio-nine.vercel.app/img/sajid-inamdar.jpg" />

                {/* BreadcrumbList */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://sajid-portfolio-nine.vercel.app/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "About",
                                    "item": "https://sajid-portfolio-nine.vercel.app/about"
                                }
                            ]
                        }
                    `}
                </script>
            </Helmet>
            <About />
        </section>
    );
};

export default AboutPage;
