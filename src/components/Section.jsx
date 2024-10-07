import React from 'react';
import Button from './Button';

const Section = () => {
    return (
        <div className='flex flex-col text-white mt-[-12rem] relative'>
            <div className="bg-[url('./assets/banner2.png')] bg-center bg-cover w-full h-[34rem] xl:px-28 xl:pt-28 max-lg:pt-28 max-lg:px-4">
                <p className='font-semibold xl:text-2xl text-base pb-4'>
                    Futuro regenerativo<br />
                    y socioecológicamente<br />
                    positivo
                </p>
                <Button nombre='Ver contenido' color="bg-blue-800" />
            </div>
            <div className="bg-[url('./assets/right-side.png')] w-full h-[38rem] flex max-lg:flex-col xl:pl-28">
                <div className='w-full h-full max-lg:px-4'>
                    <p className='font-semibold xl:text-2xl text-base pb-2 xl:pt-56 pt-36'>
                        Desarrollo sostenible<br />
                        y tecnología ambiental<br />
                    </p>
                    <span className='pb-4 max-lg:text-xs'>
                        Ciencias ambientales, geografía y salud planetaria.<br />
                    </span>
                    <Button nombre='Ver contenido' color="bg-blue-800" />
                </div>
                <div className='flex flex-col xl:w-4/5 w-full xl:h-full max-lg:h-1/2'>
                    <div className='flex flex-col xl:h-3/5 h-3/6 bg-slate-500 w-full xl:py-8 xl:pl-48 max-lg:items-center max-lg:justify-center'>
                        <h3 className='XL:pb-4 pb-2 max-lg:text-center font-normal max-lg:text-sm'>
                            Salvatore Coppola-Finegan
                        </h3>
                        <p className='text-start max-lg:text-center font-light max-lg:text-xs'>
                            Explorador de toda la vida, está <br className='max-lg:hidden' />
                            dedicado a mejorar el mundo <br className='max-lg:hidden' />
                            que lo rodea. A finales de 2023, <br className='max-lg:hidden' /> 
                            fue nombrado Coordinador del <br className='max-lg:hidden' /> 
                            movimiento Laudato Si' en la <br className='max-lg:hidden' />
                            comunidad internacional <br className='max-lg:hidden' />
                            de Luxemburgo liderando <br className='max-lg:hidden' /> 
                            su renovación con una visión de <br className='max-lg:hidden' /> 
                            sostenibilidad y prosperidad global.
                        </p>
                    </div>
                    <div className='h-3/6 xl:h-[39.6%] bg-white flex justify-center'>
                        <img src='/assets/logo1.png' alt='logo' className='h-full fit' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;
