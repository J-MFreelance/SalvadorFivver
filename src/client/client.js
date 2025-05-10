import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: '03g3l6a8',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
});

