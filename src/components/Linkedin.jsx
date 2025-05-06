import React, { useEffect } from 'react';

const LinkedInPost = () => {
    useEffect(() => {
        // Esto asegura que el script se cargue solo una vez que el componente esté montado
        const script = document.createElement('script');
        script.src = 'https://widgets.sociablekit.com/linkedin-profile-posts/widget.js';
        script.defer = true;
        document.body.appendChild(script);

        // Cleanup: eliminar el script cuando el componente se desmonte
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    
    return (
        <div className="p-4 bg-white border rounded-lg shadow-md">
            <div className="sk-ww-linkedin-profile-post" data-embed-id="25552704"></div>
        </div>
    );

};

export default LinkedInPost;
