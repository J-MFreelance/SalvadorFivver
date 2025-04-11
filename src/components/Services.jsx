import React, { useEffect, useState, useCallback } from "react";
import { useLanguage } from "./LanguageContext";
import {
    servicesDeutsch,
    servicesEnglish,
    servicesEspanol,
    servicesFrench,
    servicesItalian,
    servicesLux,
    servicesPt
} from "../constants";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Services = () => {
    const { language } = useLanguage();
    const [languageData, setLanguageData] = useState(servicesEspanol);
    const [expandedItems, setExpandedItems] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);

    // Cargar datos según el idioma
    useEffect(() => {
        const dataMap = {
            "ES": servicesEspanol,
            "GB": servicesEnglish,
            "DE": servicesDeutsch,
            "IT": servicesItalian,
            "FR": servicesFrench,
            "BR": servicesPt,
            "LU": servicesLux
        };

        setLanguageData(dataMap[language.code] || servicesEspanol);
        setExpandedItems({});
        setCurrentSlide(0);
    }, [language]);

    // Obtener lista de servicios
    const getServiceLists = useCallback(() => {
        const lists = [];
        for (let i = 1; i <= 17; i++) {
            const listKey = `list${i}`;
            if (languageData[listKey]) {
                lists.push(...languageData[listKey]);
            }
        }
        return lists;
    }, [languageData]);

    const services = getServiceLists();

    // Manejar acordeón
    const toggleItem = useCallback((itemKey) => {
        setExpandedItems(prev => ({
            ...prev,
            [itemKey]: !prev[itemKey]
        }));
    }, []);

    // Navegación del carrusel
    const nextSlide = () => {
        setCurrentSlide(prev => (prev === services.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev === 0 ? services.length - 1 : prev - 1));
    };

    // Renderizar item del acordeón
    const renderAccordionItem = useCallback((item, index) => {
        const itemKey = `item-${index}`;
        const isExpanded = expandedItems[itemKey];

        return (
            <div
                key={itemKey}
                className="bg-white bg-opacity-10 rounded-lg overflow-hidden transition-all duration-300"
            >
                <button
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
                    onClick={() => toggleItem(itemKey)}
                    aria-expanded={isExpanded}
                    aria-controls={`content-${itemKey}`}
                >
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className="text-2xl transition-transform duration-300">
                        {isExpanded ? '−' : '+'}
                    </span>
                </button>

                <div
                    id={`content-${itemKey}`}
                    className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[1000px]' : 'max-h-0'}`}
                >
                    <div className="p-4 pt-0 bg-white bg-opacity-5">
                        {item.subtitle && <h4 className="text-lg font-medium mb-2">{item.subtitle}</h4>}
                        <p className="mb-3">{item.text}</p>

                        {item.benefits?.map((benefit, i) => (
                            <div key={`benefit-${i}`} className="mb-3">
                                <h5 className="font-medium">{benefit.title}</h5>
                                <p>{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }, [expandedItems, toggleItem]);

    return (
        <section className="text-white mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{languageData.title}</h1>
                <h2 className="text-lg md:text-xl font-light opacity-90">{languageData.hero}</h2>
            </header>

            <div>
                <div className="overflow-hidden">
                    <div className="w-full">
                        {services.length > 0 && renderAccordionItem(services[currentSlide], currentSlide)}
                    </div>
                </div>

                {services.length > 1 && (
                    <div className="flex justify-center mt-4 space-x-4">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                            aria-label="Previous service"
                        >
                            <FiChevronLeft size={24} />
                        </button>
                        <div className="flex items-center">
                            {currentSlide + 1} / {services.length}
                        </div>
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                            aria-label="Next service"
                        >
                            <FiChevronRight size={24} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default React.memo(Services);