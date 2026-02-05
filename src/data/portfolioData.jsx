import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaBootstrap, FaGithub, FaLinkedinIn, FaMedium, FaYoutube, FaInstagram, FaTrophy, FaCode } from 'react-icons/fa';
import { SiKalilinux, SiGnubash, SiMysql, SiTryhackme, SiPandas, SiNumpy, SiFastapi, SiFlask } from 'react-icons/si';

export const portfolioData = {
    personal: {
        name: "Sajid Inamdar",
        role: "AI Developer | Cybersecurity Student",
        email: "sajidinamdar@gmail.com",
        location: "Sangamner, Maharashtra",
        github: "https://github.com/sajidinamdar",
        linkedin: "https://www.linkedin.com/in/sajidinamdar-sec/",
        instagram: "https://www.instagram.com/sajidinamdar_",
        youtube: "https://www.youtube.com/@sajidinamdar",
        medium: "https://medium.com/@sajidinamdar",
        tryhackme: "https://tryhackme.com/p/Sajidinamdar",
    },

    stats: [
        { label: "TryHackMe", value: "Top 5%", icon: <FaTrophy />, sublabel: "Global Rank" },
        { label: "GitHub", value: "15+", icon: <FaGithub />, sublabel: "Projects" },
        { label: "Skills", value: "12+", icon: <FaCode />, sublabel: "Technologies" }
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
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'Bash', icon: <SiGnubash />, color: '#4EAA25' },
        { name: 'SQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'Kali Linux', icon: <SiKalilinux />, color: '#557C94' },
        { name: 'TryHackMe', icon: <SiTryhackme />, color: '#C51C2C' },
        { name: 'pandas', icon: <SiPandas />, color: '#150458' },
        { name: 'matplotlib', icon: <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Mat</span>, color: '#11557c' },
        { name: 'numpy', icon: <SiNumpy />, color: '#013243' },
        { name: 'fastapi', icon: <SiFastapi />, color: '#009688' },
        { name: 'flask', icon: <SiFlask />, color: '#000000' },
        { name: 'bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' }
    ],

    projects: [
        {
            title: 'Harisetu',
            desc: 'Agricultural technology platform designed to connect farmers with consumers and optimize farm management.',
            link: 'https://github.com/sajidinamdar/Harisetu',
            tech: ['Python', 'Web Development', 'Database']
        },
        {
            title: 'WebSocket Application',
            desc: 'Real-time communication application using WebSocket protocol for instant data exchange.',
            link: 'https://github.com/sajidinamdar/Websocket',
            tech: ['WebSocket', 'Python', 'Real-time']
        },
        {
            title: 'FastAPI Authentication',
            desc: 'Complete authentication system with signup and login functionality using FastAPI framework.',
            link: 'https://github.com/sajidinamdar/fastapi_signup',
            tech: ['FastAPI', 'Authentication', 'Security']
        },
        {
            title: 'FastAPI Backend Project',
            desc: 'Full-stack backend API built with FastAPI, featuring authentication, database integration, and RESTful endpoints.',
            link: 'https://github.com/sajidinamdar/my-fastapi-project-',
            tech: ['FastAPI', 'Python', 'REST API']
        },
        {
            title: 'Python Chatbot',
            desc: 'AI-powered chatbot application with natural language processing capabilities for automated conversations.',
            link: 'https://github.com/sajidinamdar/Python-chatbot',
            tech: ['Python', 'NLP', 'AI']
        },
        {
            title: 'File Shortener',
            desc: 'Utility tool for optimizing and managing file path structures in complex directory systems.',
            link: 'https://github.com/sajidinamdar/File-Shortener',
            tech: ['Python', 'File Management', 'Automation']
        },
        {
            title: 'SMTP API Service',
            desc: 'Email service API built with SMTP protocol for sending automated emails and notifications.',
            link: 'https://github.com/sajidinamdar/smtplib-API',
            tech: ['Python', 'SMTP', 'API']
        },
        {
            title: 'Weather API',
            desc: 'Weather information service API that fetches and displays real-time weather data.',
            link: 'https://github.com/sajidinamdar/Weather_api',
            tech: ['Python', 'API', 'Weather Data']
        }
    ],

    blogs: [
        {
            id: 1,
            title: "Learning Journey of Programming Language",
            date: "June 12, 2025",
            category: "My Journey",
            excerpt: "Every programmer has a starting point. My journey into programming began with a simple curiosity — how do websites and apps actually work behind the screen?",
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
