import { useState } from 'react';

const Blogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    const blogs = [
        {
            id: 1,
            title: "Learning Journey of Programming Language",
            subtitle: "How I Started, Struggled, and Grew as a Developer",
            date: "June 12, 2025",
            category: "My Journey",
            excerpt: "Every programmer has a starting point. My journey into programming began with a simple curiosity — how do websites and apps actually work behind the screen? At that time, programming looked confusing and complicated. But that curiosity slowly turned into passion.",
            content: `
                <h3>Introduction</h3>
                <p>Every programmer has a starting point. My journey into programming began with a simple curiosity — <strong>how do websites and apps actually work behind the screen?</strong></p>
                <p>At that time, programming looked confusing and complicated. But that curiosity slowly turned into passion.</p>

                <h3>My First Lines of Code</h3>
                <p>I still remember writing my first <code>print("Hello World")</code>. It was a small program, but it felt like magic. Seeing my own code produce output on the screen gave me confidence to continue.</p>

                <h3>Learning the Basics</h3>
                <p>I started with the fundamentals:</p>
                <ul>
                    <li>Variables</li>
                    <li>Conditions</li>
                    <li>Loops</li>
                    <li>Functions</li>
                </ul>
                <p>At first, errors were common and frustrating. But each error taught me something new. I realized that <strong>mistakes are not failures — they are part of learning.</strong></p>

                <h3>Discovering Python</h3>
                <p><strong>Python changed everything for me.</strong></p>
                <p>Its simple and readable syntax made programming enjoyable. I could finally focus on logic instead of complicated syntax rules.</p>
                <p>Using Python, I started building:</p>
                <ul>
                    <li>Small calculator programs</li>
                    <li>File handling scripts</li>
                    <li>Simple automation programs</li>
                    <li>Mini projects</li>
                </ul>
                <p>This made me feel like a <strong>real developer.</strong></p>

                <h3>Facing Challenges</h3>
                <p>There were many moments when I wanted to quit. Sometimes my code didn't work, sometimes I couldn't understand errors.</p>
                <p>But every time I solved a problem, <strong>my confidence grew stronger.</strong></p>

                <h3>What Programming Taught Me</h3>
                <p>Programming taught me:</p>
                <ul>
                    <li>Logical thinking</li>
                    <li>Problem solving</li>
                    <li>Patience</li>
                    <li>Discipline</li>
                    <li>Self-learning</li>
                </ul>
                <p>These lessons helped me not only in coding, but also in life.</p>

                <h3>My Current Focus</h3>
                <p>Today, I am continuously improving my programming skills by:</p>
                <ul>
                    <li>Practicing coding daily</li>
                    <li>Building small projects</li>
                    <li>Learning new technologies</li>
                    <li>Improving code quality</li>
                </ul>

                <h3>Final Words</h3>
                <p>Programming is not just about writing code. It is about learning how to think, how to solve problems, and how to grow every day.</p>
                <p><strong>This is only the beginning of my journey — and there is much more to learn.</strong></p>
            `
        },
        {
            id: 2,
            title: "Learning Kali Linux",
            subtitle: "My Step into the World of Linux and Practical Computing",
            date: "September 15, 2025",
            category: "Linux Journey",
            excerpt: "Kali Linux was my first real introduction to Linux-based systems. At first, the terminal looked confusing and the commands felt hard to remember. But as I started using it daily, Kali Linux slowly became my favorite operating system for learning and practice.",
            content: `
                <h3>Introduction</h3>
                <p>Kali Linux was my first real introduction to Linux-based systems. At first, the terminal looked confusing and the commands felt hard to remember.</p>
                <p>But as I started using it daily, <strong>Kali Linux slowly became my favorite operating system</strong> for learning and practice.</p>

                <h3>First Experience With Kali Linux</h3>
                <p>My first boot into Kali Linux was exciting and scary at the same time. There were no colorful buttons — only a black terminal screen waiting for commands.</p>
                <p>It forced me to actually learn <strong>how computers work internally.</strong></p>

                <h3>Learning Basic Commands</h3>
                <p>I began by practicing simple commands:</p>
                <ul>
                    <li><code>ls</code> – list files</li>
                    <li><code>cd</code> – change directory</li>
                    <li><code>pwd</code> – show current path</li>
                    <li><code>mkdir</code> – create folders</li>
                    <li><code>rm</code> – remove files</li>
                </ul>
                <p>These small commands gave me <strong>full control over the system.</strong></p>

                <h3>Understanding File Structure</h3>
                <p>Kali Linux helped me understand how Linux organizes data:</p>
                <ul>
                    <li><code>/home</code> – user files</li>
                    <li><code>/etc</code> – configuration files</li>
                    <li><code>/bin</code> & <code>/usr/bin</code> – system programs</li>
                    <li><code>/var</code> – logs & data</li>
                </ul>
                <p>This knowledge made me comfortable working inside any Linux system.</p>

                <h3>Learning Package Management</h3>
                <p>Using <code>apt</code> taught me how software is installed, updated, and removed:</p>
                <ul>
                    <li><code>sudo apt update</code></li>
                    <li><code>sudo apt install toolname</code></li>
                    <li><code>sudo apt remove toolname</code></li>
                </ul>
                <p>It showed me how systems manage thousands of programs securely.</p>

                <h3>Why Kali Linux Improved My Skills</h3>
                <p>Kali Linux improved my:</p>
                <ul>
                    <li>Command line confidence</li>
                    <li>File management skills</li>
                    <li>Understanding of operating systems</li>
                    <li>Logical thinking</li>
                    <li>Problem-solving ability</li>
                </ul>

                <h3>Daily Practice Habit</h3>
                <p>I use Kali Linux daily for:</p>
                <ul>
                    <li>Practicing Linux commands</li>
                    <li>Learning new tools</li>
                    <li>Managing projects</li>
                    <li>Running scripts</li>
                    <li>Understanding system behavior</li>
                </ul>

                <h3>Final Words</h3>
                <p>Kali Linux is not just an operating system — <strong>it is a powerful learning environment</strong> that teaches discipline, control, and real computer usage.</p>
                <p><strong>Learning Kali Linux changed the way I understand computers.</strong></p>
            `
        },
        {
            id: 3,
            title: "Network Fundamentals",
            subtitle: "Understanding How Computers Communicate",
            date: "October 20, 2025",
            category: "Networking",
            excerpt: "Every website, app, and online service works because of networking. Before learning advanced technologies, I realized that understanding network fundamentals is essential for becoming a strong IT professional. Networking explains how computers communicate, share data, and stay connected.",
            content: `
                <h3>Introduction</h3>
                <p>Every website, app, and online service works because of networking. Before learning advanced technologies, I realized that <strong>understanding network fundamentals is essential</strong> for becoming a strong IT professional.</p>
                <p>Networking explains how computers communicate, share data, and stay connected.</p>

                <h3>What Is a Network?</h3>
                <p>A network is a group of devices connected together to share information. These devices can be computers, servers, routers, or even mobile phones.</p>
                <p><strong>Examples:</strong></p>
                <ul>
                    <li>Home Wi-Fi network</li>
                    <li>Office LAN</li>
                    <li>The Internet (biggest network)</li>
                </ul>

                <h3>Types of Networks</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Network</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>LAN</strong></td>
                            <td>Local Area Network (home, office)</td>
                        </tr>
                        <tr>
                            <td><strong>WAN</strong></td>
                            <td>Wide Area Network (internet)</td>
                        </tr>
                        <tr>
                            <td><strong>MAN</strong></td>
                            <td>Metropolitan Area Network (city networks)</td>
                        </tr>
                    </tbody>
                </table>

                <h3>IP Address & MAC Address</h3>
                <p>Every device has two important identities:</p>
                <ul>
                    <li><strong>IP Address</strong> – Logical address (changes with network)</li>
                    <li><strong>MAC Address</strong> – Physical address (fixed in hardware)</li>
                </ul>
                <p>They help devices find and communicate with each other.</p>

                <h3>Important Networking Devices</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Device</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Router</strong></td>
                            <td>Connects networks</td>
                        </tr>
                        <tr>
                            <td><strong>Switch</strong></td>
                            <td>Connects devices inside LAN</td>
                        </tr>
                        <tr>
                            <td><strong>Modem</strong></td>
                            <td>Connects to ISP</td>
                        </tr>
                        <tr>
                            <td><strong>Firewall</strong></td>
                            <td>Protects the network</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Common Network Protocols</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Protocol</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>TCP</strong></td>
                            <td>Reliable data transfer</td>
                        </tr>
                        <tr>
                            <td><strong>UDP</strong></td>
                            <td>Fast data transfer</td>
                        </tr>
                        <tr>
                            <td><strong>HTTP</strong></td>
                            <td>Web browsing</td>
                        </tr>
                        <tr>
                            <td><strong>HTTPS</strong></td>
                            <td>Secure web browsing</td>
                        </tr>
                        <tr>
                            <td><strong>FTP</strong></td>
                            <td>File transfer</td>
                        </tr>
                        <tr>
                            <td><strong>DNS</strong></td>
                            <td>Website name to IP translation</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Why Network Fundamentals Matter</h3>
                <p>Networking taught me:</p>
                <ul>
                    <li>How the internet actually works</li>
                    <li>Why connections fail</li>
                    <li>How data travels between devices</li>
                    <li>How servers communicate</li>
                </ul>

                <h3>Final Words</h3>
                <p><strong>Network fundamentals are the foundation of all IT careers.</strong></p>
                <p>Understanding networks makes learning cloud, security, development, and system administration much easier.</p>
            `
        },
        {
            id: 4,
            title: "Agnipath – The Inspiring Book by Dr. A. P. J. Abdul Kalam",
            subtitle: "Lessons That Changed My Way of Thinking",
            date: "November 5, 2025",
            category: "Book Review",
            excerpt: "Agnipath is one of the most inspiring books written by Dr. A. P. J. Abdul Kalam. This book is not just a collection of words — it is a roadmap for discipline, dedication, and self-belief. Reading this book deeply influenced my mindset and my approach towards learning.",
            content: `
                <h3>Introduction</h3>
                <p>Agnipath is one of the most inspiring books written by <strong>Dr. A. P. J. Abdul Kalam</strong>. This book is not just a collection of words — <strong>it is a roadmap for discipline, dedication, and self-belief.</strong></p>
                <p>Reading this book deeply influenced my mindset and my approach towards learning.</p>

                <h3>The Meaning of "Agnipath"</h3>
                <p>"Agnipath" means <strong>The Path of Fire</strong> — a path that requires courage, hard work, sacrifice, and strong determination.</p>
                <p>Dr. Kalam explains that success is never easy, but those who accept challenges and continue moving forward always grow.</p>

                <h3>Key Lessons From Agnipath</h3>
                
                <h4>1. Dream Big</h4>
                <p>Dr. Kalam always said:</p>
                <blockquote>"Dream is not that which you see while sleeping, it is something that does not let you sleep."</blockquote>
                <p>This teaches us to <strong>think beyond limits.</strong></p>

                <h4>2. Discipline Is Power</h4>
                <p>Success is built on daily discipline. <strong>Small consistent efforts bring long-term success.</strong></p>

                <h4>3. Hard Work Over Comfort</h4>
                <p>The book teaches us to choose growth over comfort and learning over excuses.</p>

                <h4>4. Self-Belief</h4>
                <p>Dr. Kalam reminds us that <strong>believing in yourself is the first step toward success.</strong></p>

                <h3>How This Book Changed Me</h3>
                <p>Agnipath changed my mindset in many ways:</p>
                <ul>
                    <li>Made me more disciplined</li>
                    <li>Increased my focus on learning</li>
                    <li>Improved my confidence</li>
                    <li>Inspired me to think big</li>
                </ul>

                <h3>Final Words</h3>
                <p><strong>Agnipath is not just a book — it is a life lesson.</strong></p>
                <p>It teaches that no matter where you start, your dedication can take you anywhere.</p>
                <p>If you want to build discipline, focus, and self-belief, <strong>this book is a must-read.</strong></p>
            `
        }
    ];

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

                <div className="blogs-grid">
                    {blogs.map((blog) => (
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
                }
                
                .blog-card {
                    background: rgba(30, 41, 59, 0.3);
                    border: 1px solid rgba(255,255,255,0.06);
                    padding: 28px;
                    border-radius: 16px;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                    height: 100%;
                }

                .blog-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(0, 243, 255, 0.2);
                    background: rgba(30, 41, 59, 0.4);
                    box-shadow: 0 16px 40px rgba(0, 243, 255, 0.12);
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
                    transition: all 0.3s ease;
                    margin-top: auto;
                }

                .read-more-btn:hover {
                    background: var(--neon-cyan);
                    color: #000;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(0, 243, 255, 0.3);
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
