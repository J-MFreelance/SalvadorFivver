import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: '03g3l6a8',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,
    token: 'sk7GLCdP6rgyd9x6vko2m5g9IC2tz01QL8e4Vq4zMHfWtAbOpK3bfOud6nihZSfwcPw9OsdVbu0XtNK0rz8XFyedLWqOkEjaZfaGYdF5YY8hl6lxkf2v9EhbNAhuGMSoxRKPdQmIQ6Ff64VZDucS3vVGj1dysxrCQLE7IE7vUeJYlc2fR9wv'
});

