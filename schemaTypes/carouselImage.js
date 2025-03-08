// schemas/carouselImage.js

export default {
    name: 'carouselImage',
    type: 'document',
    title: 'Carousel Image',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Carousel Image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                },
            ],
        },
        {
            name: 'title',
            type: 'string',
            title: 'Caption Title',
        },
        {
            name: 'text',
            type: 'text',
            title: 'Caption Text',
        },
        {
            name: 'buttonText',
            type: 'string',
            title: 'Button Text (Optional)',
        },
        {
            name: 'buttonLink',
            type: 'string',
            title: 'Button Link (Optional)',
        },
    ],
};