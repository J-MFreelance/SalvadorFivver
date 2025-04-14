import React, { useState } from 'react';

const Testimonial = ({ autor, profesion, text, image }) => {
  const [showMore, setShowMore] = useState(false); // Estado para mostrar más o menos contenido
  const maxLength = 115; // Longitud máxima para mostrar contenido
  const isTextLong = text.length > maxLength;

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-[#101034] rounded-md text-white">
        <div className="flex flex-col items-center w-48">
          <img
            src={image}
            alt="Person"
            className="w-24 h-24 rounded-full object-cover mb-2"
          />
          <div className="flex flex-col items-center mt-2 text-center text-sm">
            <img
              src={autor}
              alt="Author"
              className="w-43 h-20 object-cover mb-2"
            />
            <h3 className="text-white text-xs">{profesion}</h3>
          </div>
        </div>
        <div className="flex-1 justify-center items-center">
          <p className="text-7xl text-white">❝</p>
          
          {/* Contenedor de texto con un ancho controlado */}
          <p
            className="font-light mb-4 leading-relaxed text-base text-left-justify"
            style={{
              maxWidth: '500px',  // Ajusta el ancho máximo
              wordWrap: 'break-word',  // Hace que el texto se ajuste dentro del contenedor
              overflowWrap: 'break-word', // Ayuda a evitar que el texto se desborde
            }}
          >
            {isTextLong && !showMore ? text.slice(0, maxLength) : text}
          </p>
          
          {/* Mostrar botón solo si el texto es largo */}
          {isTextLong && (
            <button
              className="text-white text-2xl underline mt-1 mb-2 block sm:inline-block"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? '↑' : '↓'}
            </button>
          )}
        </div>
      </div>

      <div className="w-full border-t border-gray-400 my-8"></div>
    </>
  );
};

export default Testimonial;
