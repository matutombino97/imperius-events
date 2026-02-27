import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Landing page components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import Availability from './components/Availability';
import QuoteForm from './components/QuoteForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Sub-pages
import Bodas from './pages/Bodas';
import Corporativos from './pages/Corporativos';
import Fiestas from './pages/Fiestas';
import Galas from './pages/Galas';
import SobreNosotros from './pages/SobreNosotros';
import Equipo from './pages/Equipo';
import Testimonios from './pages/Testimonios';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contacto from './pages/Contacto';
import FAQPage from './pages/FAQPage';
import PoliticaCancelacion from './pages/PoliticaCancelacion';
import Terminos from './pages/Terminos';

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Gallery />
      <AboutUs />
      <Availability />
      <QuoteForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Service pages */}
        <Route path="/servicios/bodas" element={<Bodas />} />
        <Route path="/servicios/corporativos" element={<Corporativos />} />
        <Route path="/servicios/fiestas" element={<Fiestas />} />
        <Route path="/servicios/galas" element={<Galas />} />

        {/* Company pages */}
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Support pages */}
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/politica-cancelacion" element={<PoliticaCancelacion />} />
        <Route path="/terminos" element={<Terminos />} />
      </Routes>
    </Router>
  );
}
