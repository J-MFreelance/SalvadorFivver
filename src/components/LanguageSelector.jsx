import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const languages = [
    { code: 'EN', label: 'ENGLISH', flag: '' },
    { code: 'DE', label: 'DEUTSCH', flag: '' },
    { code: 'FR', label: 'FRANÇAIS', flag: '' },
    { code: 'IT', label: 'ITALIANO', flag: '' },
    { code: 'ES', label: 'ESPAÑOL', flag: '' }
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
    <div className="fixed bottom-0 right-8 inline-block text-left">
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex justify-center w-full shadow-sm p-3 rounded-t-md bg-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-200"
        >
          {language.flag} {language.label}
        </button>
        {isMenuOpen && (
          <div className="relative w-full bg-white shadow-lg z-10">
            <div>
              {languages.filter(lang => lang.code !== language.code).map(lang => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang)}
                  className="flex justify-between w-full p-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  {lang.flag} {lang.label}
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
