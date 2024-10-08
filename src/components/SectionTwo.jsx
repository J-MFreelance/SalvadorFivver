import React from 'react';
import Button from './Button';
import persona from '../assets/persona.png';
import libro from '../assets/libro.png';
import x from '../assets/x.png';
import linkendin from '../assets/linkendin.png';
import regate from '../assets/regate.png';

const SectionTwo = () => {
    return (
        <section id='contact'>
        <div className="flex max-lg:flex-col justify-between bg-[#101034] p-8 text-white">
            {/* Left Section */}
            <div className="xl:w-1/2 max-lg:pb-6">
                {/* Imagen */}
                <div className="flex">
                    <div className="pr-8">
                        <img
                            src={libro}
                            alt="Book cover"
                            className="w-40"
                        />
                    </div>
                    {/* Contenedor del texto, botón y publicación */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold max-lg:text-xl">¡Lëtz reGenerate!</h2>
                        <p className='max-lg:text-sm'>Este libro está dedicado <br /> a la colorida historia del <br /> bosque de Luxemburgo.</p>
                        <Button nombre={"Ver Libro"} color="bg-blue-800" />

                    </div>

                </div>
                {/* Última publicación */}
                <div className="ml-[0rem] pt-6">
                    <p className="italic max-lg:text-sm">Última publicación - Aug 2024</p>
                    <h3 className="text-2xl font-semibold underline decoration-red-800 max-lg:text-xl">The four horsemen arrived</h3>
                </div>



            </div>


            {/* Right Section */}
            <div className="xl:w-1/2 flex flex-col">
                <div className='bg-[#1B1E51] h-64 rounded-tl-[3.5rem] px-14 py-12 max-lg:py-14 xl:w-screen max-lg:h-80'>
                    <div className='flex'>
                        <div>
                            <ol className="space-y-2 mb-6 max-lg:text-xs pl-2 list-disc">
                                <li>Títulos Profesionales</li>
                                <li>Áreas de Especialización</li>
                                <li>Experiencia Profesional</li>
                                <li>Impacto y Contribuciones</li>
                                <li>Publicaciones y Presentaciones</li>
                                <li>Habilidades y Competencias</li>
                            </ol>
                        </div>
                        <div>
                            <img
                                src={persona}
                                alt="Person"
                                className="w-72 h-72 max-lg:my-[-3rem] max-lg:w-56 max-lg:h-56 object-contain my-[-5rem]"
                            />
                        </div>
                        <div className='flex flex-col justify-end items-end'>
                            <div className='flex space-x-2'>
                                <img src={x} alt="x" className='border-[1px] border-white rounded-full  w-8 h-8' />
                                <img src={regate} alt="regate" className='border-[1px] border-white rounded-full w-8 h-8' />
                                <img src={linkendin} alt="linkendin" className='border-[1px] border-white rounded-full  w-8 h-8' />
                            </div>
                            <a href="" className='text-3xl font-bold'>scf.lu</a>
                        </div>
                    </div>

                </div>
                <div className='flex justify-between pt-4'>
                    <p className="font-bold xl:text-2xl text-base">
                        ¿Tienes preguntas? <a href="#" className="transition-colors hover:opacity-50 underline font-normal">Salúdame</a>
                    </p>
                    <Button nombre="Agendar reunión" color="bg-red-700" />
                </div>


            </div>
        </div>
        </section>
    );
};

export default SectionTwo;
