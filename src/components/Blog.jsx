import { useState, useEffect } from "react";
import { client } from "../client/client";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { espanol, ingles, aleman, frances, italiano, luxemburgues, portugues } from "../constants/subpages/blog";
import LanguageSelector from "./LanguageSelector";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { language } = useLanguage();
  const [languageData, setLanguageData] = useState({});

  useEffect(() => {
    switch (language.code) {
      case "CR":
        setLanguageData(espanol);
        break;
      case "GB":
        setLanguageData(ingles);
        break;
      case "DE":
        setLanguageData(aleman);
        break;
      case "IT":
        setLanguageData(italiano);
        break;
      case "FR":
        setLanguageData(frances);
        break;
      case "LU":
        setLanguageData(luxemburgues);
        break;
      case "BR":
        setLanguageData(portugues);
        break;
      default:
        setLanguageData(ingles);
        break;
    }
  }, [language]);


  useEffect(() => {
    // Query para obtener los posts
    const query = '*[_type == "blog"]';

    // Hacemos la consulta a Sanity
    client.fetch(query)
      .then((result) => {
        setData(result);  // Guardamos los datos
        setLoading(false);
      })
      .catch((error) => {
        setError('Error al cargar los datos');
        setLoading(false); // Terminamos el estado de carga
      });
  }, []);

  // Formatear la fecha
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("es-ES", options);
  };

  // Filtrar publicaciones según búsqueda
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Contar idiomas únicos
  const countUniqueLanguages = () => {
    if (!data.length) return 0;
    const languages = new Set(data.map(item => item.language));
    return languages.size;
  };

  if (loading) {
    return <p className="text-white text-2xl">Cargando...</p>;
  }

  if (error) {
    return <p className="text-white text-2xl">{error}</p>;
  }

  return (
    <section className="bg-[#101034]">
      <div className="min-h-screen py-8 px-4">
        <div className="absolute top-4 left-4">
          <Link to="/" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center shadow-md">
            ←
          </Link>
        </div>

        {/* Título principal con gradiente */}
        <h1 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-white pt-8">
          {languageData.text1}
        </h1>

        {/* Estadísticas */}
        <div className="max-w-4xl mx-auto mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
          <div className="bg-opacity-5 bg-white rounded-xl p-4 text-center shadow-md border border-white border-opacity-10">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {data.length}
            </div>
            <div className="text-gray-300 text-sm mt-1">{languageData.text2}</div>
          </div>
          <div className="bg-opacity-5 bg-white rounded-xl p-4 text-center shadow-md border border-white border-opacity-10">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {countUniqueLanguages()}
            </div>
            <div className="text-gray-300 text-sm mt-1">{languageData.text3}</div>
          </div>
        </div>


        {/* Barra de búsqueda */}
        <div className="max-w-md mx-auto mb-8 relative">
          <input
            type="text"
            placeholder={languageData.text4}
            className="w-full p-3 pl-10 rounded-full bg-opacity-5 bg-white border border-white border-opacity-10 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Lista de publicaciones - MANTIENE EL DISEÑO ORIGINAL */}
        <div className="max-w-md mx-auto p-4 rounded-lg">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div key={index}>
                {index > 0 && <div className="w-full border-t border-gray-400 my-8"></div>}
                <div
                  className="bg-[#29294a] rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
                >
                  <Link to={`/blog/${item.title.replace(/\s+/g, '-').toLowerCase()}`} className="block">
                    <div className="p-4">
                      <h2 className="text-xl font-medium text-white mb-1">{item.title}</h2>
                      <div className="flex items-center text-sm text-gray-300">
                        <span>{formatDate(item.date)}</span>
                        <span className="mx-2">•</span>
                        <span>{item.language}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-300">No se encontraron publicaciones</p>
          )}
        </div>
      </div>
      <LanguageSelector />
    </section>
  );
};

export default Blog;