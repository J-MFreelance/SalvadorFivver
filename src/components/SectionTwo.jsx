import React from 'react';
import Button from './Button';
import persona from '../assets/persona.png';
import libro from '../assets/libro.png';
import x from '../assets/x.png';
import linkendin from '../assets/linkendin.png';
import regate from '../assets/regate.png';
import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { espanol4, ingles4, aleman4, frances4, italiano4, portugues4, letzemburgesch4 } from '../constants';

const SectionTwo = () => {

    const { language } = useLanguage();
    const [languageData, setLanguageData] = useState({});
    const [openForm, setOpenForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        if (language.code === "ES") {
            setLanguageData(espanol4);
        } else if (language.code === "GB") {
            setLanguageData(ingles4);
        } else if (language.code === "DE") {
            setLanguageData(aleman4);
        } else if (language.code === "IT") {
            setLanguageData(italiano4);
        } else if (language.code === "FR") {
            setLanguageData(frances4);
        } else if (language.code === "LU") {
            setLanguageData(letzemburgesch4);
        } else if (language.code === "BR") {
            setLanguageData(portugues4);
        } else {
            setLanguageData(espanol4);
        }
    }, [language]);

    return (
        <section id='contact'>
            <div className="flex max-lg:flex-col justify-between bg-[#101034] p-8 text-white">
                {/* Left Section */}
                <div className="xl:w-1/2 max-lg:pb-6">
                    {/* Imagen */}
                    <div className="flex">
                        <div className="pr-8">
                            <a href="https://letzregenerate.com/home-deutsch/" target="_blank">
                                <img
                                    src={libro}
                                    alt="Book cover"
                                    className="w-40"
                                />
                            </a>
                        </div>
                        {/* Contenedor del texto, botón y publicación */}
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold max-lg:text-xl">¡Lëtz reGenerate!</h2>
                            <p className='max-lg:text-sm pb-4'>{languageData.texto1r}</p>
                            <Button nombre={languageData.button} color="bg-blue-800" link="https://letzregenerate.com/home-deutsch/" />

                        </div>

                    </div>
                    {/* Última publicación */}
                    {/* <div className="ml-[0rem] pt-6">
                        <p className="italic max-lg:text-sm">{languageData.texto2r}</p>
                    </div>*/}



                </div>


                {/* Right Section */}
                <div className="xl:w-1/2 flex flex-col">
                    <div className='bg-[#1B1E51] h-64 rounded-tl-[3.5rem] px-14 py-12 max-lg:py-14 xl:w-screen max-lg:h-80'>
                        <div className='flex'>
                            <div>
                                {/*}  <ol className="space-y-2 mb-6 max-lg:text-xs pl-2 list-disc">
                                    <li>{languageData.texto1l}</li>
                                    <li>{languageData.texto2l}</li>
                                    <li>{languageData.texto3l}</li>
                                    <li>{languageData.texto4l}</li>
                                    <li>{languageData.texto5l}</li>
                                    <li>{languageData.texto6l}</li>
                                </ol> */}
                            </div>
                            <div className='flex justify-around max-lg:flex-col max-lg:pl-3'>
                                <div>
                                    <img
                                        src={persona}
                                        alt="Person"
                                        className="w-auto h-72 max-lg:my-[-3rem] max-lg:w-56 max-lg:h-40 object-contain my-[-5rem]"
                                    />
                                </div>
                                <div className='flex flex-col justify-end items-end'>
                                    <div className='flex space-x-2 pt-8'>
                                        <a href='https://x.com/meddisstovtiks/highlights' target="_blank">
                                            <img src={x} alt="x" className='border-[1px] border-white rounded-full w-8 h-8 max-lg:h-6 max-lg:w-6' />
                                        </a>
                                        <a href=''>
                                            <img src={regate} alt="regate" className='border-[1px] border-white rounded-full w-8 h-8 max-lg:h-6 max-lg:w-6' />
                                        </a>
                                        <a href='https://www.linkedin.com/in/salvatorecoppolaf/' target="_blank">
                                            <img src={linkendin} alt="linkendin" className='border-[1px] border-white rounded-full w-8 h-8 max-lg:h-6 max-lg:w-6' />
                                        </a>
                                    </div>
                                    <a href="" className='text-3xl font-bold max-lg:text-xl'>scf.lu</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-between pt-4'>
                        <p className="font-bold xl:text-2xl text-base">
                            {languageData.texto7l} <a href="https://wa.me/message/FTF5MDA6O73YJ1" target='_blank' className="transition-colors hover:opacity-50 underline font-normal">{languageData.texto8l}</a>
                        </p>
                        <button onClick={() => setOpenForm(true)}><Button nombre={languageData.btn2} color="bg-blue-800" /></button>
                    </div>
                </div>
            </div>
            {openForm && (
                <div className="fixed inset-0 flex items-center justify-center z-50 w-full bg-[#101034]/50">
                    <div className="bg-[#5e5ee0] p-6 rounded-lg md:w-3/12 w-4/5">
                        <span className="relative left-[95%] bottom-3 text-white text-2xl cursor-pointer" onClick={() => setOpenForm(false)}>X</span>
                        <div className="flex flex-col gap-5 text-black">
                            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={(e) => handleFormChange(e)} className="p-2 rounded-md" />
                            <input type="text" name="email" placeholder="Email" value={formData.email} onChange={(e) => handleFormChange(e)} className="p-2 rounded-md" />
                            <input type="text" name="message" placeholder="Message" value={formData.message} onChange={(e) => handleFormChange(e)} className="p-2 rounded-md" />
                            <button className="bg-[#101034] text-white p-2 rounded-md hover:bg-[#4343ae]">Submit Form</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SectionTwo;
