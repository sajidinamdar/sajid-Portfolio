import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// Lazy load page components
const HomePage = lazy(() => import('./pages/HomePage'));
const About = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const BlogsPage = lazy(() => import('./pages/BlogsPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// ScrollToTop component - Only for real page changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Only scroll to top if not on a hashed/mapped sub-page
    if (pathname === '/' || pathname === '/home') {
      // window.scrollTo(0, 0); // HomePage handles initial scroll placement
    }
  }, [pathname]);

  return null;
}

// Animation Triggering logic moved to HomePage.jsx to support lazy-loading

function App() {
  return (
    <HelmetProvider>
      <Router>

        <ScrollToTop />
        <div className="app-container">
          <Navbar />
          <main className="content-area">
            <Suspense fallback={null}>
              <Routes>
                {/* All routes point to HomePage for a unified SPA experience */}
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<HomePage />} />
                <Route path="/projects" element={<HomePage />} />
                <Route path="/blogs" element={<HomePage />} />
                <Route path="/skills" element={<HomePage />} />
                <Route path="/certifications" element={<HomePage />} />
                <Route path="/contact" element={<HomePage />} />
                {/* Fallback to HomePage */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
