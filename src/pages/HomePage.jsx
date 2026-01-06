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
                <meta name="description" content="Official portfolio of Sajid Inamdar, Cybersecurity Student, Ethical Hacker, Python Developer." />
                <meta name="keywords" content="Cybersecurity, Ethical Hacking, Python, Web Development, Portfolio, Sajid Inamdar" />
                <link rel="canonical" href="https://sajid-portfolio-nine.vercel.app/" />

                {/* OpenGraph */}
                <meta property="og:title" content="Sajid Inamdar | Cybersecurity Student & Ethical Hacker" />
                <meta property="og:description" content="Official portfolio of Sajid Inamdar, Cybersecurity Student, Ethical Hacker, Python Developer." />
                <meta property="og:url" content="https://sajid-portfolio-nine.vercel.app/" />
                <meta property="og:image" content="https://sajid-portfolio-nine.vercel.app/sajid-inamdar.jpg" />
                <meta property="og:type" content="website" />

                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Sajid Inamdar",
                            "url": "https://sajid-portfolio-nine.vercel.app/",
                            "image": "https://sajid-portfolio-nine.vercel.app/sajid-inamdar.jpg",
                            "sameAs": [
                                "https://github.com/sajidinamdar",
                                "https://www.linkedin.com/in/sajidinamdar-sec/",
                                "https://www.youtube.com/@sajidinamdar"
                            ],
                            "jobTitle": "Cybersecurity Student & Ethical Hacker",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "THE BAAP COMPANY"
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Sangamner",
                                "addressRegion": "Maharashtra",
                                "addressCountry": "India"
                            }
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
