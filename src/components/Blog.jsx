import { useState, useEffect } from "react";
import { client } from "../client/client";
import { Link } from "react-router-dom";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-md mx-auto p-4 rounded-lg">
      <h1 className="text-2xl font-bold text-white mb-6 text-center">Publicaciones de autor</h1>
      {data.map((item, index) => (
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
      ))}
    </div>
  );
};

export default Blog;
