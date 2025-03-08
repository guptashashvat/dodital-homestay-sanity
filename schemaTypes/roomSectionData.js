// schemas/roomSectionData.js

export default {
    name: 'roomSectionData',
    type: 'document',
    title: 'Rooms Section Data',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Section Title',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Section Description',
        },
        {
            name: 'buttonText',
            type: 'string',
            title: 'Button Text',
        },
        {
            name: 'buttonLink',
            type: 'string',
            title: 'Button Link',
        },
    ],
};