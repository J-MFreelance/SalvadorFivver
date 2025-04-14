import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { espanol1, ingles1, aleman1, frances1, italiano1, letzemburgesch1, portugues1 } from '../constants';
import Button from './Button';

const Hero = () => {
  const { language } = useLanguage();
  const [languageData, setLanguageData] = useState({});

  useEffect(() => {
    if (language.code === "ES") {
      setLanguageData(espanol1);
    } else if (language.code === "GB") {
      setLanguageData(ingles1);
    } else if (language.code === "DE") {
      setLanguageData(aleman1);
    } else if (language.code === "IT") {
      setLanguageData(italiano1);
    } else if (language.code === "FR") {
      setLanguageData(frances1);
    } else if (language.code === "BR") {
      setLanguageData(portugues1);
    } else if (language.code === "LU") {
      setLanguageData(letzemburgesch1);
    }
    else {
      setLanguageData(espanol1); // Valor por defecto
    }
  }, [language]);

  return (
    <div className="relative w-full min-h-screen lg:h-screen">

      {/* Contenido del Hero */}
      <div className="relative z-10 flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 text-white py-12 lg:py-0 h-full">
        <div className="flex flex-col gap-4 justify-center">
          {/* Título */}
          <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold leading-tight" style={{ whiteSpace: 'pre-line' }}>
            {languageData.texto1}
          </p>

          {/* Descripción */}
          <p className="font-light text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed max-sm:text-xs" style={{ whiteSpace: 'pre-line' }}>
            {languageData.texto2}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
            <Button
              nombre={languageData.texto3}
              color="bg-blue-800"
              link="https://zeeg.me/salvatorecoppolafinegan/15min"
              className="w-full sm:w-auto text-sm"
            />
            <a href="#about" className='bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg text-sm'>
              {languageData.texto4}
            </a>
          </div>
        </div>
      </div>
    </div>


  );

};

export default Hero;