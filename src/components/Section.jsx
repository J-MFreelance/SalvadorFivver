import React from 'react';
import Button from './Button';

const Section = () => {
    return (
        <div className='flex flex-col text-white'>
            <div className='bg-gray-500 w-full h-80 px-28 pt-28'>
                <p className='font-semibold text-2xl pb-4'>
                    Futuro regenerativo<br />
                    y socioecológicamente<br />
                    positivo
                </p>
                <Button nombre='Ver contenido' />
            </div>
            <div className='bg-red-700 w-full h-[34rem] flex pl-28 '>
                <div className='w-full h-full'>
                    <p className='font-semibold text-2xl pb-2 pt-56'>
                        Desarrollo sostenible<br />
                        y tecnología ambiental<br />
                    </p>
                    <span className='mb-4'>
                        Ciencias ambientales, geografía y salud planetaria.<br />
                    </span>
                    <Button nombre='Ver contenido' />
                </div>
                <div className='flex flex-col w-4/5 h-full'>
                    <div className='flex flex-col h-3/5 bg-slate-500 w-full py-8 pl-48'>
                        <h3 className='pb-4 font-medium'>
                            Salvatore Coppola-Finegan
                        </h3>
                        <p className='text-start font-light'>
                            Explorador de toda la vida, está <br />
                            dedicado a mejorar el mundo <br />
                            que lo rodea. A finales de 2023, <br /> 
                            fue nombrado Coordinador del <br /> 
                            movimiento Laudato Si' en la <br />
                            comunidad internacional <br />
                            de Luxemburgo liderando <br /> 
                            su renovación con una visión de <br /> 
                            sostenibilidad y prosperidad global.
                        </p>
                    </div>
                    <div className='h-2/5 bg-white flex justify-center'>
                        <img src='/assets/logo1.png' alt='logo' className='h-full fit' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;
