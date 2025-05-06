import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client/client";

const BlogPost = () => {
    const { title } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const formattedTitle = title.replace(/-/g, ' ').toLowerCase();

        const query = `*[_type == "blog" && title match "${formattedTitle}"]`;

        client.fetch(query)
            .then((result) => {
                if (result && result.length > 0) {
                    setPost(result[0]); // Suponiendo que el título es único
                } else {
                    setError('Artículo no encontrado');
                }
                setLoading(false);
            })
            .catch((error) => {
                setError('Error al cargar el artículo');
                setLoading(false);
            });
    }, [title]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-[#29294a] text-white rounded-lg shadow-md mt-10">
            <h1 className="text-3xl font-bold text-center mb-4">{post.title}</h1>
            <h3 className="text-2xl font-bold text-gray-400 text-right mb-4">{post.author}</h3>
            <div className="text-sm text-gray-400 mb-6">
                <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
                <span className="mx-2">•</span>
                <span>{post.language}</span>
            </div>
            <div>
                <p className="text-lg text-justify">{post.content}</p>
            </div>
        </div>
    );
};

export default BlogPost;
