import React from 'react';
import Button from './Button';
import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { espanol2, ingles2, aleman2, frances2, italiano2, } from '../constants';
const Section = () => {
    const { language } = useLanguage();
    const [languageData, setLanguageData] = useState({});

    useEffect(() => {
        if (language.code === "ES") {
            setLanguageData(espanol2);
        } else if (language.code === "EN") {
            setLanguageData(ingles2);
        } else if (language.code === "DE") {
            setLanguageData(aleman2);
        } else if (language.code === "IT") {
            setLanguageData(italiano2);
        } else if (language.code === "FR") {
            setLanguageData(frances2);
        } else {
            setLanguageData(espanol2);
        }
    }, [language]);

    return (
        <div id='about' className='flex flex-col text-white mt-[-12rem] relative'>
            <div className="bg-[url('./assets/banner2.png')] bg-center bg-cover w-full h-[34rem] max-lg:h-[10rem] xl:px-28 xl:pt-28 max-lg:pt-4 max-lg:px-4">
                <p className='font-semibold xl:text-2xl text-base pb-4'>
                    {languageData.texto1}
                </p>
                {/* <Button nombre='Ver contenido' color="bg-blue-800" /> */}
            </div>
            <div className="bg-[url('./assets/right-side.png')] max-lg:bg-contain w-full h-[38rem] flex max-lg:flex-col max-lg:h-4/5 xl:pl-28">
                <div className='w-full h-full -ml-[1%] max-lg:px-4 max-lg:p-6'>
                    <p className='font-semibold xl:text-2xl text-base pb-2 xl:pt-44 pt-36'>
                        {languageData.texto3}
                    </p>
                    <span className='pb-4 max-lg:text-xs'>
                        {languageData.texto4}<br />
                    </span>
                    {/* <Button nombre='Ver contenido' color="bg-blue-800" /> */}
                </div>
                <div className='flex flex-col w-[96%] max-lg:w-full max-lg:h-2/5'>
                    <div className='bg-slate-500  flex-1 flex items-center justify-center p-8'>
                        <p className='text-white text-justify  font-light text-base max-lg:text-xs' style={{ whiteSpace: 'pre-line', lineHeight: '1' }}>
                            {languageData.texto5}
                        </p>
                    </div>
                    <div className='h-1/3 max-lg:!h-40 bg-white flex justify-center' id='ecocitizen'>
                        <a target='_blank' href="https://www.ecocitizen.lu" className='flex justify-center'>
                            <img src='/assets/logo1.png' alt='logo' className='h-full fit' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;