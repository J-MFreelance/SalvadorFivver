import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Opinions from './components/Opinions';
import Section from './components/Section';
import SectionTwo from './components/SectionTwo';

function App() {
  return (
    <div className="playfair-display w-full h-auto">
      <div className="w-full h-[110vh] bg-[url('./assets/banner.png')] bg-cover bg-center relative z-0">
        <div className="w-screen h-auto md:px-28 md:pt-12 sm:px-4 sm:pt-4 overflow-hidden">
          <Navbar />
          <Hero />
        </div>

        <div className='w-screen h-[30rem] bg-gradient-to-b from-[rgba(36,39,100,0.01)] to-[rgba(16,16,52,1)] pt-2'>
          <div className="w-screen h-24">
            <p className='xl:text-2xl text-xs max-lg:px-4 font-light text-white md:px-28 sm:px-4'>
              Su carrera abarca una impresionante trayectoria en sostenibilidad, políticas públicas <br />
              y asesoramiento estratégico, tanto en el sector privado como en el público. Actualmente <br />
              disponible para servicios de consultoría.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-24 w-screen h-auto bg-[#101034] md:px-28 sm:px-4 md:py-6 sm:py-2 z-20">
        <Section />
        <Opinions />
        <SectionTwo />
      </div>
      <Footer />
    </div >
  );
}

export default App;
