import { useState, useEffect } from "react";
import { client } from "../client/client";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Query para obtener los posts
    const query = '*[_type == "prev"]'; 

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
    <div>
      {data.map((item, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="text-sm text-gray-600">{formatDate(item.date)}</p>
          <p className="text-sm text-gray-600">{item.language}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
