import { Helmet } from 'react-helmet-async';
import Skills from '../components/Skills';

const SkillsPage = () => {
    return (
        <div className="page-section skills-page" style={{ paddingTop: '80px', background: '#020617', minHeight: '100vh' }}>
            <Helmet>
                <title>Skills - Sajid Inamdar | Ethical Hacker & Developer</title>
                <meta name="description" content="Technical skills of Sajid Inamdar including Cybersecurity tools (Kali, Burp Suite), Programming (Python, Bash, JS), and Platforms." />
            </Helmet>
            <Skills />
        </div>
    );
};

export default SkillsPage;
