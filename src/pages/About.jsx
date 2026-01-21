export default function About() {
  return (
    <div className="about-page-container">
      <div className="container">
        <h1 className="about-title">About Me</h1>
        <div className="about-card">
          <p className="about-text">
            I am a BCA student and an aspiring Cybersecurity professional with a strong foundation in Python development. My journey is driven by a fascination with how systems work—and how to protect them.
          </p>
          <p className="about-text">
            I spend my time at the intersection of development and security, whether I'm building scalable backends with FastAPI or navigating complex CTF challenges on TryHackMe. With a deep understanding of networking fundamentals like TCP/IP, NAT, and Subnetting, I aim to build secure, efficient software that stands up to modern threats.
          </p>
        </div>
      </div>

      <style>{`
        .about-page-container {
          min-height: 80vh;
          padding: 100px 20px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .about-title {
          font-size: 3rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, var(--neon-cyan), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-card {
          background: rgba(30, 41, 59, 0.3);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px;
          max-width: 800px;
        }

        .about-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .about-title {
            font-size: 2.2rem;
          }
          .about-card {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}
