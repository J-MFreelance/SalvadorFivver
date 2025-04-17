import { useLanguage } from './LanguageContext';
import { espanol, english, deutsch, french, italiano, luxembourgish, portugues } from '../constants/subpages/impressum';
import { useEffect, useState } from 'react';

const Impressum = () => {
  const { language } = useLanguage();
  const [languageData, setLanguageData] = useState({});

  useEffect(() => {
    if (language.code === "ES") {
      setLanguageData(espanol);
    } else if (language.code === "GB") {
      setLanguageData(english);
    } else if (language.code === "DE") {
      setLanguageData(deutsch);
    } else if (language.code === "IT") {
      setLanguageData(italiano);
    } else if (language.code === "FR") {
      setLanguageData(french);
    } else if (language.code === "LU") {
      setLanguageData(luxembourgish);
    } else if (language.code === "BR") {
      setLanguageData(portugues);
    } else {
      setLanguageData(espanol); // Default to Spanish
    }
  }, [language]);

  return (
    <section className="bg-[#101034] py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">{languageData.title || "Impressum"}</h2>
        
        {/* Información de la empresa */}
        <div className="text-white space-y-4 mb-8">
          {languageData.companyInfo?.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed"  style={{whiteSpace: 'pre-line'}}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impressum;
