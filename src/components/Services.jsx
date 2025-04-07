import React, { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { servicesDeutsch, servicesEnglish, servicesEspanol, servicesFrench, servicesItalian } from "../constants";

const Services = () => {
    const { language } = useLanguage();
    const [languageData, setLanguageData] = useState({});
    const [expandedItems, setExpandedItems] = useState({});

    useEffect(() => {
        if (language.code === "ES") {
            setLanguageData(servicesEspanol);
        } else if (language.code === "EN") {
            setLanguageData(servicesEnglish);
        } else if (language.code === "DE") {
            setLanguageData(servicesDeutsch);
        } else if (language.code === "IT") {
            setLanguageData(servicesItalian);
        } else if (language.code === "FR") {
            setLanguageData(servicesFrench);
        } else {
            setLanguageData(servicesEspanol);
        }

        setExpandedItems({});
    }, [language]);

    const toggleItem = (itemKey) => {
        setExpandedItems(prev => ({
            ...prev,
            [itemKey]: !prev[itemKey]
        }));
    };

    const renderAccordionItem = (item, index) => {
        const itemKey = `item-${index}`;
        const isExpanded = expandedItems[itemKey];

        return (
            <div key={itemKey} className="bg-white bg-opacity-10 rounded-lg overflow-hidden mb-4">
                <button
                    className="w-full p-4 text-left flex justify-between items-center"
                    onClick={() => toggleItem(itemKey)}
                >
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className="text-2xl">
                        {isExpanded ? '−' : '+'}
                    </span>
                </button>

                {isExpanded && (
                    <div className="p-4 pt-0 bg-white bg-opacity-5">
                        {item.subtitle && <h4 className="text-lg font-medium mb-2">{item.subtitle}</h4>}
                        <p className="mb-3">{item.text}</p>

                        {item.benefits && item.benefits.map((benefit, i) => (
                            <div key={`benefit-${i}`} className="mb-3">
                                <h5 className="font-medium">{benefit.title}</h5>
                                <p>{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    const getServiceLists = () => {
        const lists = [];
        for (let i = 1; i <= 17; i++) {
            const listKey = `list${i}`;
            if (languageData[listKey]) {
                lists.push(...languageData[listKey]);
            }
        }
        return lists;
    };

    return (
        <div className="text-white mt-8">
            <h1 className="text-3xl font-bold mb-4">{languageData.title}</h1>
            <h2 className="text-lg font-light mb-8">{languageData.hero}</h2>
            <div className="grid grid-cols-1 gap-6">
                {getServiceLists().map((item, index) => (
                    renderAccordionItem(item, index)
                ))}
            </div>
        </div>
    );
};

export default Services;