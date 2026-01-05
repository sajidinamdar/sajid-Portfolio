export default function About() {
    return (
        <div className="about-page-container">
            <div className="container">
                <h1 className="about-title">About Me</h1>
                <div className="about-card">
                    <p className="about-text">
                        Sajid Inamdar is a cybersecurity student and Python developer from Sangamner, Maharashtra, India.
                        This is his official portfolio website.
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
