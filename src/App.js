import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LanguageSelector from './components/LanguageSelector';
import Navbar from './components/Navbar';
import Opinions from './components/Opinions';
import Section from './components/Section';
import SectionTwo from './components/SectionTwo';
import { LanguageProvider, useLanguage } from './components/LanguageContext'; // Asegúrate de importar useLanguage
import { espanol1, ingles1, aleman1, frances1, italiano1 } from './constants';

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}


const MainContent = () => {
  const { language } = useLanguage(); 
  const languageData = getLanguageData(language);

  return (
    <div className="playfair-display w-full h-auto">
      <div className="relative w-full h-[110vh]">
        {/* Imagen de fondo con opacidad enviada al fondo absoluto */}
        <div className="absolute inset-0 z-[-1] bg-[url('./assets/banner.png')] bg-cover bg-center opacity-70"></div>

        {/* Contenido encima de la imagen */}
        <div className="relative w-screen h-auto md:px-28 md:pt-12 sm:px-4 sm:pt-4 overflow-hidden">
          <Navbar />
          <Hero />
        </div>

        <div className="relative w-screen h-[30rem] bg-gradient-to-b from-[rgba(36,39,100,0.01)] to-[rgba(16,16,52,1)] pt-2">
          <div className="w-screen h-24">
            <p className=" mb-[3%] xl:text-2xl text-xs max-lg:px-4 font-light text-white md:px-28 sm:px-4 " style={{ whiteSpace: 'pre-line' }}>
              {languageData.texto3}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 w-screen h-auto bg-[#101034] md:px-28 sm:px-4 md:py-6 sm:py-2">
        <Section />
        <Opinions />
        <SectionTwo />
      </div>
      <Footer />
      <LanguageSelector />
    </div>
  );
};



const getLanguageData = (language) => {
  switch (language.code) {
    case 'ES':
      return espanol1;
    case 'EN':
      return ingles1;
    case 'DE':
      return aleman1;
    case 'FR':
      return frances1;
    case 'IT':
      return italiano1;
    default:
      return espanol1; // Valor predeterminado
  }
};

export default App;
