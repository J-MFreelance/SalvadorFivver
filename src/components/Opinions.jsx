import Testimonial from "./Testimonial";
import Linkedin from "./Linkedin";
import { useLanguage } from './LanguageContext';
import {
  espanol3, ingles3, aleman3, frances3, italiano3, letzemburgesch3, portugues3
} from '../constants';
import { useEffect, useState } from 'react';

const Opinions = () => {
  const { language } = useLanguage();
  const [languageData, setLanguageData] = useState({});

  useEffect(() => {
    if (language.code === "CR") {
      setLanguageData(espanol3);
    } else if (language.code === "GB") {
      setLanguageData(ingles3);
    } else if (language.code === "DE") {
      setLanguageData(aleman3);
    } else if (language.code === "IT") {
      setLanguageData(italiano3);
    } else if (language.code === "FR") {
      setLanguageData(frances3);
    } else if (language.code === "LU") {
      setLanguageData(letzemburgesch3);
    } else if (language.code === "BR") {
      setLanguageData(portugues3);
    } else {
      setLanguageData(ingles3);
    }
  }, [language]);

  return (
    <div id="opinions" className="bg-[#101034] py-10 px-6 mt-10">
      <h2 className="text-3xl max-lg:text-xl font-bold text-white mb-10">
        {languageData.opinion}
      </h2>

      {/* Grid layout: testimonios + widget */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Columna izquierda: testimonios */}
        <div className="space-y-8">
          {languageData?.testimonios?.map((testimonio, index) => (
            <Testimonial
              key={index}
              autor={testimonio.autor}
              profesion={testimonio.profesion}
              text={testimonio.texto}
              image={testimonio.image}
            />
          ))}
        </div>

        {/* Columna derecha: LinkedIn Widget */}
        <div className="w-full">
          <Linkedin />
        </div>
      </div>
    </div>
  );
};

export default Opinions;
