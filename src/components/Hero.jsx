import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext'; 
import { espanol1, ingles1, aleman1, frances1, italiano1 } from '../constants'; 

const Hero = () => {
    const { language } = useLanguage(); 
    const [languageData, setLanguageData] = useState({}); 

    useEffect(() => {
        if (language.code === "ES") {
            setLanguageData(espanol1);
        } else if (language.code === "EN") {
            setLanguageData(ingles1);
        } else if (language.code === "DE") {
            setLanguageData(aleman1);
        } else if (language.code === "IT") {
            setLanguageData(italiano1);
        } else if (language.code === "FR") {
            setLanguageData(frances1);
        } else {
            setLanguageData(espanol1); // Valor por defecto
        }
    }, [language]);

    return (
        <div className='flex flex-col gap-4 text-white pt-[14rem] max-lg:px-4'>
            <p className='xl:text-3xl text-lg font-bold' style={{ whiteSpace: 'pre-line' }}>
            {languageData.texto1} {/* Comprometido por un mundo mejor. */}
            </p>
            <p className='font-light max-lg:text-xs mb-4'style={{ whiteSpace: 'pre-line' }}>
                {languageData.texto2}{/* Salvatore Coppola-Finegan es un autor... */}
            </p>
        </div>
    );
};

export default Hero;
