import React from 'react';

const Testimonial = ({ autor, text, image }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-[#101034] rounded-md text-white">
        <div className="flex flex-col items-center   w-48">
          <img
            src={image}
            alt="Person"
            className="w-24 h-24 rounded-full object-cover"
          /> 
          <div className="mt-2 text-center text-sm font-">
            <h3 className="text-white  mb-2" style={{ whiteSpace: 'pre-line', lineHeight: '1' }}>{autor}</h3>
            {/*<p className=" text-left">{title}</p> */}
          </div>
        </div>
        <div className="flex-1">
          <p className="text-7xl text-white ">❝</p>
          <p className=" font-light mb-4 leading-relaxed text-base text-left-justify">
            {text}
          </p>

        </div>
      </div>

      <div className="w-full border-t border-gray-400 my-8"></div>

    </>
  );
};


export default Testimonial;
