// schemas/navbar.js

export default {
    name: 'navbar',
    type: 'document',
    title: 'Navbar',
    fields: [
        {
            name: 'logo',
            type: 'image',
            title: 'Logo',
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
            name: 'homestayName',
            type: 'string',
            title: 'Homestay Name',
        },
    ],
};