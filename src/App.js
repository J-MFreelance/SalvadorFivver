import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  return (
    <div className="w-full h-auto">
      <div className="w-screen h-auto bg-slate-700 md:px-28 md:pt-12 sm:px-4 sm:pt-4 overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <div className="w-screen h-24 bg-gradient-to-b from-slate-700 to-slate-900">
        <p className='text-2xl font-light text-white md:px-28 sm:px-4'>
          Su carrera abarca una impresionante trayectoria en sostenibilidad, políticas públicas <br />
          y asesoramiento estratégico, tanto en el sector privado como en el público. Actualmente <br />
          disponible para servicios de consultoría.
        </p>
      </div>
      <div className="w-screen h-auto bg-slate-900 md:px-28 sm:px-4 md:py-6 sm:py-2">
        <Section />
      </div>
    </div >
  );
}

export default App;
