export default {
    name: 'sizinicinsectiklerimiz',
    title: 'Sizinicinsectiklerimiz',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'isim',
            title: 'Isim',
            type: 'string',
        },
        {
            name: 'fiyat',
            title: 'Fiyat',
            type: 'string',
        }, 
        {
            name: 'indirim',
            title: 'Indirim',
            type: 'string',
        },
        {
            name: 'buton_link',
            title: 'Buton_link',
            type: 'string',
        },    
    ],
  };