import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Correctly initialize the client
const client = createClient({
    projectId: 'ywke1n90',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2022-03-07"
});

// Correctly initialize the image URL builder
const builder = imageUrlBuilder(client);

// Function to generate the URL for an image source
export const urlFor = (source) => builder.image(source);

// Export the client for use in other parts of your application
export default client;
