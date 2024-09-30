import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Opinions from './components/Opinions';
import Section from './components/Section';
import SectionTwo from './components/SectionTwo';

function App() {
  return (
    <div className="w-full h-auto">
      <div className="w-screen h-auto bg-[#242764] md:px-28 md:pt-12 sm:px-4 sm:pt-4 overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <div className="w-screen h-24 bg-gradient-to-b from-[#242764] to-[#101034]">
        <p className='xl:text-2xl text-xs max-lg:px-4 font-light text-white md:px-28 sm:px-4'>
          Su carrera abarca una impresionante trayectoria en sostenibilidad, políticas públicas <br />
          y asesoramiento estratégico, tanto en el sector privado como en el público. Actualmente <br />
          disponible para servicios de consultoría.
        </p>
      </div>
      <div className="w-screen h-auto bg-[#101034] md:px-28 sm:px-4 md:py-6 sm:py-2">
        <Section />
        <Opinions />
        <SectionTwo />
      </div>
      <Footer />
    </div >
  );
}

export default App;
