// schemas/roomImage.js

export default {
    name: 'roomImage',
    type: 'document',
    title: 'Room Images',
    fields: [
        {
            name: 'images',
            type: 'array',
            title: 'Room Images',
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