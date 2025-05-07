import React, { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "./LanguageContext";
import { espanol, english, deutsch, french, italiano, portugues, lux } from "../constants/subpages/privacy";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    const { language } = useLanguage();
    const [languageData, setLanguageData] = useState(espanol);

    useEffect(() => {
        const dataMap = {
            "ES": espanol,
            "GB": english,
            "DE": deutsch,
            "IT": italiano,
            "FR": french,
            "BR": portugues,
            "LU": lux
        };
        setLanguageData(dataMap[language.code] || english);
    }, [language]);

    if (!languageData) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    const { privacy_notice } = languageData;

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="fixed top-4 left-4 z-50">
                <Link
                    to="/"
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    ←
                </Link>
            </div>

            <div className="mb-8">
                <LanguageSelector />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
                    {privacy_notice.company.name}
                </h2>
                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">{privacy_notice.company.name_1}</span> {privacy_notice.company.address}
                </p>
                <p className="text-gray-600">
                    <span className="font-semibold">{privacy_notice.company.name_2}</span> {privacy_notice.company.legal_status}
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
                    {privacy_notice.data_protection_officer.name}
                </h2>
                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Email:</span> {privacy_notice.data_protection_officer.email}
                </p>
                <p className="text-gray-600">
                    <span className="font-semibold">{privacy_notice.data_protection_officer.postal_address.includes("EcoCitizen") ? "Dirección postal:" : "Postal Address:"}</span> {privacy_notice.data_protection_officer.postal_address}
                </p>
            </div>

            {/* Scope */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
                    {privacy_notice.scope.name}
                </h2>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {privacy_notice.scope.title}
                </h3>
                <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600">
                    {privacy_notice.scope.applies_to.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p className="text-gray-600">
                    <span className="font-semibold">{privacy_notice.scope.exclusions.includes("No aplica") ? "Exclusiones:" : "Exclusions:"}</span> {privacy_notice.scope.exclusions}
                </p>
            </div>

            {/* Data Types */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
                    {privacy_notice.data_types.name}
                </h2>
                <div className="space-y-4">
                    {privacy_notice.data_types.categories.map((type, index) => (
                        <div key={index} className="bg-gray-50 p-4 border-l-4 border-blue-400 rounded">
                            <h4 className="text-lg font-semibold text-blue-600">{type.name}</h4>
                            <p className="text-gray-600">{type.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                        {privacy_notice.data_types.special_categories.name}
                    </h3>
                    <p className="text-gray-600 mb-2">
                        {privacy_notice.data_types.special_categories.description}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">
                            {privacy_notice.data_types.special_categories.subtitle}:
                        </span> {privacy_notice.data_types.special_categories.processing_condition}
                    </p>
                </div>
            </div>

            {/* Processing Purposes */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
                    {privacy_notice.processing.name || "Processing Purposes and Legal Basis"}
                </h2>
                <div className="space-y-4">
                    {privacy_notice.processing_purposes.map((purpose, index) => (
                        <div key={index} className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="text-lg font-semibold text-teal-700">{purpose.purpose}</h4>
                            <p className="text-gray-600">
                                <span className="font-semibold">
                                    {privacy_notice.processing_purposes[0].data_used ? "Datos utilizados:" : "Data Used:"}
                                </span> {purpose.data_used.join(", ")}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold">
                                    {privacy_notice.processing_purposes[0].legal_basis ? "Base legal:" : "Legal Basis:"}
                                </span> {purpose.legal_basis}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cookies Policy */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
                    {privacy_notice.cookies_policy.name}
                </h2>

                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {privacy_notice.cookies_policy.title}:
                </h3>
                <ul className="list-disc pl-6 mb-6 space-y-1 text-gray-600">
                    {privacy_notice.cookies_policy.purposes.map((purpose, index) => (
                        <li key={index}>{purpose}</li>
                    ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {privacy_notice.cookies_policy.subtitle}:
                </h3>
                <div className="space-y-4 mb-6">
                    {privacy_notice.cookies_policy.types.map((type, index) => (
                        <div key={index} className="bg-yellow-50 p-4 border-l-4 border-yellow-400 rounded">
                            <h4 className="text-lg font-semibold text-orange-600">{type.name}</h4>
                            <p className="text-gray-600">
                                <span className="font-semibold">
                                    {type.purpose.includes("Funcionalidad") ? "Propósito:" : "Purpose:"}
                                </span> {type.purpose}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold">
                                    {type.management.includes("Configuración") ? "Gestión:" : "Management:"}
                                </span> {type.management}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold">
                                    {type.legal_basis.includes("Interés") ? "Base legal:" : "Legal Basis:"}
                                </span> {type.legal_basis}
                            </p>
                        </div>
                    ))}
                </div>

                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {privacy_notice.cookies_policy.subtitle_management || "Cookie Management"}:
                </h3>
                <p className="text-gray-600 mb-2">
                    {privacy_notice.cookies_policy.subtitle_options || "You can manage cookies through:"}
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    {privacy_notice.cookies_policy.management.options.map((option, index) => (
                        <li key={index}>{option}</li>
                    ))}
                </ul>
            </div>

            {/* Data Sharing */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
                    {privacy_notice.data_sharing.name}
                </h2>

                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {privacy_notice.data_sharing.subtitle}
                </h3>
                <ul className="list-disc pl-6 mb-6 space-y-1 text-gray-600">
                    {privacy_notice.data_sharing.recipients.map((recipient, index) => (
                        <li key={index}>{recipient}</li>
                    ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {privacy_notice.data_sharing.subtitle_transfer}
                </h3>
                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">
                        {privacy_notice.data_sharing.international_transfers.name_1}
                    </span> {privacy_notice.data_sharing.international_transfers.mechanism}
                </p>
                <p className="text-gray-600">
                    <span className="font-semibold">
                        {privacy_notice.data_sharing.international_transfers.name_2}
                    </span> {privacy_notice.data_sharing.international_transfers.legal_reference}
                </p>
            </div>

            {/* Data Retention */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
                    {privacy_notice.data_retention.name}
                </h2>

                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {privacy_notice.data_retention.subtitle}
                </h3>
                <p className="text-gray-600 mb-4">
                    {privacy_notice.data_retention.general_rule}
                </p>

                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {privacy_notice.data_retention.subtitle_specific}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <p className="text-gray-600">
                            <span className="font-semibold">
                                {privacy_notice.data_retention.specific_periods.name_1}
                            </span> {privacy_notice.data_retention.specific_periods.marketing_data}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600">
                            <span className="font-semibold">
                                {privacy_notice.data_retention.specific_periods.name_2}
                            </span> {privacy_notice.data_retention.specific_periods.forum_ips}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600">
                            <span className="font-semibold">
                                {privacy_notice.data_retention.specific_periods.name_3}
                            </span> {privacy_notice.data_retention.specific_periods.account_data}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600">
                            <span className="font-semibold">
                                {privacy_notice.data_retention.specific_periods.name_4}
                            </span> {privacy_notice.data_retention.specific_periods.contact_forms}
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {privacy_notice.data_retention.subtitle_exceptions}
                </h3>
                <p className="text-gray-600">
                    {privacy_notice.data_retention.exceptions}
                </p>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
                    {privacy_notice.data_text || "Your Rights"}
                </h2>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    {privacy_notice.data_subject_rights.map((right, index) => (
                        <li key={index}>{right}</li>
                    ))}
                </ul>
            </div>

            {/* Complaints */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
                    {privacy_notice.complaints.name}
                </h2>

                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {privacy_notice.complaints.subtitle}
                </h3>
                <p className="text-gray-600 mb-4">
                    <span className="font-semibold">
                        {privacy_notice.complaints.internal.name_1}
                    </span> {privacy_notice.complaints.internal.contact}
                </p>

                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {privacy_notice.complaints.subtitle_external}
                </h3>
                <p className="text-gray-600">
                    <span className="font-semibold">
                        {privacy_notice.complaints.external.name_1}
                    </span> {privacy_notice.complaints.external.authority}
                </p>
            </div>

            {/* Version Control */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
                    {privacy_notice.name_1 || "Version Control"}
                </h2>
                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">
                        {privacy_notice.version_control.name}:
                    </span> {privacy_notice.version_control.update_process}
                </p>
                <p className="text-gray-600">
                    <span className="font-semibold">
                        {privacy_notice.version_control.name_2}:
                    </span> {privacy_notice.version_control.archive_access}
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;