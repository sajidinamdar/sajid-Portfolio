import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData.jsx';

const Blogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const { blogs } = portfolioData;

    const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedBlog) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedBlog]);

    const openBlog = (blog) => {
        setSelectedBlog(blog);
    };

    const closeBlog = () => {
        setSelectedBlog(null);
    };

    return (
        <section id="blogs" className="blogs-modern">
            <div className="cyber-grid-overlay"></div>
            <div className="container relative-z">
                <div className="section-header">
                    <h2 className="section-title-gradient">My Blogs</h2>
                    <div className="section-divider"></div>
                </div>

                <div className="blogs-grid">
                    {visibleBlogs.map((blog, index) => (
                        <article key={blog.id} className="cache-card luminous-aura" onClick={() => openBlog(blog)}>

                            <div className="card-body">
                                <div className="category-tag">{blog.category || 'INTEL'}</div>
                                <h3 className="blog-title">{blog.title}</h3>
                                <div className="metadata">
                                    <span className="date"><i className="far fa-calendar-alt"></i> {blog.date}</span>
                                    <span className="read-time"><i className="far fa-clock"></i> 5 MIN READ</span>
                                </div>
                                <p className="excerpt">{blog.excerpt}</p>
                            </div>

                            <div className="card-footer">
                                <button className="access-btn">
                                    Read Article <i className="fas fa-arrow-right"></i>
                                </button>
                                <div className="scan-line"></div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="discovery-center">
                    <button className="cyber-btn" onClick={() => setShowAll(!showAll)}>
                        <span className="btn-content">
                            {showAll ? 'Show Less' : 'View All'}
                        </span>
                        <div className="btn-fill"></div>
                    </button>

                    <a href="https://medium.com/@sajidinamdar" target="_blank" rel="noreferrer" className="cyber-btn medium-btn">
                        <span className="btn-content">
                            <i className="fab fa-medium"></i> Follow on Medium
                        </span>
                        <div className="btn-fill"></div>
                    </a>
                </div>
            </div>

            {/* Premium Intelligence Report Modal */}
            {selectedBlog && (
                <div className="intel-modal" onClick={closeBlog}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-bg-decor"></div>

                        <div className="modal-layout">
                            <div className="modal-sidebar">
                                <div className="author-node">
                                    <img src="/img/sajid-inamdar.jpg" alt="Sajid Inamdar" />
                                    <div className="author-info">
                                        <span className="name">Sajid Inamdar</span>
                                        <span className="rank">Author</span>
                                    </div>
                                </div>
                                <div className="sidebar-stats">
                                    <div className="stat-item">
                                        <span className="label">SECURITY_LEVEL:</span>
                                        <span className="value">CLASS_4</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="label">ENCRYPTION:</span>
                                        <span className="value">AES_256</span>
                                    </div>
                                </div>
                                <button className="modal-close-btn" onClick={closeBlog}>
                                    <i className="fas fa-times"></i> Close
                                </button>
                            </div>

                            <div className="modal-main">
                                <div className="report-header">
                                    <div className="stamp">Article</div>
                                    <h2 className="report-title">{selectedBlog.title}</h2>
                                    <div className="report-meta">
                                        <span>Date: {selectedBlog.date}</span>
                                        <span>Category: {selectedBlog.category || 'Blog'}</span>
                                    </div>
                                </div>

                                <div className="report-content" dangerouslySetInnerHTML={{ __html: selectedBlog.content || selectedBlog.excerpt }}>
                                </div>

                                {selectedBlog.mediumUrl && (
                                    <div className="report-footer">
                                        <a href={selectedBlog.mediumUrl} target="_blank" rel="noreferrer" className="medium-uplink">
                                            Read on Medium <i className="fas fa-external-link-alt"></i>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .blogs-modern {
                    padding: var(--section-padding) 0;
                    position: relative;
                    overflow: hidden;
                }

                .cyber-grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px);
                    background-size: 50px 50px;
                    mask-image: radial-gradient(circle at center, black, transparent 80%);
                    pointer-events: none;
                }

                .relative-z { position: relative; z-index: 10; }


                .blogs-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 30px;
                    margin-bottom: 60px;
                }

                /* CACHE CARD STYLE */
                .cache-card {
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: 20px;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    box-shadow: var(--glass-glow);
                }

                .cache-card:hover {
                    transform: translateY(-10px) scale(1.02);
                    border-color: var(--glass-border-hover);
                    background: rgba(30, 41, 59, 0.7);
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
                }


                .card-body { padding: 30px; flex-grow: 1; }
                
                .category-tag {
                    display: inline-block;
                    font-size: 0.65rem;
                    color: #38bdf8;
                    padding: 4px 10px;
                    border: 1px solid rgba(56, 189, 248, 0.2);
                    border-radius: 4px;
                    margin-bottom: 20px;
                    font-weight: 800;
                    letter-spacing: 2px;
                }

                .blog-title {
                    font-size: 1.4rem;
                    color: #fff;
                    margin-bottom: 15px;
                    line-height: 1.4;
                }

                .metadata {
                    display: flex;
                    gap: 15px;
                    margin-bottom: 20px;
                    font-size: 0.75rem;
                    color: #64748b;
                }

                .metadata i { color: #38bdf8; margin-right: 5px; }

                .excerpt {
                    color: #94a3b8;
                    font-size: 0.95rem;
                    line-height: 1.7;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .card-footer {
                    padding: 20px 30px;
                    background: rgba(255, 255, 255, 0.02);
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    position: relative;
                }

                .access-btn {
                    background: transparent;
                    border: none;
                    color: #fff;
                    font-family: 'Courier New', monospace;
                    font-size: 0.8rem;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;
                    letter-spacing: 2px;
                }

                .scan-line {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #38bdf8;
                    transition: 0.4s;
                }

                .cache-card:hover .scan-line {
                    width: 100%;
                    box-shadow: 0 0 15px #38bdf8;
                }

                .discovery-center {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    flex-wrap: wrap;
                }

                /* CYBER BUTTON INHERITED */
                .cyber-btn {
                    padding: 12px 35px;
                    background: transparent;
                    border: 1px solid rgba(56, 189, 248, 0.3);
                    color: #fff;
                    font-size: 0.9rem;
                    font-weight: 700;
                    border-radius: 8px;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }

                .btn-content { position: relative; z-index: 2; letter-spacing: 2px; }
                .btn-fill { position: absolute; inset: 0; background: #38bdf8; transform: skewX(-45deg) translateX(-150%); transition: 0.5s; z-index: 1; }
                .cyber-btn:hover .btn-fill { transform: skewX(-45deg) translateX(-50%); }
                .cyber-btn:hover { color: var(--bg-dark); border-color: #38bdf8; transform: translateY(-3px); }

                .medium-btn { border-color: rgba(255, 255, 255, 0.1); }
                .medium-btn .btn-fill { background: #fff; }

                /* INTEL MODAL STYLE */
                .intel-modal {
                    position: fixed;
                    inset: 0;
                    z-index: 2000;
                    background: rgba(10, 25, 47, 0.98);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    animation: modalFadeIn 0.3s ease;
                }

                .modal-container {
                    background: #0f172a;
                    width: 100%;
                    max-width: 1100px;
                    height: 85vh;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 24px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 0 100px rgba(0, 0, 0, 0.8);
                }

                .modal-bg-decor {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle at 10% 10%, rgba(56, 189, 248, 0.05), transparent 40%);
                    pointer-events: none;
                }

                .modal-layout {
                    display: flex;
                    height: 100%;
                }

                .modal-sidebar {
                    width: 250px;
                    background: rgba(255, 255, 255, 0.02);
                    border-right: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 40px 25px;
                    display: flex;
                    flex-direction: column;
                }

                .author-node {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    margin-bottom: 40px;
                }

                .author-node img {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    border: 2px solid #38bdf8;
                    margin-bottom: 15px;
                    padding: 3px;
                }

                .author-info .name { display: block; color: #fff; font-weight: 700; font-size: 1rem; }
                .author-info .rank { color: #38bdf8; font-family: 'Courier New', monospace; font-size: 0.7rem; font-weight: 800; }

                .sidebar-stats {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .stat-item { display: flex; flex-direction: column; gap: 5px; }
                .stat-item .label { color: #64748b; font-size: 0.6rem; font-weight: 800; }
                .stat-item .value { color: #e2e8f0; font-family: 'Courier New', monospace; font-size: 0.8rem; }

                .modal-close-btn {
                    background: rgba(239, 68, 68, 0.1);
                    border: 1px solid rgba(239, 68, 68, 0.2);
                    color: #ef4444;
                    padding: 12px;
                    border-radius: 8px;
                    font-size: 0.75rem;
                    font-weight: 800;
                    cursor: pointer;
                    transition: 0.3s;
                    font-family: 'Courier New', monospace;
                }

                .modal-close-btn:hover { background: #ef4444; color: #fff; }

                .modal-main {
                    flex-grow: 1;
                    padding: 60px;
                    overflow-y: auto;
                    scrollbar-width: thin;
                    scrollbar-color: #38bdf8 transparent;
                }

                .report-header {
                    margin-bottom: 40px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    padding-bottom: 30px;
                }

                .stamp {
                    display: inline-block;
                    padding: 5px 15px;
                    border: 2px solid #ef4444;
                    color: #ef4444;
                    font-weight: 900;
                    font-size: 0.8rem;
                    transform: rotate(-5deg);
                    margin-bottom: 20px;
                    letter-spacing: 2px;
                }

                .report-title {
                    font-size: 2.5rem;
                    color: #fff;
                    line-height: 1.2;
                    margin-bottom: 20px;
                }

                .report-meta {
                    display: flex;
                    gap: 30px;
                    font-family: 'Courier New', monospace;
                    font-size: 0.85rem;
                    color: #38bdf8;
                }

                .report-content {
                    color: #cbd5e1;
                    font-size: 1.1rem;
                    line-height: 1.8;
                }

                .report-content p { margin-bottom: 20px; }

                .report-footer {
                    margin-top: 50px;
                    padding-top: 30px;
                    border-top: 1px dashed rgba(255, 255, 255, 0.1);
                }

                .medium-uplink {
                    color: #38bdf8;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                @keyframes modalFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @media (max-width: 968px) {
                    .modal-layout { flex-direction: column; }
                    .modal-sidebar { width: 100%; border-right: none; border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 20px; flex-direction: row; align-items: center; justify-content: space-between; gap: 15px; }
                    .author-node { margin-bottom: 0; flex-direction: row; }
                    .author-node img { width: 40px; height: 40px; margin-right: 12px; margin-bottom: 0; }
                    .author-info .name { font-size: 0.85rem; }
                    .sidebar-stats { display: none; }
                    .modal-main { padding: 25px; }
                    .report-title { font-size: 1.6rem; }
                    .glitch-text { font-size: 2.5rem; }
                }

                @media (max-width: 480px) {
                    .blogs-modern { padding: 60px 0; }
                    .glitch-text { font-size: 2.2rem; }
                    .card-body { padding: 20px; }
                    .blog-title { font-size: 1.25rem; }
                    .modal-container { height: 95vh; border-radius: 16px; }
                    .modal-main { padding: 20px; }
                    .report-title { font-size: 1.4rem; }
                    .discovery-center { gap: 15px; }
                    .cyber-btn { width: 100%; justify-content: center; padding: 10px 20px; font-size: 0.8rem; }
                }
            `}</style>
        </section>
    );
};

export default Blogs;

