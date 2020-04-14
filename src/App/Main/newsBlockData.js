const newsBlockData = [
    // First Screen
    {
        id: 1,
        image: '/images/1.png',
        category: 'Sport',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    {
        id: 2,
        image: '/images/2.png',
        category: 'Sport',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    {
        id: 3,
        image: '/images/3.png',
        category: 'Business',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    {
        id: 4,
        image: '/images/4.png',
        category: 'Business',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    {
        id: 5,
        image: '/images/5.png',
        category: 'Old Cars',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    // Main Col
    {
        id: 6,
        image: '/images/6.png',
        category: 'Business',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
    },
    {
        id: 7,
        image: '/images/7.png',
        category: 'Sport',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
    },
    {
        id: 8,
        image: '/images/8.png',
        category: 'Sport',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
    },
    {
        id: 9,
        image: '/images/9.png',
        category: 'Off-Road',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
    },
    {
        id: 10,
        image: '/images/10.png',
        category: 'Off-Road',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
    },
    // Star guest
    {
        id: 11,
        image: '/images/11.png',
        name: 'Leon Hunt',
        profession: 'Food & cooking bloger',
        story: 'Hi, I`m Leon. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on…',
    },
    // Popular Posts
    {
        id: 12,
        image: '/images/12.png',
        category: 'Business',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    {
        id: 13,
        image: '/images/13.png',
        category: 'Off-Road',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    {
        id: 14,
        image: '/images/14.png',
        category: 'Off-Road',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    // Instagram
    // {
    //     id: 15,
    //     image: '/images/15.png',
    // },
    // {
    //     id: 16,
    //     image: '/images/16.png',
    // },
    // {
    //     id: 17,
    //     image: '/images/17.png',
    // },
    // {
    //     id: 18,
    //     image: '/images/18.png',
    // },
    // {
    //     id: 19,
    //     image: '/images/19.png',
    // },
    // {
    //     id: 20,
    //     image: '/images/20.png',
    // },
    // Most Popular
    {
        id: 21,
        image: '/images/21.png',
        category: 'Business',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    {
        id: 22,
        image: '/images/22.png',
        category: 'Concept',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    {
        id: 23,
        image: '/images/23.png',
        category: 'Sport',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    {
        id: 24,
        image: '/images/24.png',
        category: 'Business',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    {
        id: 25,
        image: '/images/25.png',
        category: 'Concept',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    {
        id: 26,
        image: '/images/26.png',
        category: 'Concept',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    {
        id: 27,
        image: '/images/27.png',
        category: 'Business',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    {
        id: 28,
        image: '/images/28.png',
        category: 'Sport',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than anyone',
    },
    // Recent posts
    {
        id: 29,
        image: '/images/29.png',
        category: 'Sport',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than...',
    },
    {
        id: 30,
        image: '/images/30.png',
        category: 'Sport',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than...',
    },
    {
        id: 31,
        image: '/images/31.png',
        category: 'Old Cars',
        authorDate: 'Rickie Baroch - June 6, 2019',
        title: 'One of Saturn’s largest rings may be newer than...',
    },
]

export const getProductsMap = (array) => {
    return array.reduce((accObj,product)=>({
        ...accObj,
        [product.id]:product,
    }),{})
}

export default newsBlockData