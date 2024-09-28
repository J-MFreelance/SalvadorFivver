import React from 'react';

const Testimonial = ({ image, name, title, quote }) => {
    return (
        <>
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-[#101034] rounded-md text-white">
        <div className="flex flex-col items-center   w-48"> 
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="mt-2 text-center text-sm font-"> 
            <h3 className="text-white  mb-2">{name}</h3>
            <p className=" text-left">{title}</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-5xl text-[#C1B3FF] font-bold">“</div>
          <p className=" font-light mb-4 leading-relaxed text-base text-left-justify">
            {quote}
          </p>
          
        </div>        
      </div>
      
      <div className="w-full border-t border-gray-400 my-8"></div>
      
      </>
    );
  };
  

export default Testimonial;
