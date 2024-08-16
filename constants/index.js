export const categories=[
    {id:1,name:"Pizza",image:require('../assets/categories/pizza.png')},
    {id:2,name:"Burger",image:require('../assets/categories/pizza.png')},
    {id:3,name:"Italian",image:require('../assets/categories/pizza.png')},
    {id:4,name:"Chinese",image:require('../assets/categories/pizza.png')},
    {id:5,name:"Desi",image:require('../assets/categories/pizza.png')},
    {id:6,name:"Japanies",image:require('../assets/categories/pizza.png')},
    {id:7,name:"Indian",image:require('../assets/categories/pizza.png')},
    {id:8,name:"Biryani",image:require('../assets/categories/pizza.png')},
]
export const features={
    id:'1',
    title:'Hot and Spicy',
    description:'soft and tender fried chicken',
    restaurants:[
        {
            id:1,
            name:'KFC',
            image:require('../assets/restaurants/kfc.webp'),
            description:"Hot and Spicy Pizza",
            lng: 73.079109,
            lat: 31.418715,
            address:'434 second street',
            stars:4,
            review:"4.3k",
            category:"fast food",
            dishes:[
                {id:1,name:"Pizza", price:20, description:"cheezy Gralic pizza",image:require('../assets/dishes/pizza.jpeg')},
                {id:2,name:"zinger", price:20, description:"cheezy Gralic pizza",image:require('../assets/dishes/pizza.jpeg')},
                {id:3,name:"pasta", price:20, description:"cheezy Gralic pizza",image:require('../assets/dishes/pizza.jpeg')},
                {id:4,name:"fries", price:20, description:"cheezy Gralic pizza",image:require('../assets/dishes/pizza.jpeg')},
            ]
        },
        {
            id:2,
            name:'Papa Johns',
            image:require('../assets/restaurants/papajohns.jpg'),
            description:"Hot and Spicy Burger",
            lng: 73.079109,
            lat: 31.418715,
            address:'43 second street',
            stars:4,
            review:"4.4k",
            category:"fast food",
            dishes:[
                {id:1,name:"Pizza", price:20, description:"cheezy Gralic pizza",image:require('../assets/dishes/pizza.jpeg')},
                {id:2,name:"zinger", price:20,description:"cheezy Gralic pizza",image:require('../assets/dishes/pizza.jpeg')},
                {id:3,name:"fries", price:20,description:"cheezy Gralic pizza",image:require('../assets/dishes/pizza.jpeg')},
                {id:4,name:"pasta", price:20,description:"cheezy Gralic pizza",image:require('../assets/dishes/pizza.jpeg')},

            ]

        },
        {
            id:3,
            name:'AL-BAik',
            image:require('../assets/restaurants/albaik.jpeg'),
            description:"Hot and Spicy Burger",
           lng: 73.079109,
            lat: 31.418715,
            address:'Saudi street',
            stars:5,
            review:"4.5k",
            category:"fast food",
            dishes:[
                {id:1,name:"Pizza", price:20,description:"cheezy Gralic pizza",image:require('../assets/dishes/pizza.jpeg')},
                {id:2,name:"zinger", price:20, description:"cheezy Gralic pizza",image:require('../assets/dishes/pizza.jpeg')},
                {id:3,name:"pasta", price:20, description:"cheezy Gralic pizza",image:require('../assets/dishes/pizza.jpeg')},
                {id:4,name:"fries", price:20, description:"cheezy Gralic pizza",image:require('../assets/dishes/pizza.jpeg')},

            ]

        },

    ],
   
}