import React from 'react';
import Button from './Button';

const SectionTwo = () => {
    return (
        <div className="flex justify-between bg-slate-900 p-8 text-white">
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
                        <p>Este libro está dedicado <br/> a la colorida historia del <br/> bosque de Luxemburgo.</p>
                        <Button nombre={"Ver Libro"} />

                    </div>

                </div>
                {/* Última publicación */}
                <div className="ml-[s2rem] pt-6">
                    <p className="italic">Última publicación - Aug 2024</p>
                    <h3 className="text-2xl font-semibold underline decoration-red-800">The four horsemen arrived</h3>
                </div>



            </div>


            {/* Right Section */}
            <div className="w-1/2 flex flex-col bg-[#0d1440]">
                <ul className="space-y-2 mb-6 pl-2">
                    <li>Títulos Profesionales</li>
                    <li>Áreas de Especialización</li>
                    <li>Experiencia Profesional</li>
                    <li>Impacto y Contribuciones</li>
                    <li>Publicaciones y Presentaciones</li>
                    <li>Habilidades y Competencias</li>
                </ul>
                <div className="mb-4">
                    <img
                        src="path_to_person_image"
                        alt="Person"
                    />
                </div>
                <p className="mb-4">
                    ¿Tienes preguntas? <a href="#" className="text-green-400 hover:text-green-300">Salúdame</a>
                </p>
                <Button nombre="Agendar reunión"  />
                    
                
            </div>
        </div>
    );
};

export default SectionTwo;
