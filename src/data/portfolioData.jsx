import { FaPython, FaGitAlt, FaGithub, FaLinkedinIn, FaMedium, FaYoutube, FaInstagram, FaTrophy, FaCode, FaShieldAlt, FaTerminal, FaSearch, FaNetworkWired } from 'react-icons/fa';
import { SiKalilinux, SiGnubash, SiMysql, SiTryhackme, SiWireshark, SiMetasploit, SiPostman, SiBurpsuite } from 'react-icons/si';

export const portfolioData = {
    personal: {
        name: "SAJID INAMDAR",
        role: "Cybersecurity Researcher | Ethical Hacker",
        email: "inamdarsajid46@gmail.com",
        phone: "+91 8329465339",
        location: "Sangamner, Maharashtra, India",
        github: "https://github.com/sajidinamdar",
        linkedin: "https://www.linkedin.com/in/sajidinamdar-sec/",
        instagram: "https://www.instagram.com/sajidinamdar_",
        youtube: "https://www.youtube.com/@sajidinamdar",
        medium: "https://medium.com/@sajidinamdar",
        tryhackme: "https://tryhackme.com/p/Sajidinamdar",
    },

    stats: [
        { label: "TryHackMe", value: "Top 2%", icon: <FaTrophy />, sublabel: "Global Rank" },
        { label: "Labs Solved", value: "200+", icon: <SiTryhackme />, sublabel: "Security Labs" },
        { label: "Skills", value: "12+", icon: <FaCode />, sublabel: "Security Tools" }
    ],

    socialAccounts: [
        { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/sajidinamdar', color: '#333' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/sajidinamdar-sec/', color: '#0077B5' },
        { name: 'Medium', icon: 'fab fa-medium', url: 'https://medium.com/@sajidinamdar', color: '#00ab6c' },
        { name: 'Dev.to', icon: 'fab fa-dev', url: 'https://dev.to/sajidinamdar', color: '#000' },
        { name: 'TryHackMe', icon: 'fas fa-flag', url: 'https://tryhackme.com/p/Sajidinamdar', color: '#C51C2C' },
        { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://www.youtube.com/@sajidinamdar', color: '#FF0000' },
        { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/sajidinamdar_', color: '#E4405F' }
    ],

    skills: [
        { 
            name: 'Web Application Security', 
            category: 'Application & API Security', 
            desc: 'Performed vulnerability assessments following the OWASP Top 10 framework to secure active backends.', 
            icon: <FaShieldAlt />, 
            color: '#3b82f6' 
        },
        { 
            name: 'Burp Suite', 
            category: 'Application & API Security', 
            desc: 'Intercepted, analyzed, and modified HTTP/S requests using Proxy and Repeater tools to map target structures.', 
            icon: <SiBurpsuite />, 
            color: '#ff6600' 
        },
        { 
            name: 'Postman', 
            category: 'Application & API Security', 
            desc: 'Tested REST API endpoints and verified authentication token persistence and handling.', 
            icon: <SiPostman />, 
            color: '#ff6c37' 
        },
        { 
            name: 'Nmap', 
            category: 'Network & Threat Analysis', 
            desc: 'Conducted host discovery, port scanning, service detection, and OS version enumeration across target subnets.', 
            icon: <FaNetworkWired />, 
            color: '#0ea5e9' 
        },
        { 
            name: 'Wireshark', 
            category: 'Network & Threat Analysis', 
            desc: 'Captured and analyzed local network traffic to dissect protocol behaviors and detect unencrypted text transmissions.', 
            icon: <SiWireshark />, 
            color: '#167ec2' 
        },
        { 
            name: 'Metasploit', 
            category: 'Network & Threat Analysis', 
            desc: 'Validated known CVEs and executed payloads on authorized legacy target machines.', 
            icon: <SiMetasploit />, 
            color: '#2496ed' 
        },
        { 
            name: 'Gobuster', 
            category: 'Reconnaissance & OSINT', 
            desc: 'Enumerated hidden directories and performed content discovery via active directory fuzzing.', 
            icon: <FaSearch />, 
            color: '#eab308' 
        },
        { 
            name: 'OSINT & Dorking', 
            category: 'Reconnaissance & OSINT', 
            desc: 'Gathered open-source intelligence and leaked sensitive assets using advanced search operators.', 
            icon: <FaTerminal />, 
            color: '#10b981' 
        },
        { 
            name: 'Kali Linux', 
            category: 'Automation & Systems', 
            desc: 'Performed manual security evaluations using Kali Linux terminal tools and deployment configurations.', 
            icon: <SiKalilinux />, 
            color: '#557c94' 
        },
        { 
            name: 'Git & Version Control', 
            category: 'Automation & Systems', 
            desc: 'Maintained target documentation and vulnerability writeups via Git workflows.', 
            icon: <FaGitAlt />, 
            color: '#f05032' 
        },
        { 
            name: 'Python', 
            category: 'Automation & Systems', 
            desc: 'Developed custom reconnaissance scanners and scripting utilities for automation tasks.', 
            icon: <FaPython />, 
            color: '#3776ab' 
        },
        { 
            name: 'Bash', 
            category: 'Automation & Systems', 
            desc: 'Wrote shell scripts to automate network monitoring and log evaluation scans.', 
            icon: <SiGnubash />, 
            color: '#4eaa25' 
        },
        { 
            name: 'SQL', 
            category: 'Automation & Systems', 
            desc: 'Identified and validated SQL injection vulnerabilities within application databases.', 
            icon: <SiMysql />, 
            color: '#4479a1' 
        }
    ],

    projects: [
        {
            title: 'VAPT Report: Shell Access on Metasploitable 2',
            domain: 'Network Pentesting',
            desc: 'Conducted a full-scope vulnerability assessment and penetration test on a legacy network host. Successfully exploited unpatched services (FTP, SMB) using Metasploit to obtain root access and compiled a remediation report.',
            remediation: 'Disable obsolete services (FTP, SMB v1, Telnet), enforce kernel level patching, and configure host firewall rules to restrict root access.',
            tech: ['Nmap', 'Metasploit', 'Kali Linux', 'VAPT'],
            link: 'https://github.com/sajidinamdar'
        },
        {
            title: 'Network Scanning Assessment & Host Identification',
            domain: 'Network Security',
            desc: 'Mapped topology and evaluated the attack surface of a sandbox lab environment. Performed host discovery, port scanning, and analyzed active handshake sequences via Wireshark to locate unencrypted network traffic.',
            remediation: 'Restrict ICMP echo response sequences, close unused network ports, and enforce SSH/TLS encryption for all management protocols.',
            tech: ['Nmap', 'Wireshark', 'Linux', 'Networking'],
            link: 'https://github.com/sajidinamdar'
        },
        {
            title: 'OSINT Reconnaissance Report: wscubetech.com',
            domain: 'Reconnaissance',
            desc: 'Gathered open-source intelligence on exposed corporate subdomains and unindexed directories. Used advanced Google Dorking queries and Gobuster directory fuzzing to locate leaked configuration metadata.',
            remediation: 'Implement robots.txt directives to restrict search crawlers, disable directory listings, and encrypt exposed subdomain metadata files.',
            tech: ['OSINT', 'Google Dorking', 'Gobuster', 'Recon'],
            link: 'https://github.com/sajidinamdar'
        },
        {
            title: 'Credential Exposure Risk Analysis',
            domain: 'Threat Intelligence',
            desc: 'Audited corporate data leaks and credentials to identify initial access risks. Queried public breach repositories, assessed weak password reuse patterns, and developed risk mitigation metrics.',
            remediation: 'Enforce Multi-Factor Authentication (MFA), establish mandatory password rotation policies, and monitor breached data dumps.',
            tech: ['OSINT', 'Linux', 'Risk Analysis', 'Threat Intel'],
            link: 'https://github.com/sajidinamdar'
        }
    ],

    blogs: [
        {
            id: 1,
            title: "Learning Journey of Programming Language",
            date: "June 12, 2025",
            category: "My Journey",
            excerpt: "Every programmer has a starting point. My journey into programming began with a simple curiosity — how do websites and apps work behind the screen?",
            mediumUrl: "https://medium.com/@sajidinamdar"
        },
        {
            id: 2,
            title: "Learning Kali Linux",
            date: "September 15, 2025",
            category: "Linux Journey",
            excerpt: "Kali Linux was my first real introduction to Linux-based systems. At first, the terminal looked confusing and the commands felt hard to remember.",
            mediumUrl: "https://medium.com/@sajidinamdar"
        },
        {
            id: 3,
            title: "Network Fundamentals",
            date: "October 20, 2025",
            category: "Networking",
            excerpt: "Every website, app, and online service works because of networking. Understanding network fundamentals is essential for becoming a strong IT professional.",
            mediumUrl: "https://medium.com/@sajidinamdar"
        },
        {
            id: 4,
            title: "Agnipath – The Inspiring Book by Dr. A. P. J. Abdul Kalam",
            date: "November 5, 2025",
            category: "Book Review",
            excerpt: "Agnipath is one of the most inspiring books written by Dr. A. P. J. Abdul Kalam. It is a roadmap for discipline, dedication, and self-belief.",
            mediumUrl: "https://medium.com/@sajidinamdar"
        }
    ]
};
