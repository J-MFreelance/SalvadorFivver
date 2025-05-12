import React, { useEffect, useState } from 'react';
import persona from '../assets/persona.png';
import x from '../assets/x.png';
import linkendin from '../assets/linkendin.png';
import regate from '../assets/regate.png';
import Button from './Button';
import { useLanguage } from './LanguageContext';
import { espanol4, ingles4, aleman4, frances4, italiano4, letzemburgesch4, portugues4 } from '../constants';
import emailjs from '@emailjs/browser';
import { z } from 'zod';

const BlogRightSection = () => {
  const { language } = useLanguage();
  const [languageData, setLanguageData] = useState({});
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const formSchema = z.object({
    name: z.string().min(1, { message: 'Campo requerido' }),
    email: z.string().email({ message: 'Email no válido' }),
    organization: z.string().min(1, { message: 'Campo requerido' }),
    message: z.string().min(1, { message: 'Campo requerido' })
  });

  useEffect(() => {
    const map = {
      CR: espanol4,
      GB: ingles4,
      DE: aleman4,
      IT: italiano4,
      FR: frances4,
      LU: letzemburgesch4,
      BR: portugues4
    };
    setLanguageData(map[language.code] || ingles4);
  }, [language]);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      const newErrors = {};
      error.errors.forEach(err => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs.send(
      'service_79i9tvq',
      'template_hogl28i',
      formData,
      'VsXKtZ_anbaTeiFck'
    ).then(() => {
      alert("Mensaje enviado correctamente");
      setFormData({ name: "", email: "", organization: "", message: "" });
      setOpenForm(false);
    }).catch((error) => {
      console.error(error.text);
      alert("Hubo un error al enviar el mensaje");
    });
  };

  return (
    <section className="bg-[#101034] text-white px-8 py-12">
      <div className="max-w-7xl mx-auto flex justify-end">
        <div className="w-full xl:w-1/2">
          <div className="flex flex-col">
            <div className='bg-[#1B1E51] h-64 rounded-tl-[3.5rem] px-14 py-12 max-lg:py-14 xl:w-full max-lg:h-80'>
              <div className='flex'>
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
                      <a href='https://x.com/meddisstovtiks/highlights' target="_blank" rel="noopener noreferrer">
                        <img src={x} alt="x" className='border-[1px] border-white rounded-full w-8 h-8 max-lg:h-6 max-lg:w-6' />
                      </a>
                      <a href=''>
                        <img src={regate} alt="regate" className='border-[1px] border-white rounded-full w-8 h-8 max-lg:h-6 max-lg:w-6' />
                      </a>
                      <a href='https://www.linkedin.com/in/salvatorecoppolaf/' target="_blank" rel="noopener noreferrer">
                        <img src={linkendin} alt="linkendin" className='border-[1px] border-white rounded-full w-8 h-8 max-lg:h-6 max-lg:w-6' />
                      </a>
                    </div>
                    <a href="#" className='text-3xl font-bold font-serif max-lg:text-xl'>scf.lu</a>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex justify-between pt-4'>
              <p className="font-bold xl:text-2xl text-base">
                {languageData.texto7l} <a href="https://wa.me/message/FTF5MDA6O73YJ1" target='_blank' className="transition-colors hover:opacity-50 underline font-normal">{languageData.texto8l}</a>
              </p>
              <button onClick={() => setOpenForm(true)}>
                <Button nombre={languageData.btn2} color="bg-blue-800" />
              </button>
            </div>

            {openForm && (
              <div className="fixed inset-0 flex items-center justify-center z-50 w-full bg-[#101034]/50">
                <div className="bg-[#5e5ee0] p-6 rounded-lg md:w-3/12 w-4/5">
                  <span className="relative left-[95%] bottom-3 text-white text-2xl cursor-pointer" onClick={() => setOpenForm(false)}>X</span>
                  <form onSubmit={onSubmit} className="flex flex-col gap-5 text-black">
                    <input type="text" name="name" placeholder={languageData.form_name} value={formData.name} onChange={handleFormChange} className="p-2 rounded-md" />
                    <input type="text" name="email" placeholder={languageData.form_email} value={formData.email} onChange={handleFormChange} className="p-2 rounded-md" />
                    <input type="text" name="organization" placeholder={languageData.form_organization} value={formData.organization} onChange={handleFormChange} className="p-2 rounded-md" />
                    <input type="text" name="message" placeholder={languageData.form_message} value={formData.message} onChange={handleFormChange} className="p-2 rounded-md" />
                    <button
                      type="submit"
                      className="bg-[#101034] text-white p-2 rounded-md hover:bg-[#4343ae]"
                    >
                      {languageData.form_button}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogRightSection;
