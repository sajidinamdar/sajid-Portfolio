import { Helmet } from 'react-helmet-async';
import About from '../components/About';

const AboutPage = () => {
    return (
        <section className="page-section about-page" style={{ paddingTop: '100px' }}>
            <Helmet>
                <title>About Me - Sajid Inamdar</title>
                <meta name="description" content="Learn more about Sajid Inamdar, his background, and journey in cybersecurity." />
            </Helmet>
            <About />
        </section>
    );
};

export default AboutPage;
