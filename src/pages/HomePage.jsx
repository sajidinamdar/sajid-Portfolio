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
                <title>Sajid Inamdar - Cybersecurity Student & Ethical Hacker</title>
                <meta name="description" content="Portfolio of Sajid Inamdar, a Cybersecurity Student and Python Developer building secure tools and learning ethical hacking." />
                <meta name="keywords" content="Cybersecurity, Ethical Hacking, Python, Web Development, Portfolio, Sajid Inamdar" />
                <link rel="canonical" href="https://sajid-portfolio-nine.vercel.app/" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Sajid Inamdar",
                            "jobTitle": "Cybersecurity Student",
                            "url": "https://sajid-portfolio-nine.vercel.app/",
                            "sameAs": [
                                "https://github.com/sajidinamdar",
                                "https://linkedin.com/in/inamdarsajid",
                                "https://tryhackme.com/p/Sajidinamdar"
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
