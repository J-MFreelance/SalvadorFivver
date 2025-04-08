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
        <div className="flex flex-col gap-4 text-white pt-[14rem] px-4 sm:px-6 md:px-8 lg:px-16">
            <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold" style={{ whiteSpace: 'pre-line' }}>
                {languageData.texto1} {/* Comprometido por un mundo mejor. */}
            </p>
            <p className="font-light text-sm sm:text-base md:text-lg xl:text-xl mb-4" style={{ whiteSpace: 'pre-line' }}>
                {languageData.texto2}
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
                <Button
                    nombre={languageData.texto3}
                    color="bg-blue-800"
                    link="https://letzregenerate.com/home-deutsch/"
                    className="w-full sm:w-auto"
                />
                <Button
                    nombre={languageData.texto4}
                    color="bg-blue-600"
                    link="https://letzregenerate.com/home-deutsch/"
                    className="w-full sm:w-auto"
                />
            </div>
        </div>
    );

};

export default Hero;