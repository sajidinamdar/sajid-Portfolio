import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import HomePage from './pages/HomePage';

// ScrollToTop component to handle scroll on navigation (kept for refresh)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Animation triggering wrapper
function AnimationTrigger() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Delay to allow DOM update
    setTimeout(() => {
      const hiddenElements = document.querySelectorAll('.section, .skill-card, .project-card, .blog-card, .visual-skill-card');
      hiddenElements.forEach((el) => observer.observe(el));
    }, 300); // Increased delay slightly

    return () => observer.disconnect();
  }, [location]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Preloader />
        <ScrollToTop />
        <AnimationTrigger />
        <div className="app-container">
          <Navbar />
          <main className="content-area">
            <Routes>
              {/* Only one route for Single Page Application */}
              <Route path="/" element={<HomePage />} />
              {/* Reroute matching routes to home if user tries direct access */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
