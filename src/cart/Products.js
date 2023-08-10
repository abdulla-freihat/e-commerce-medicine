

 import React , {useState} from 'react'
 import ProductItem from './ProductItem'

 const PRODUCTS = [
    {
        id:"p1",
        image:"product1.jpg",
        price:3,
        name:"ACM Sebionex Hydra"
    },
    {
        id:"p2",
        image:"product2.jpg",
        price:4.99,
        name:"Acne Free Blackhead Removing Scrub"
    },
    {
        id:"p3",
        image:"product3.jpg",
        price:40,
        name:"ACM Sebionex Hydra"
    },
    {
        id:"p4",
        image:"product4.jpg",
        price:15,
        name:"Agnesia Natural Feminine Hygiene Wash"
    },
    {
        id:"p5",
        image:"product5.png",
        price:18,
        name:"Betadine Feminine Wash"
    },
    {
        id:"p6",
        image:"product6.jpg",
        price:15,
        name:"Better Man Bladder Control"
    },
    {
        id:"p7",
        image:"product7.jpg",
        price:6.99,
        name:"Biore Baking Soda Acne Scrub"
    },
    {
        id:"p8",
        image:"product8.png",
        price:89.95,
        name:"CBD Hemp Extract "
    },
    {
        id:"p9",
        image:"product9.png",
        price:8,
        name:"Dial Spring Water  Wash "
    },
    {
        id:"p10",
        image:"product10.png",
        price:16,
        name:"Durex "
    },
    {
        id:"p11",
        image:"product11.png",
        price:9.99,
        name:"First Response Contraceptive Pill "
    },
    {
        id:"p12",
        image:"product12.jpg",
        price:50,
        name:"First Aid Bag "
    },
]
 
 const Products = () => {
    const [visible , setVisible] = useState(3);

    const handleVisible = ()=>{
            setVisible(prevVisible => prevVisible +3);
    }

   return (
     <div className='max-w-[1640px] mx-auto my-12'>
        <div className='w-full p-4 mt-12'>
             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
              {PRODUCTS.slice(0 , visible).map((product) =>(
                  <div key={product.id} className='bg-white shadow-md p-6 relative rounded-lg' >
                  <ProductItem key={product.id}  image={product.image} price={product.price} name={product.name} id={product.id} />
                  
                   </div>
              ))}
             </div>
        </div>
        <div className='flex justify-center'>
        <button onClick={handleVisible} className='bg-gray-200 p-2 font-bold'>
          Load More
        </button>
      </div>
     </div>
   )
 }
 
 export default Products