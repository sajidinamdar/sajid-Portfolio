import { Helmet } from 'react-helmet-async';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Sajid Inamdar | Cybersecurity Student & Ethical Hacker</title>
                <meta name="description" content="Official portfolio of Sajid Inamdar - Cybersecurity Student, Ethical Hacker, Python Developer. Explore projects, certifications, blogs, and connect." />
                <meta name="keywords" content="Cybersecurity, Ethical Hacking, Python, Web Development, Portfolio, Sajid Inamdar, FastAPI, Backend Development, Network Security" />
                <link rel="canonical" href="https://sajid-portfolio-nine.vercel.app/" />

                {/* OpenGraph */}
                <meta property="og:title" content="Sajid Inamdar | Cybersecurity Student & Ethical Hacker" />
                <meta property="og:description" content="Official portfolio of Sajid Inamdar - Cybersecurity Student, Ethical Hacker, Python Developer. Explore projects, certifications, blogs, and connect." />
                <meta property="og:url" content="https://sajid-portfolio-nine.vercel.app/" />
                <meta property="og:image" content="https://sajid-portfolio-nine.vercel.app/img/sajid-inamdar.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Sajid Inamdar Portfolio" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sajid Inamdar | Cybersecurity Student & Ethical Hacker" />
                <meta name="twitter:description" content="Official portfolio of Sajid Inamdar - Cybersecurity Student, Ethical Hacker, Python Developer." />
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
                                }
                            ]
                        }
                    `}
                </script>

                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Sajid Inamdar",
                            "alternateName": "Sajid",
                            "description": "Cybersecurity Student, Ethical Hacker and Python Developer from India",
                            "url": "https://sajid-portfolio-nine.vercel.app/",
                            "image": "https://sajid-portfolio-nine.vercel.app/img/sajid-inamdar.jpg",
                            "jobTitle": "Cybersecurity Student & Python Developer",
                            "sameAs": [
                                "https://www.linkedin.com/in/sajidinamdar-sec",
                                "https://github.com/sajidinamdar",
                                "https://medium.com/@sajidinamdar",
                                "https://dev.to/sajidinamdar",
                                "https://tryhackme.com/p/Sajidinamdar",
                                "https://www.youtube.com/@sajid-inamdar"
                            ]
                        }
                    `}
                </script>
            </Helmet>
            <main>
                <Home />
                <About />
                <Skills />
                <Certifications />
                <Projects />
                <Blogs />
                <Contact />
            </main>
        </>
    );
};

export default HomePage;
