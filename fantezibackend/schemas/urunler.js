export default {
    name: 'urunler',
    title: 'Urunler',
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
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
          name: 'details',
          title: 'Details',
          type: 'string'  
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Amazon Linki',
            type: 'string',
        },
        {
            name: 'ozellikler',
            title: 'Özellikler',
            type: 'object',
            fields: [
                {name: 'ozellik_1', type: 'string', title: 'Özellik Bir'},
                {name: 'ozellik_2', type:'string', title: 'Özellik İki'},
                {name: 'ozellik_3', type:'string', title: 'Özellik Üç'},
                {name: 'ozellik_4', type:'string', title: 'Özellik Dört'},
                {name: 'ozellik_5', type:'string', title: 'Özellik Beş'},
            ]
        }
    ]
}