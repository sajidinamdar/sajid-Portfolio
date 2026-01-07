import { Helmet } from 'react-helmet-async';

const BlogsPage = () => {
    const blogs = [
        {
            title: "What is Ethical Hacking?",
            summary: "An introduction to the world of ethical hacking, White Hat vs Black Hat, and how to get started lawfully.",
            date: "October 10, 2025",
            link: "#"
        },
        {
            title: "How I Practice TryHackMe Rooms",
            summary: "My methodology for approaching CTF challenges on TryHackMe and learning new vulnerabilities.",
            date: "November 5, 2025",
            link: "#"
        },
        {
            title: "Best Kali Linux Tools for Beginners",
            summary: "A curated list of essential tools in Kali Linux that every student should master first.",
            date: "December 12, 2025",
            link: "#"
        },
        {
            title: "How I Build Pentesting Labs",
            summary: "Setting up a safe, isolated environment using VirtualBox and vulnerable VMs for practice.",
            date: "January 4, 2026",
            link: "#"
        }
    ];

    return (
        <section className="page-section blogs-page">
            <Helmet>
                <title>Blogs - Sajid Inamdar | Cybersecurity Articles & Tutorials</title>
                <meta name="description" content="Read cybersecurity blogs and articles by Sajid Inamdar covering ethical hacking, Kali Linux, network security, TryHackMe, and cybersecurity best practices." />
                <meta name="keywords" content="Cybersecurity Blogs, Ethical Hacking, Kali Linux, Network Security, TryHackMe, Sajid Inamdar Articles" />
                <link rel="canonical" href="https://sajid-portfolio-nine.vercel.app/blogs" />

                {/* OpenGraph */}
                <meta property="og:title" content="Blogs - Sajid Inamdar | Cybersecurity Articles & Tutorials" />
                <meta property="og:description" content="Read cybersecurity blogs and articles by Sajid Inamdar covering ethical hacking, Kali Linux, and network security." />
                <meta property="og:url" content="https://sajid-portfolio-nine.vercel.app/blogs" />
                <meta property="og:image" content="https://sajid-portfolio-nine.vercel.app/img/sajid-inamdar.jpg" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blogs - Sajid Inamdar" />
                <meta name="twitter:description" content="Cybersecurity blogs and articles by Sajid Inamdar covering ethical hacking and network security." />
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
                                    "name": "Blogs",
                                    "item": "https://sajid-portfolio-nine.vercel.app/blogs"
                                }
                            ]
                        }
                    `}
                </script>
            </Helmet>
            <div className="container">
                <h2 className="section-title">Cybersecurity Blogs</h2>
                <div className="blogs-grid">
                    {blogs.map((blog, index) => (
                        <article key={index} className="blog-card">
                            <h3>{blog.title}</h3>
                            <p className="blog-date">{blog.date}</p>
                            <p className="blog-summary">{blog.summary}</p>
                            <a href={blog.link} className="read-more">Read More &rarr;</a>
                            <script type="application/ld+json">
                                {JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "BlogPosting",
                                    "headline": blog.title,
                                    "description": blog.summary,
                                    "author": {
                                        "@type": "Person",
                                        "name": "Sajid Inamdar",
                                        "url": "https://sajid-portfolio-nine.vercel.app/"
                                    },
                                    "datePublished": blog.date,
                                    "publisher": {
                                        "@type": "Person",
                                        "name": "Sajid Inamdar"
                                    },
                                    "mainEntityOfPage": {
                                        "@type": "WebPage",
                                        "@id": `https://sajid-portfolio-nine.vercel.app/blogs#${blog.title.toLowerCase().replace(/\s+/g, '-')}`
                                    }
                                })}
                            </script>
                        </article>
                    ))}
                </div>
            </div>
            <style>{`
                .blogs-page { padding-top: 100px; padding-bottom: 50px; }
                .blogs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
                .blog-card { background: rgba(30, 41, 59, 0.4); border: 1px solid rgba(255,255,255,0.05); padding: 2rem; border-radius: 12px; transition: 0.3s; }
                .blog-card:hover { transform: translateY(-5px); border-color: var(--neon-cyan); }
                .blog-card h3 { color: #fff; margin-bottom: 0.5rem; }
                .blog-date { color: #8892b0; font-size: 0.9rem; margin-bottom: 1rem; }
                .blog-summary { color: #cbd5e1; margin-bottom: 1.5rem; line-height: 1.6; }
                .read-more { color: var(--neon-cyan); text-decoration: none; font-weight: bold; }
            `}</style>
        </section>
    );
};

export default BlogsPage;
