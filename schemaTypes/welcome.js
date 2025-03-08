// schemas/welcome.js

export default {
    name: 'welcome',
    type: 'document',
    title: 'Welcome Section',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Welcome Title',
        },
        {
            name: 'text',
            type: 'text',
            title: 'Welcome Text',
        },
    ],
};