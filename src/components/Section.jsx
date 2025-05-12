import React from 'react';
import Button from './Button';
import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { espanol2, ingles2, aleman2, frances2, italiano2, portugues2, letzemburgesch2 } from '../constants';

const Section = () => {
    const { language } = useLanguage();
    const [showMore, setShowMore] = useState(false);
    const [languageData, setLanguageData] = useState({});

    const logos = [
        { src: '/assets/logo2.webp', link: 'https://www.akamai.com/' },
        { src: '/assets/logo3.png', link: 'https://www.alstom.com/' },
        { src: '/assets/logo4.webp', link: 'https://amagno.co.uk/' },
        { src: '/assets/logo6.jpg', link: 'https://www.bancocuscatlan.com/' },
        { src: '/assets/logo7.png', link: 'https://www.bncr.fi.cr/' },
        { src: '/assets/logo8.png', link: 'https://www.dentons.com/' },
        { src: '/assets/logo91.png', link: 'https://dittothailand.com/en/' },
        { src: '/assets/logo1.1.png', link: 'https://ecocitizen.lu/' },
        { src: '/assets/logo11.png', link: 'https://tcs-technology.com/' },
        { src: '/assets/logo12.png', link: 'https://www.undp.org/' },
        { src: '/assets/logo13.1.png', link: 'https://visuddhi-consultants.com/' },
    ];

    const logosB = [
        { src: '/assets/logo-letz.png', link: 'https://letzregenerate.com' },
        { src: '/assets/logo-cr.png', link: 'https://ticoslux.com' },
        { src: '/assets/laudato-si.avif', link: 'https://laudatosi.lu' },
        { src: '/assets/logonss.png', link: 'https://nss.org/' }
    ];

    const logosC = [
        { src: '/assets/logo5.png', link: 'https://www.asamblea.go.cr/SitePages/Inicio.aspx' },
        { src: '/assets/sinac.png', link: 'https://www.sinac.go.cr/ES/Paginas/default.aspx' },
        { src: '/assets/ucr.png', link: 'https://www.ucr.ac.cr/' },
        { src: '/assets/una.png', link: 'http://www.una.ac.cr/' },
        { src: '/assets/amoxtli.png', link: 'https://www.facebook.com/amoxtlifoundation/' },
        { src: '/assets/logo10.png', link: 'https://minae.go.cr/' },
    ];

    useEffect(() => {
        if (language.code === "CR") {
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
            setLanguageData(ingles2);
        }
    }, [language]);

    return (
        <div id='about' className='flex flex-col text-white relative mt-[-12rem] md:mt-[-12rem] sm:mt-[-13rem]'>
            {/* Primera sección - Banner */}
            <div className="relative bg-[url('./assets/banner2.png')] bg-center bg-cover w-full min-h-[34rem] px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 xl:pt-7">
                {/* Capa oscura */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                {/* Contenedor de texto */}
                <div className="relative z-10 flex flex-col justify-center items-start text-white max-w-5xl mx-auto px-4 py-8">
                    {/* Título */}
                    <p className="font-semibold text-lg sm:text-xl md:text-2xl xl:text-3xl pb-4">
                        {languageData.texto1}
                    </p>

                    {/* Párrafo largo con toggle de "ver más" */}
                    <div
                        className={`text-justify font-light text-xs sm:text-sm md:text-base xl:text-lg mb-4
                         leading-relaxed transition-all duration-300 ease-in-out
                         ${!showMore ? 'line-clamp-6 sm:line-clamp-none' : ''}`}
                        style={{ whiteSpace: 'pre-line' }}
                        dangerouslySetInnerHTML={{ __html: languageData.texto11 }}
                    />

                    {/* Botón solo en móvil */}
                    <button
                        className="text-blue-300 text-xs underline mt-1 mb-2 block sm:hidden"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? '↑' : '↓'}
                    </button>
                </div>
            </div>

            {/* Segunda sección - Logos principales */}
            <div className='flex flex-row justify-center items-center w-full h-auto'>
                <div className='h-auto bg-white flex flex-col justify-center py-6 px-4 sm:px-6 w-full'>
                    {/* Títulos */}
                    <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">{languageData.texto6}</h3>
                        <p className="text-xs text-gray-600 sm:text-sm mt-2">{languageData.texto7}</p>
                    </div>

                    {/* Contenedor de logos */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 py-4 w-full">
                        {logos.map((logo, index) => (
                            <a
                                key={index}
                                href={logo.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 w-20 h-10 sm:w-24 sm:h-12 md:w-32 md:h-16 flex items-center justify-center"
                            >
                                <img
                                    src={logo.src}
                                    alt={`Logo ${index + 1}`}
                                    className="h-full w-auto object-contain hover:opacity-80 transition-opacity"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tercera sección - Dos columnas */}
            <div className="w-full flex flex-col lg:flex-row">
                {/* Columna izquierda */}
                <div className="bg-[url('./assets/right-side.png')] bg-cover bg-center w-full lg:w-[55%] min-h-[22rem] lg:min-h-[38rem] px-4 sm:px-6 py-8 text-white relative">
                    <p className="font-semibold text-base sm:text-lg md:text-xl xl:text-2xl pb-2 pt-4 md:pt-12 lg:pt-24 xl:pt-44">
                        {languageData.texto3}
                    </p>

                    <span className="block leading-relaxed pb-4 text-xs sm:text-sm md:text-base text-justify">
                        {languageData.texto4}
                    </span>
                </div>

                {/* Columna derecha */}
                <div className='flex flex-col w-full lg:w-[45%]'>
                    {/* Sección de texto y logos */}
                    <div className='bg-slate-500 flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8'>
                        <p
                            className='text-white text-justify font-light text-xs sm:text-sm md:text-base mb-6 leading-relaxed'
                        >
                            {languageData.texto5}
                        </p>

                        {/* Contenedor de los logos */}
                        <div className='flex flex-wrap justify-center gap-2 md:gap-2 w-full'>
                            {logosB.map((logo, index) => (
                                <a
                                    key={index}
                                    href={logo.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center m-2"
                                >
                                    <img
                                        src={logo.src}
                                        alt={`Logo ${index + 1}`}
                                        className="h-[4rem] w-[4rem] sm:h-[5rem] sm:w-[5rem] object-contain hover:scale-110 transition-transform bg-white p-2 rounded-md"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Cuarta sección - Fondo gris */}
            <div className="relative bg-gray-700 bg-center bg-cover w-full py-8 md:py-12 px-4 sm:px-8 lg:px-16">
                {/* Capa oscura */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                {/* Contenedor de texto centrado vertical y horizontalmente */}
                <div className="relative z-10 flex flex-col justify-center items-center text-white max-w-5xl mx-auto text-center py-6 md:py-8">
                    {/* Título */}
                    <p className="font-semibold text-lg sm:text-xl md:text-2xl xl:text-3xl pb-4">
                        {languageData.texto8}
                    </p>

                    {/* Párrafo con salto de línea */}
                    <p
                        className="font-light text-xs sm:text-sm md:text-base xl:text-lg mb-6 text-justify sm:text-center"
                        dangerouslySetInnerHTML={{ __html: languageData.texto9 }}
                    />

                    {/* Logos centrados */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-2 lg:gap-4 w-full mt-3">
                        {logosC.map((logo, index) => (
                            <a
                                key={index}
                                href={logo.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center m-2"
                            >
                                <img
                                    src={logo.src}
                                    alt={`Logo ${index + 1}`}
                                    className="h-[4rem] w-[4rem] sm:h-[5rem] sm:w-[5rem] object-contain hover:scale-110 transition-transform bg-white p-2 rounded-md"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;