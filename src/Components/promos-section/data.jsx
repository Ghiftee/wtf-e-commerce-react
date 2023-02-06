import img1 from './promo-image/laptop1.png'
import img2 from './promo-image/tablet.png'
import img3 from './promo-image/watch.png'
import img4 from './promo-image/phone2.png'
import img5 from './promo-image/phone3.png'
import img6 from './promo-image/phone4.png'
import img7 from './promo-image/tablet2.png'
import img8 from './promo-image/tablet3.png'
import img9 from './promo-image/tablet4.png'
import img10 from './promo-image/laptop2.png'
import img11 from './promo-image/laptop3.png'
import img12 from './promo-image/laptop4.png'
import img13 from './promo-image/watch1.png'
import img14 from './promo-image/watch2.png'
import img15 from './promo-image/watch3.png'
const data =[
    {
         id: 1,
         image:img1,
         label: 'Laptop',
         series: "SERIES #L10",
         price: "$2100" ,
    },
    {
        id: 2,
        image:img2,
        label: 'Tablet',
        series: "SERIES #S12",
        price: "$1980" ,
   },
   {
    id: 3,
    image:img3,
    label: 'Watches',
    series: "SERIES #A10",
    price: "$1200" ,
}
]

export default data

const mobileData =[
    {
         id: 4,
         image:img4,
         label: 'Phone',
         series: "SERIES #L10",
         price: "$2500" ,
    },
    {
        id: 5,
        image:img5,
        label: 'Phone',
        series: "SERIES #S12",
        price: "$2970" ,
   },
   {
    id: 6,
    image:img6,
    label: 'Phone',
    series: "SERIES #A10",
    price: "$2050" ,
}
]

const tabletData =[
    {
         id: 7,
         image:img7,
         label: 'Tablet',
         series: "SERIES #P10",
         price: "$2500" ,
    },
    {
        id: 8,
        image:img8,
        label: 'Tablet',
        series: "SERIES #I12",
        price: "$3080" ,
   },
   {
    id: 9,
    image:img9,
    label: 'Tablet',
    series: "SERIES #W10",
    price: "$1800" ,
}
]

const laptopData =[
    {
         id: 10,
         image:img10,
         label: 'Laptop',
         series: "SERIES #A10",
         price: "$3500" ,
    },
    {
        id: 11,
        image:img11,
        label: 'Laptop',
        series: "SERIES #A12",
        price: "$3170" ,
   },
   {
    id: 12,
    image:img12,
    label: 'Laptop',
    series: "SERIES #A90",
    price: "$3800" ,
}
]

const watchData =[
    {
         id: 13,
         image:img13,
         label: 'Wrist-Watch',
         series: "SERIES #P10",
         price: "$2300" ,
    },
    {
        id: 14,
        image:img14,
        label: 'Wrist-Watch',
        series: "SERIES #I12",
        price: "$1080" ,
   },
   {
    id: 15,
    image:img15,
    label: 'Wrist-Watch',
    series: "SERIES #W10",
    price: "$1800" ,
}
]

export {mobileData, tabletData, laptopData, watchData}