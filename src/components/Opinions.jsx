import Testimonial from "./Testimonial";
import { useLanguage } from './LanguageContext';
import { espanol3, ingles3, aleman3, frances3, italiano3 } from '../constants';
import { useEffect, useState } from 'react';


const Opinions = () => {
  const { language } = useLanguage();
  const [languageData, setLanguageData] = useState({});

  useEffect(() => {
    if (language.code === "ES") {
      setLanguageData(espanol3);
    } else if (language.code === "EN") {
      setLanguageData(ingles3);
    } else if (language.code === "DE") {
      setLanguageData(aleman3);
    } else if (language.code === "IT") {
      setLanguageData(italiano3);
    } else if (language.code === "FR") {
      setLanguageData(frances3);
    } else {
      setLanguageData(espanol3);
    }
  }, [language]);

  return (
    <div id='' className="bg-[#101034] py-10 mt-10">
      <h2 className="text-3xl max-lg:px-4 font-bold text-white mb-8">
        {languageData.opinion}
      </h2>
      <div className="space-y-8">
        {languageData?.testimonios?.map((testimonio, index) => (
          <Testimonial
            key={index}
            autor={testimonio.autor}
            text={testimonio.texto}
          />
        ))}
      </div>
    </div>
  );
};

export default Opinions