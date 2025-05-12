import { useState, useEffect } from "react";
import { client } from "../client/client";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { espanol, ingles, aleman, frances, italiano, luxemburgues, portugues } from "../constants/subpages/blog";
import LanguageSelector from "./LanguageSelector";
import BlogRightSection from "./BlogRightSection";
import banner from '../assets/banner2.png';

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


    client.fetch(query)
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error al cargar los datos');
        setLoading(false);
      });
  }, []);

  // Formatear la fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear()).substring(2);
    return `${month}/${day}/${year}`;
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
    <section className="playfair-display">
      {/* Cabecera con imagen de fondo */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        {/* Imagen de fondo con parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed z-0"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>


        {/* Degradado sobre la imagen */}
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-b from-transparent to-[#101034] z-10"></div>

        {/* Contenido */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
          <div className="absolute top-4 left-4">
            <Link to="/" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
              ←
            </Link>
          </div>
          <h1 className="text-4xl font-bold drop-shadow-lg">
            Blog <br /> Salvatore Coppola-Finegan
          </h1>
        </div>
      </div>


      {/* Contenido principal */}
      <div className="bg-[#101034] min-h-screen py-8 px-4">
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

        {/* Lista de publicaciones */}
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
            <p className="text-center text-white bg-black bg-opacity-30 p-4 rounded-lg">No se encontraron publicaciones</p>
          )}
        </div>
      </div>

      <BlogRightSection />
      <LanguageSelector />
    </section>
  );
};

export default Blog;