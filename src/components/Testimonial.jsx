import React from 'react';

const Testimonial = ({ autor, profesion, text, image }) => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-[#101034] rounded-md text-white">
      <div className="flex flex-col items-center w-48">
        <img
          src={image} // Usamos el path de la imagen del autor
          alt="Person"
          className="w-24 h-24 rounded-full object-cover mb-2"
        />
        <div className="flex flex-col items-center mt-2 text-center text-sm">
          <img
            src={autor} // Usamos el path de la imagen del nombre
            alt="Author"
            className="w-43 h-20  object-cover mb-2" // Ajuste de tamaño para que se vea bien
          />
          <h3 className="text-white text-lg">{profesion}</h3> {/* Profesión debajo de la imagen */}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-7xl text-white">❝</p>
        <p className="font-light mb-4 leading-relaxed text-base text-left-justify">
          {text} {/* Texto del testimonio */}
        </p>
      </div>
    </div>
    <div className="w-full border-t border-gray-400 my-8"></div>
    </>
  );
};




export default Testimonial;
