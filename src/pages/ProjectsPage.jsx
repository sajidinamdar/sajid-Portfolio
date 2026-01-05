import { Helmet } from 'react-helmet-async';
import Projects from '../components/Projects'; // Reusing the component

const ProjectsPage = () => {
    return (
        <section className="page-section projects-page" style={{ paddingTop: '100px' }}>
            <Helmet>
                <title>Projects - Sajid Inamdar | Portfolio</title>
                <meta name="description" content="Showcase of cybersecurity and development projects by Sajid Inamdar." />
                <link rel="canonical" href="https://yourportfolio.com/projects" />
            </Helmet>
            <Projects />
        </section>
    );
};

export default ProjectsPage;
