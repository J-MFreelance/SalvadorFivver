import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LanguageSelector from './components/LanguageSelector';
import Navbar from './components/Navbar';
import Opinions from './components/Opinions';
import Blog from './components/Blog';
import Section from './components/Section';
import SectionTwo from './components/SectionTwo';
import { LanguageProvider } from './components/LanguageContext';
import Services from './components/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import Impressum from './components/Impressum';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/:title" element={<BlogPost />} />

        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

const MainContent = () => {

  return (
    <div className="playfair-display w-full h-auto">
      <div className="relative w-full h-[110vh]">
        <div className="absolute inset-0 z-[-1] bg-[url('./assets/banner.png')] bg-cover bg-center opacity-70"></div>

        <div className="relative w-screen h-auto md:px-28 md:pt-12 sm:px-4 sm:pt-4 overflow-hidden">
          <Navbar />
          <Hero />
        </div>

        <div className="relative w-screen h-[34rem] bg-gradient-to-b from-[rgba(36,39,100,0.01)] to-[rgba(16,16,52,1)] pt-2 ">
          <div className="w-screen h-24">

          </div>
        </div>
      </div>

      <div className="mt-[3%] w-screen h-auto bg-[#101034] md:px-28 md:py-6 ">
        <Section />
        <div id='services'>
          <Services />
        </div>
        <Opinions />
        <div id='contact'>
          <SectionTwo />
        </div>
      </div>
      <LanguageSelector />
    </div>
  );
};


export default App;