import { Helmet } from 'react-helmet-async';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaGitAlt, FaAws, FaGithub, FaGitlab } from 'react-icons/fa';
import { SiKalilinux, SiWireshark, SiBurpsuite, SiGnubash, SiMysql, SiNumpy, SiPandas, SiHackthebox, SiTryhackme } from 'react-icons/si';

const SkillCategory = ({ title, skills }) => (
    <div className="skill-category">
        <h3>{title}</h3>
        <div className="skill-grid">
            {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                    <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: skill.level, backgroundColor: skill.color }}></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const SkillsPage = () => {
    const cyberSecuritySkills = [
        { name: 'Kali Linux', icon: <SiKalilinux />, color: '#557C94', level: '90%' },
        { name: 'Wireshark', icon: <SiWireshark />, color: '#1679A7', level: '85%' },
        { name: 'Burp Suite', icon: <SiBurpsuite />, color: '#FF6633', level: '80%' },
        { name: 'Metasploit', icon: <SiKalilinux />, color: '#333', level: '75%' }, // Fallback icon or generic
        { name: 'Nmap', icon: <span style={{ fontWeight: 'bold' }}>Nmap</span>, color: '#444', level: '85%' }
    ];

    const programmingSkills = [
        { name: 'Python', icon: <FaPython />, color: '#3776AB', level: '95%' },
        { name: 'Bash', icon: <SiGnubash />, color: '#4EAA25', level: '85%' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', level: '80%' },
        { name: 'SQL', icon: <SiMysql />, color: '#4479A1', level: '80%' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', level: '95%' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', level: '90%' },
        { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3', level: '85%' },
        { name: 'NumPy', icon: <SiNumpy />, color: '#013243', level: '75%' },
        { name: 'Pandas', icon: <SiPandas />, color: '#150458', level: '75%' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032', level: '90%' },
        { name: 'GitLab', icon: <FaGitlab />, color: '#FC6D26', level: '80%' }
    ];

    const platforms = [
        { name: 'TryHackMe', icon: <SiTryhackme />, color: '#C51C2C', level: 'Top 5%' },
        { name: 'Hack The Box', icon: <SiHackthebox />, color: '#9FEF00', level: 'Hacker' },
        { name: 'GitHub', icon: <FaGithub />, color: '#181717', level: 'Active' },
        { name: 'AWS', icon: <FaAws />, color: '#FF9900', level: 'Learning' }
    ];

    return (
        <section className="page-section skills-page">
            <Helmet>
                <title>Skills - Sajid Inamdar | Ethical Hacker & Developer</title>
                <meta name="description" content="Technical skills of Sajid Inamdar including Cybersecurity tools (Kali, Burp Suite), Programming (Python, Bash, JS), and Platforms." />
                <link rel="canonical" href="https://yourportfolio.com/skills" />
            </Helmet>
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="categories-container">
                    <SkillCategory title="Cybersecurity Tools" skills={cyberSecuritySkills} />
                    <SkillCategory title="Programming & Development" skills={programmingSkills} />
                    <SkillCategory title="Platforms & Cloud" skills={platforms} />
                </div>
            </div>
            <style>{`
                .skills-page { padding-top: 100px; padding-bottom: 50px; color: #fff; }
                .skill-category { margin-bottom: 3rem; }
                .skill-category h3 { color: var(--neon-cyan, #00f3ff); margin-bottom: 1.5rem; border-left: 4px solid var(--neon-cyan, #00f3ff); padding-left: 1rem; }
                .skill-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 2rem; }
                .skill-card { background: rgba(30, 41, 59, 0.4); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 1.5rem; text-align: center; transition: 0.3s; }
                .skill-card:hover { transform: translateY(-5px); box-shadow: 0 5px 15px rgba(0, 243, 255, 0.2); }
                .skill-icon { font-size: 3rem; margin-bottom: 1rem; }
                .skill-name { display: block; font-weight: 600; margin-bottom: 0.5rem; }
                .progress-bar { width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
                .progress { height: 100%; }
            `}</style>
        </section>
    );
};

export default SkillsPage;
