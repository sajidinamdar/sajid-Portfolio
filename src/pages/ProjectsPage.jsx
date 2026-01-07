import { Helmet } from 'react-helmet-async';
import Projects from '../components/Projects'; // Reusing the component

const ProjectsPage = () => {
    return (
        <section className="page-section projects-page" style={{ paddingTop: '100px' }}>
            <Helmet>
                <title>Projects - Sajid Inamdar | Cybersecurity & Python Development Portfolio</title>
                <meta name="description" content="Explore Sajid Inamdar's portfolio of cybersecurity and Python development projects including FastAPI backends, automation tools, and secure web applications." />
                <meta name="keywords" content="Sajid Inamdar Projects, Python Projects, FastAPI, Cybersecurity Projects, Web Development, GitHub Portfolio" />
                <link rel="canonical" href="https://sajid-portfolio-nine.vercel.app/projects" />

                {/* OpenGraph */}
                <meta property="og:title" content="Projects - Sajid Inamdar | Cybersecurity & Python Development Portfolio" />
                <meta property="og:description" content="Explore Sajid Inamdar's portfolio of cybersecurity and Python development projects including FastAPI backends and automation tools." />
                <meta property="og:url" content="https://sajid-portfolio-nine.vercel.app/projects" />
                <meta property="og:image" content="https://sajid-portfolio-nine.vercel.app/img/sajid-inamdar.jpg" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Projects - Sajid Inamdar Portfolio" />
                <meta name="twitter:description" content="Explore cybersecurity and Python development projects by Sajid Inamdar." />
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
                                    "name": "Projects",
                                    "item": "https://sajid-portfolio-nine.vercel.app/projects"
                                }
                            ]
                        }
                    `}
                </script>
            </Helmet>
            <Projects />
        </section>
    );
};

export default ProjectsPage;
