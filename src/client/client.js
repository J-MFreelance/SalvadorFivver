import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '03g3l6a8',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
    const ref = source.asset._ref;

    if (source._type === 'image') {
        return builder.image(source).url();
    } else if (source._type === 'file') {
        const [, id, extension] = ref.split('-');
        return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${id}.${extension}`;
    } else if (source._type === 'video') {
        const [, id, extension] = ref.split('-'); 
        return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${id}.${extension}`;
    }
};