import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client/client";
import { Link } from 'react-router-dom';
import BlogRightSection from "./BlogRightSection";

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
        return (
            <div className="min-h-screen flex items-center justify-center ">
                <div className="animate-pulse text-white text-xl">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a2a3a] to-[#0c1824]">
                <div className="text-white text-xl bg-red-500 bg-opacity-20 p-4 rounded-lg">
                    {error}
                </div>
            </div>
        );
    }

    // Formatear la fecha
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        const year = String(date.getFullYear()).substring(2); 
        return `${month}/${day}/${year}`;
    };

    return (
        <div className="min-h-screen py-6 px-4 relative playfair-display">
            {/* Botón de volver - fixed en móvil, absolute en desktop */}
            <div className="fixed md:absolute top-4 left-4 z-10">
                <Link
                    to="/blog"
                    className="px-4 py-2 md:px-6 md:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 shadow-md flex items-center justify-center"
                    aria-label="Volver a publicaciones"
                >
                    ←
                </Link>
            </div>

            {/* Contenedor principal  */}
            <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-[#29294a] text-white rounded-lg shadow-md mt-16 md:mt-20 mb-10">
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 sm:mb-4 break-words">
                    {post.title}
                </h1>

                {/* Autor con alineación adaptativa */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-400 text-right mb-2 sm:mb-4">
                    {post.author}
                </h3>

                {/* Metadatos del post */}
                <div className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 flex flex-wrap justify-end">
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{post.language}</span>
                </div>

                {/* Contenido del post s */}
                <div className="prose prose-invert max-w-none">
                    <p className="text-base sm:text-lg text-justify sm:text-left whitespace-pre-wrap">
                        {post.content}
                    </p>
                </div>
            </div>
            <BlogRightSection />

            <div className="h-10 md:h-6"></div>
        </div>
    );
};

export default BlogPost;