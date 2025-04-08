import React from 'react';
import Button from './Button';
import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { espanol2, ingles2, aleman2, frances2, italiano2, portugues2, letzemburgesch2 } from '../constants';
const Section = () => {
    const { language } = useLanguage();
    const [languageData, setLanguageData] = useState({});
    const logos = [
        '/assets/logo1.png', '/assets/logo1.png', '/assets/logo1.png',
        '/assets/logo1.png', '/assets/logo1.png', '/assets/logo1.png',
        '/assets/logo1.png', '/assets/logo1.png', '/assets/logo1.png',
        '/assets/logo1.png', '/assets/logo1.png', '/assets/logo1.png',
        '/assets/logo1.png',
    ];
    useEffect(() => {
        if (language.code === "ES") {
            setLanguageData(espanol2);
        } else if (language.code === "GB") {
            setLanguageData(ingles2);
        } else if (language.code === "DE") {
            setLanguageData(aleman2);
        } else if (language.code === "IT") {
            setLanguageData(italiano2);
        } else if (language.code === "FR") {
            setLanguageData(frances2);
        } else if (language.code === "BR") {
            setLanguageData(portugues2);
        } else if (language.code === "LU") {
            setLanguageData(letzemburgesch2);
        }
        else {
            setLanguageData(espanol2);
        }
    }, [language]);

    return (
        <div id='about' className='flex flex-col margin-t text-white margin-bottom mt-[-12rem] max-lg:mt-[-13rem] relative '>
            <div className="relative bg-[url('./assets/banner2.png')] bg-center bg-cover w-full h-[40rem] max-lg:h-[25rem] xl:h-[34rem] px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 xl:pt-7">
                {/* Capa oscura */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                {/* Contenedor de texto */}
                <div className="relative z-10 flex flex-col justify-center items-start text-white max-w-5xl mx-auto px-4">
                    {/* Título */}
                    <p className="font-semibold text-lg sm:text-xl md:text-2xl xl:text-3xl pb-4">
                        {languageData.texto1}
                    </p>

                    {/* Párrafo con salto de línea */}
                    <p
                        className="font-light text-xs sm:text-sm md:text-base xl:text-lg mb-4"
                        style={{ whiteSpace: 'pre-line' }}
                        dangerouslySetInnerHTML={{ __html: languageData.texto11 }}
                    />

                    {/* Botón */}
                    <Button
                        nombre={languageData.texto2}
                        color="bg-blue-800"
                        className="w-full sm:w-auto mt-4"
                    />
                </div>
            </div>


            <div className="w-full h-[38rem] flex max-lg:flex-col max-t max-lg:h-full ">
                <div className="bg-[url('./assets/right-side.png')] max-lg:bg-cover max-lg:h-[20rem] max-lg:w-full bg-cover object-contain w-[55%] px-3 h-full max-lg:px-4 max-lg:p-6 p-text">
                    <p className='relative font-semibold xl:text-2xl text-base pb-2 xl:pt-44 pt-36'>
                        {languageData.texto3}
                    </p>
                    <span className=' relative pb-4 max-lg:text-xs'>
                        {languageData.texto4}<br />
                    </span>
                    {/* <Button nombre='Ver contenido' color="bg-blue-800" /> */}
                </div>
                <div className='flex flex-col w-[50%] max-lg:w-full max-lg:h-2/5'>
                    <div className='bg-slate-500 flex-1 flex flex-col items-center justify-center p-8'>
                        <p className='relative text-white text-justify font-light text-base max-lg:text-xs mb-6' style={{ whiteSpace: 'pre-line', lineHeight: '1.5' }}>
                            {languageData.texto5}
                        </p>

                        {/* Contenedor de los botones */}
                        <div className='flex flex-wrap justify-center gap-4'>
                            <Button
                                nombre={languageData.btn1}
                                color="bg-blue-800"
                                className="sm:w-auto w-full"
                            />
                            <Button
                                nombre={languageData.btn2}
                                color="bg-blue-800"
                                className="sm:w-auto w-full"
                            />
                            <Button
                                nombre={languageData.btn3}
                                color="bg-blue-800"
                                className="sm:w-auto w-full"
                            />
                        </div>
                    </div>

                    <div className='h-1/3 max-lg:!h-40 bg-white flex flex-col justify-center py-2 px-4' id='ecocitizen'>
                        {/* Títulos */}
                        <div className="text-center mb-2">
                            <h3 className="text-lg font-bold text-gray-800">{languageData.texto6}</h3>
                            <p className="text-xs text-gray-600">{languageData.texto7}</p>
                        </div>

                        {/* Contenedor de logos */}
                        <div className="flex flex-wrap justify-center gap-4 py-2 w-full">
                            {/* Mapeo de logos */}
                            {logos.map((logo, index) => (
                                <a
                                    key={index}
                                    href="https://www.ecocitizen.lu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 w-16 h-8 flex items-center justify-center"
                                >
                                    <img
                                        src={logo}
                                        alt={`Logo ${index + 1}`}
                                        className="h-full w-auto object-contain hover:opacity-80 transition-opacity"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <div className="relative bg-gray-700 bg-center bg-cover w-full h-[40rem] max-lg:h-[25rem] xl:h-[24rem] px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 xl:pt-7">
                {/* Capa oscura */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                {/* Contenedor de texto */}
                <div className="relative z-10 flex flex-col justify-center items-start text-white max-w-5xl mx-auto px-4">
                    {/* Título */}
                    <p className="font-semibold text-lg sm:text-xl md:text-2xl xl:text-3xl pb-4">
                        {languageData.texto8}
                    </p>

                    {/* Párrafo con salto de línea */}
                    <p
                        className="font-light text-xs sm:text-sm md:text-base xl:text-lg mb-4"
                        style={{ whiteSpace: 'pre-line' }}
                        dangerouslySetInnerHTML={{ __html: languageData.texto9 }}
                    />


                </div>
            </div>
        </div>
    );
}

export default Section;