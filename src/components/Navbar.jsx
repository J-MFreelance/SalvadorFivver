import { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useLanguage } from "./LanguageContext";
import { espanol, ingles, frances, aleman, italiano } from '../constants';

const Navbar = () => {
  const { language } = useLanguage();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [languageData, setLanguageData] = useState({});

  useEffect(() => {
    if (language.code === "ES") {
      setLanguageData(espanol);
    } else if (language.code === "EN") {
      setLanguageData(ingles);
    } else if (language.code === "DE") {
      setLanguageData(aleman);
    } else if (language.code === "IT") {
      setLanguageData(italiano);
    } else if (language.code === "FR") {
      setLanguageData(frances);
    } else {
      setLanguageData(espanol);
    }
  }, [language]);

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
      <button
        className="lg:hidden flex flex-col justify-center items-center space-y-1 cursor-pointer"
        onClick={toggleNavigation}
      >
        {openNavigation ? (
          <div className="text-white text-4xl fixed top-8 right-8 z-50 cursor-pointer">X</div>
        ) : (
          <>
            <div className="w-5 h-[0.1rem] bg-white"></div>
            <div className="w-5 h-[0.1rem] bg-white"></div>
            <div className="w-5 h-[0.1rem] bg-white"></div>
          </>
        )}
      </button>
      <div
        className={`${openNavigation ? "flex" : "hidden"
          } lg:flex lg:space-x-8 lg:text-base text-xs flex-col lg:flex-row fixed lg:static inset-0 bg-black bg-opacity-70 lg:bg-transparent justify-center items-center lg:top-auto lg:left-auto w-full lg:w-auto h-full lg:h-auto z-40 lg:z-auto`}
      >
        <div className="flex max-lg:flex-col items-center gap-6">
          <a
            className="text-2xl lg:text-base hover:transition-colors hover:opacity-70 cursor-pointer"
            onClick={handleClick}
            href="#home"
          >
            {languageData.navA1}
          </a>
          <a
            className="text-2xl lg:text-base hover:transition-colors hover:opacity-70 cursor-pointer"
            onClick={handleClick}
            href='#about'
          >
            {languageData.navA2}
          </a>
          <a
            className="text-2xl lg:text-base hover:transition-colors hover:opacity-70 cursor-pointer"
            onClick={handleClick}
            href='#'
          >
            {languageData.navA5}
          </a>
          <a
            className="text-2xl lg:text-base hover:transition-colors hover:opacity-70 cursor-pointer"
            onClick={handleClick}
            href='#ecocitizen'
          >
            {languageData.navA4}
          </a>
          <a
            className="text-2xl lg:text-base hover:transition-colors hover:opacity-70 cursor-pointer"
            onClick={handleClick}
            href='#contact'
          >
            {languageData.navA3}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
