// schemas/nearbyAttraction.js

export default {
    name: 'nearbyAttraction',
    type: 'document',
    title: 'Nearby Attraction',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [
                {
                    type: 'image',
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
            ],
        },
    ],
};