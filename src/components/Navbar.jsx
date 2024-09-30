import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <nav className="flex justify-between items-center w-full text-white p-4">
      <div>
        <p className="font-bold xl:text-2xl text-sm">Salvatore Coppola-Finegan</p>
      </div>

      {/* Botón hamburguesa/X visible en pantallas lg y superiores */}
      <button
        className="lg:hidden flex flex-col justify-center items-center space-y-1 cursor-pointer"
        onClick={toggleNavigation}
      >
        {openNavigation ? (
          <div className="text-white text-4xl fixed top-8 right-8 z-50 cursor-pointer">X</div> // Ícono "X" cuando el menú está abierto
        ) : (
          // Ícono hamburguesa cuando el menú está cerrado
          <>
            <div className="w-5 h-[0.1rem] bg-white"></div>
            <div className="w-5 h-[0.1rem] bg-white"></div>
            <div className="w-5 h-[0.1rem] bg-white"></div>
          </>
        )}
      </button>

      {/* Menú de links */}
      <div
        className={`${openNavigation ? "flex" : "hidden"
          } lg:flex lg:space-x-8 lg:text-base text-xs flex-col lg:flex-row fixed lg:static inset-0 bg-black bg-opacity-70 lg:bg-transparent justify-center items-center lg:top-auto lg:left-auto w-full lg:w-auto h-full lg:h-auto z-40 lg:z-auto`}
      >
        <div className="flex max-lg:flex-col items-center gap-6">
          <p
            className="text-2xl lg:text-base hover:transition-colors hover:opacity-70 cursor-pointer"
            onClick={handleClick}
          >
            HOME
          </p>
          <p
            className="text-2xl lg:text-base hover:transition-colors hover:opacity-70 cursor-pointer"
            onClick={handleClick}
          >
            ABOUT
          </p>
          <p
            className="text-2xl lg:text-base hover:transition-colors hover:opacity-70 cursor-pointer"
            onClick={handleClick}
          >
            ECOCITIZEN
          </p>
          <p
            className="text-2xl lg:text-base hover:transition-colors hover:opacity-70 cursor-pointer"
            onClick={handleClick}
          >
            CONTACT
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
