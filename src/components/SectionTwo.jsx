import React from 'react';
import Button from './Button';

const SectionTwo = () => {
    return (
        <div className="flex justify-between bg-[#101034] p-8 text-white">
            {/* Left Section */}
            <div className=" w-1/2 ">
                {/* Imagen */}
                <div className="flex ">
                    <div className="pr-8">
                        <img
                            src="https://letzregenerate.com/wp-content/uploads/2023/12/book-with-ernster.png"
                            alt="Book cover"
                            className="w-48 rounded-lg"
                        />
                    </div>
                    {/* Contenedor del texto, botón y publicación */}
                    <div className=" space-y-2">
                        <h2 className="text-2xl font-bold">¡Lëtz reGenerate!</h2>
                        <p>Este libro está dedicado <br /> a la colorida historia del <br /> bosque de Luxemburgo.</p>
                        <Button nombre={"Ver Libro"} color="bg-blue-800" />

                    </div>

                </div>
                {/* Última publicación */}
                <div className="ml-[0rem] pt-6">
                    <p className="italic">Última publicación - Aug 2024</p>
                    <h3 className="text-2xl font-semibold underline decoration-red-800">The four horsemen arrived</h3>
                </div>



            </div>


            {/* Right Section */}
            <div className="w-1/2 flex flex-col">
                <div className='bg-[#1B1E51] h-64 rounded-tl-[3.5rem] px-14 py-12 w-screen'>
                    <div className='flex'>
                        <div>
                            <ol className="space-y-2 mb-6 pl-2 list-disc">
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
                                src="https://svgsilh.com/svg_v2/309030.svg"
                                alt="Person"
                                className="w-72 h-72 object-contain my-[-5rem]"
                            />
                        </div>
                    </div>

                </div>
                <div className='flex justify-between pt-4'>
                    <p className="font-bold text-2xl">
                        ¿Tienes preguntas? <a href="#" className="transition-colors hover:opacity-50 underline font-normal">Salúdame</a>
                    </p>
                    <Button nombre="Agendar reunión"  color="bg-red-700" />
                </div>


            </div>
        </div>
    );
};

export default SectionTwo;
