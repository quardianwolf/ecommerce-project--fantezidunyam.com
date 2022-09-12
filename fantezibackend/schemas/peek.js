export default {
    name: 'peek',
    title: 'Peek',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Isim',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Urun Link',
            type: 'string',
        },
        
    ],
  };