import { useLanguage } from './LanguageContext';
import { espanol, english, deutsch, french, italiano, luxembourgish, portugues } from '../constants/subpages/impressum';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link
import LanguageSelector from './LanguageSelector';

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
        <h2 className="text-3xl justify-center flex font-bold text-white mb-6">{languageData.title || "Impressum"}</h2>
        <div className="w-full border-t border-gray-400 my-8"></div>

        {/* Información de la empresa */}
        <div className="text-white space-y-4 mb-8">
          {languageData.companyInfo?.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed"  style={{whiteSpace: 'pre-line'}}>{paragraph}</p>
          ))}
        </div>
        <div className="w-full border-t border-gray-400 my-8"></div>

        {/* Botón de regreso a la página principal */}
        <div className="flex justify-center">
          <Link to="/" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          ←
          </Link>
        </div>
      </div>
      <LanguageSelector />
    </section>
  );
};

export default Impressum;
