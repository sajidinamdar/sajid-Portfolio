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
                <title>Sajid Inamdar | Cybersecurity Student & Python Developer</title>
                <meta name="description" content="Official portfolio of Sajid Inamdar — Cybersecurity student, Python developer, ethical hacker from India. Projects, certifications, blogs & contact." />
                <meta name="keywords" content="Cybersecurity, Ethical Hacking, Python, Web Development, Portfolio, Sajid Inamdar" />
                <link rel="canonical" href="https://sajid-portfolio-nine.vercel.app/" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Sajid Inamdar",
                            "url": "https://sajid-portfolio-nine.vercel.app/",
                            "image": "https://sajid-portfolio-nine.vercel.app/profile.jpg",
                            "sameAs": [
                                "https://github.com/sajidinamdar",
                                "https://www.linkedin.com/in/sajid-inamdar/",
                                "https://www.youtube.com/@sajidinamdar"
                            ],
                            "jobTitle": "Cybersecurity Student & Python Developer",
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
