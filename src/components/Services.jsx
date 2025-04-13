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

const Services = () => {
    const { language } = useLanguage();
    const [openForm, setOpenForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [languageData, setLanguageData] = useState(servicesEspanol);
    const [expandedItems, setExpandedItems] = useState({});

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
    }, [language]);

    const getServiceLists = useCallback(() => {
        const lists = [];
        for (let i = 1; i <= 8; i++) {
            const listKey = `list${i}`;
            if (languageData[listKey]) {
                lists.push(...languageData[listKey]);
            }
        }
        return lists;
    }, [languageData]);

    const services = getServiceLists();

    const toggleItem = useCallback((itemKey) => {
        setExpandedItems(prev => ({
            ...prev,
            [itemKey]: !prev[itemKey]
        }));
    }, []);

    const renderAccordionItem = useCallback((item, index) => {
        const itemKey = `item-${index}`;
        const isExpanded = expandedItems[itemKey];

        return (
            <div
                key={itemKey}
                id="services"
                className="bg-white bg-opacity-10 rounded-lg overflow-hidden transition-all duration-300 mb-4"
            >
                <button
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
                    onClick={() => toggleItem(itemKey)}
                    aria-expanded={isExpanded}
                    aria-controls={`content-${itemKey}`}
                >
                    <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
                    <span className="text-2xl transition-transform duration-300">
                        {isExpanded ? '−' : '+'}
                    </span>
                </button>

                <div
                    id={`content-${itemKey}`}
                    className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px]' : 'max-h-0'}`}
                >
                    <div className="p-6 pt-0 bg-white bg-opacity-5 space-y-4">
                        <p className="text-lg">{item.text}</p>

                        {item.benefits?.map((benefit, i) => (
                            <div key={`benefit-${i}`} className="mt-4">
                                <h4 className="text-lg font-medium mb-2">{benefit.title}</h4>
                                <ul className="list-disc pl-5 space-y-2">
                                    {benefit.objectives.map((objective, j) => (
                                        <li key={`objective-${j}`}>{objective}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {item.case_study?.map((caseStudy, k) => (
                            <div key={`case-${k}`} className="mt-4 p-4 bg-white bg-opacity-10 rounded">
                                <h4 className="text-lg font-medium mb-2">{caseStudy.title}</h4>
                                <p>{caseStudy.text}</p>
                            </div>
                        ))}

                        {item.research?.map((research, l) => (
                            <div key={`research-${l}`} className="mt-4">
                                <h4 className="text-lg font-medium mb-2">{research.title}</h4>
                                <p>{research.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }, [expandedItems, toggleItem]);

    return (
        <section className="text-white py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <header className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{languageData.title}</h1>
                <p className="text-xl md:text-2xl font-light opacity-90 max-w-4xl mx-auto">
                    {languageData.hero}
                </p>
            </header>

            <div className="space-y-6">
                {services.map((service, index) => renderAccordionItem(service, index))}
            </div>

            <div className="mt-12 text-center">
                <h3 className="text-2xl font-medium mb-4">{languageData.question}</h3>
                <div className="flex justify-center space-x-4">
                    <a
                        href="#contact"
                        className="px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-colors"
                    >
                        {languageData.sayHello}
                    </a>
                    <a
                        href="#schedule"
                        className="px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-colors"
                        onClick={() => setOpenForm(true)}
                    >
                        {languageData.date}
                    </a>
                </div>
            </div>
            {openForm && (
                <div className="fixed inset-0 flex items-center justify-center z-50 w-full bg-[#101034]/50">
                    <div className="bg-[#5e5ee0] p-6 rounded-lg md:w-3/12 w-4/5">
                        <span className="relative left-[95%] bottom-3 text-white text-2xl cursor-pointer" onClick={() => setOpenForm(false)}>X</span>
                        <div className="flex flex-col gap-5 text-black">
                            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={(e) => handleFormChange(e)} className="p-2 rounded-md" />
                            <input type="text" name="email" placeholder="Email" value={formData.email} onChange={(e) => handleFormChange(e)} className="p-2 rounded-md" />
                            <input type="text" name="message" placeholder="Message" value={formData.message} onChange={(e) => handleFormChange(e)} className="p-2 rounded-md" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default React.memo(Services);