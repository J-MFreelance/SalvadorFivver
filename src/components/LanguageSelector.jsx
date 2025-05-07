import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import Flag from 'react-world-flags'; // Importamos react-world-flags

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const languages = [
    { code: 'GB', label: 'ENGLISH' },  // Usamos el código del país (GB para inglés)
    { code: 'DE', label: 'DEUTSCH' },  // Código para alemán
    { code: 'FR', label: 'FRANÇAIS' },  // Código para francés
    { code: 'IT', label: 'ITALIANO' },  // Código para italiano
    { code: 'CR', label: 'ESPAÑOL' },  // Código para español
    { code: 'LU', label: 'LËTZEBUERGESCH' },  // Luxemburgués (idioma original)
    { code: 'BR', label: 'PORTUGUÊS' }  // Portugués
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', JSON.stringify(selectedLanguage));
    setIsMenuOpen(false); // Cierra el menú al seleccionar un idioma
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setLanguage(JSON.parse(savedLanguage));
    }
  }, [setLanguage]);

  return (
    <div className="fixed bottom-0 right-8 inline-block text-left z-50">
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex justify-start w-full shadow-sm p-3 rounded-t-md bg-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-200"
        >
          <Flag code={language.code} style={{ width: 20, height: 20, marginRight: 10 }} /> {language.label}
        </button>
        {isMenuOpen && (
          <div className="relative w-full bg-white shadow-lg z-10">
            <div>
              {languages.filter(lang => lang.code !== language.code).map(lang => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang)}
                  className="flex justify-start w-full p-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  <Flag code={lang.code} style={{ width: 20, height: 20, marginRight: 10 }} /> {lang.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;