import { useState } from 'react';
import { portfolioData } from '../data/portfolioData.jsx';

const Blogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const { blogs } = portfolioData;

    const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

    const openBlog = (blog) => {
        setSelectedBlog(blog);
        document.body.style.overflow = 'hidden';
    };

    const closeBlog = () => {
        setSelectedBlog(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="blogs" className="section blogs-section">
            <div className="container">
                <h2 className="section-title">Blogs</h2>

                {/* Blogs Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "Sajid Inamdar's Cybersecurity Blog",
                        "description": "Cybersecurity blogs and articles covering ethical hacking, Kali Linux, network security, and cybersecurity best practices",
                        "author": {
                            "@type": "Person",
                            "name": "Sajid Inamdar",
                            "url": "https://sajid-portfolio-nine.vercel.app/"
                        },
                        "blogPost": blogs.map(blog => ({
                            "@type": "BlogPosting",
                            "headline": blog.title,
                            "description": blog.excerpt,
                            "author": {
                                "@type": "Person",
                                "name": "Sajid Inamdar"
                            },
                            "datePublished": blog.date,
                            "publisher": {
                                "@type": "Person",
                                "name": "Sajid Inamdar"
                            }
                        }))
                    })}
                </script>

                <div className="blogs-grid">
                    {visibleBlogs.map((blog) => (
                        <article key={blog.id} className="blog-card">
                            <h3>{blog.title}</h3>
                            <p className="blog-date">
                                <i className="far fa-calendar-alt"></i> {blog.date}
                            </p>
                            <p className="blog-excerpt">{blog.excerpt}</p>
                            <button className="read-more-btn" onClick={() => openBlog(blog)}>
                                Read Full Article <i className="fas fa-arrow-right"></i>
                            </button>
                        </article>
                    ))}
                </div>

                <div className="blog-footer">
                    <button className="view-all-btn" onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'Show Less' : 'View All Blogs'}
                    </button>
                    <a href="https://medium.com/@sajidinamdar" target="_blank" rel="noreferrer" className="view-all-btn medium-cta">
                        <i className="fab fa-medium"></i> Follow on Medium
                    </a>
                </div>
            </div>

            {/* Full Blog Modal */}
            {selectedBlog && (
                <div className="blog-modal" onClick={closeBlog}>
                    <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeBlog} aria-label="Close article">
                            <i className="fas fa-times"></i>
                        </button>

                        <div className="blog-header">
                            <h1>{selectedBlog.title}</h1>
                            <p className="blog-subtitle">{selectedBlog.subtitle}</p>
                            <p className="blog-date">
                                <i className="far fa-calendar-alt"></i> {selectedBlog.date}
                            </p>
                        </div>

                        <div className="blog-content" dangerouslySetInnerHTML={{ __html: selectedBlog.content }}></div>
                    </div>
                </div>
            )}

            <style>{`
                /* Blog Section */
                .blogs-section {
                    padding: var(--section-padding) 0;
                }

                /* Blog Cards Grid */
                .blogs-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 24px;
                    margin-bottom: 48px;
                }

                .blog-footer {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    padding-top: 24px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    flex-wrap: wrap;
                }

                .view-all-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px 36px;
                    background: transparent;
                    border: 2px solid var(--neon-cyan);
                    color: var(--neon-cyan);
                    font-weight: 600;
                    font-size: 0.95rem;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                    letter-spacing: 0.5px;
                    text-decoration: none;
                    cursor: pointer;
                    font-family: inherit;
                }

                .view-all-btn:hover {
                    background: var(--neon-cyan);
                    color: #000;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(0, 243, 255, 0.3);
                }

                .medium-cta {
                    border-color: rgba(255, 255, 255, 0.2);
                    color: #fff;
                    background: transparent;
                    box-shadow: none;
                    gap: 10px;
                }

                .medium-cta:hover {
                     background: #fff;
                     color: #000;
                     border-color: #fff;
                     box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
                     filter: none;
                }
                
                .medium-cta i {
                    font-size: 1.2rem;
                }
                
                .blog-card {
                    background: rgba(30, 41, 59, 0.3);
                    border: 1px solid rgba(255,255,255,0.06);
                    padding: 28px;
                    border-radius: 16px;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                    height: 100%;
                    backdrop-filter: blur(10px);
                    position: relative;
                    overflow: hidden;
                }

                .blog-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, var(--neon-cyan), var(--accent));
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.4s ease;
                }

                .blog-card:hover::before {
                    transform: scaleX(1);
                }

                .blog-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(0, 243, 255, 0.3);
                    background: rgba(30, 41, 59, 0.5);
                    box-shadow: 0 20px 48px rgba(0, 243, 255, 0.2);
                }

                .blog-category {
                    display: inline-block;
                    font-size: 0.75rem;
                    color: var(--neon-cyan);
                    background: rgba(0, 243, 255, 0.1);
                    padding: 6px 14px;
                    border-radius: 50px;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    width: fit-content;
                    border: 1px solid rgba(0, 243, 255, 0.2);
                }
                
                .blog-card h3 {
                    color: #fff;
                    font-size: 1.3rem;
                    font-weight: 600;
                    line-height: 1.4;
                    margin: 0;
                }
                
                .blog-date {
                    color: #8892b0;
                    font-size: 0.85rem;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin: 0;
                }

                .blog-date i {
                    color: var(--neon-cyan);
                }
                
                .blog-excerpt {
                    color: var(--text-secondary);
                    line-height: 1.7;
                    margin: 0;
                    font-size: 0.95rem;
                    flex-grow: 1;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .read-more-btn {
                    background: transparent;
                    border: 2px solid var(--neon-cyan);
                    color: var(--neon-cyan);
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    margin-top: auto;
                    position: relative;
                    overflow: hidden;
                }

                .read-more-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: var(--neon-cyan);
                    transition: left 0.4s ease;
                    z-index: -1;
                }

                .read-more-btn:hover::before {
                    left: 0;
                }

                .read-more-btn:hover {
                    color: #000;
                    transform: translateY(-3px);
                    box-shadow: 0 12px 32px rgba(0, 243, 255, 0.4);
                    border-color: var(--neon-cyan);
                }

                .read-more-btn:active {
                    transform: translateY(-1px);
                }

                .read-more-btn i {
                    transition: transform 0.3s ease;
                }

                .read-more-btn:hover i {
                    transform: translateX(4px);
                }

                /* Full Blog Modal */
                .blog-modal {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.92);
                    backdrop-filter: blur(8px);
                    z-index: 2000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    overflow-y: auto;
                    animation: fadeIn 0.3s ease;
                    scrollbar-width: none; /* Firefox */
                    -ms-overflow-style: none;  /* IE and Edge */
                }

                .blog-modal::-webkit-scrollbar {
                    display: none;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .blog-modal-content {
                    background: rgba(15, 23, 42, 0.95);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    max-width: 900px;
                    width: 100%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    animation: slideUp 0.4s ease;
                    scrollbar-width: none; /* Firefox */
                    -ms-overflow-style: none;  /* IE and Edge */
                }

                .blog-modal-content::-webkit-scrollbar {
                    display: none;
                }

                @keyframes slideUp {
                    from {
                        transform: translateY(30px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .close-btn {
                    position: sticky;
                    top: 20px;
                    right: 20px;
                    margin-left: auto;
                    display: block;
                    width: 44px;
                    height: 44px;
                    background: rgba(0, 0, 0, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    color: #fff;
                    font-size: 1.3rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 10;
                    margin-right: 20px;
                    margin-top: 20px;
                }

                .close-btn:hover {
                    background: var(--neon-cyan);
                    color: #000;
                    transform: rotate(90deg);
                    border-color: var(--neon-cyan);
                }

                .blog-header {
                    background: rgba(30, 41, 59, 0.4);
                    padding: 48px 40px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                    text-align: center;
                }

                .blog-header h1 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #fff;
                    margin: 20px 0 12px 0;
                    line-height: 1.3;
                }

                .blog-subtitle {
                    font-size: 1.2rem;
                    color: var(--text-secondary);
                    margin: 0 0 20px 0;
                    font-style: italic;
                }

                .blog-content {
                    padding: 48px 40px;
                }

                .blog-content h3 {
                    font-size: 1.6rem;
                    font-weight: 600;
                    color: #fff;
                    margin: 32px 0 20px 0;
                    position: relative;
                    padding-bottom: 12px;
                }

                .blog-content h3::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 50px;
                    height: 3px;
                    background: linear-gradient(90deg, var(--neon-cyan), transparent);
                }

                .blog-content h4 {
                    font-size: 1.3rem;
                    font-weight: 600;
                    color: #fff;
                    margin: 24px 0 16px 0;
                }

                .blog-content blockquote {
                    margin: 20px 0;
                    padding: 20px 24px;
                    background: rgba(0, 243, 255, 0.05);
                    border-left: 4px solid var(--neon-cyan);
                    border-radius: 8px;
                    font-size: 1.1rem;
                    font-style: italic;
                    color: rgba(255, 255, 255, 0.9);
                    line-height: 1.7;
                }

                .blog-content p {
                    font-size: 1.05rem;
                    line-height: 1.8;
                    color: var(--text-secondary);
                    margin-bottom: 18px;
                }

                .blog-content strong {
                    color: var(--neon-cyan);
                    font-weight: 600;
                }

                .blog-content code {
                    background: rgba(0, 243, 255, 0.1);
                    color: var(--neon-cyan);
                    padding: 4px 10px;
                    border-radius: 6px;
                    font-family: 'Courier New', monospace;
                    font-size: 0.95rem;
                    border: 1px solid rgba(0, 243, 255, 0.2);
                }

                .blog-content ul {
                    list-style: none;
                    padding: 0;
                    margin: 20px 0;
                }

                .blog-content ul li {
                    font-size: 1.05rem;
                    line-height: 1.8;
                    color: var(--text-secondary);
                    padding-left: 28px;
                    position: relative;
                    margin-bottom: 12px;
                }

                .blog-content ul li::before {
                    content: '▹';
                    color: var(--neon-cyan);
                    font-size: 1.2rem;
                    position: absolute;
                    left: 0;
                }

                .blog-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 24px 0;
                    background: rgba(30, 41, 59, 0.3);
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.06);
                }

                .blog-content table thead {
                    background: rgba(0, 243, 255, 0.1);
                }

                .blog-content table th {
                    padding: 14px 18px;
                    text-align: left;
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--neon-cyan);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    border-bottom: 2px solid rgba(0, 243, 255, 0.2);
                }

                .blog-content table td {
                    padding: 12px 18px;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
                }

                .blog-content table tbody tr:last-child td {
                    border-bottom: none;
                }

                .blog-content table tbody tr:hover {
                    background: rgba(0, 243, 255, 0.05);
                }

                .blog-content table td strong {
                    color: #fff;
                    font-weight: 600;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .blogs-grid {
                        grid-template-columns: 1fr;
                        gap: 15px;
                    }

                    .blog-card {
                        padding: 15px;
                    }

                    .blog-card h3 {
                        font-size: 1.1rem;
                    }

                    .blog-header {
                        padding: 32px 24px;
                    }

                    .blog-header h1 {
                        font-size: 2rem;
                    }

                    .blog-subtitle {
                        font-size: 1rem;
                    }

                    .blog-content {
                        padding: 32px 24px;
                    }

                    .blog-content h3 {
                        font-size: 1.4rem;
                    }

                    .blog-content p,
                    .blog-content ul li {
                        font-size: 1rem;
                    }

                    .close-btn {
                        top: 10px;
                        right: 10px;
                        margin: 10px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Blogs;
