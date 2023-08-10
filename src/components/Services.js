

 import React from 'react'


 const SERVIECES = [

    {
        id:"s1",
        title:"Female Care",
        description:"We Provided Feminine Hygiene",
        image: "mainSlide1.png",
        btn:"View Products",
        btnText: "text-[#e57bc7]",
        bgColor: 'bg-[#e57bc7]',

    },
    {
        id:"s2",
        title:"Fast Delivery",
        description:"Medicine Delivered In 90 Munite",
        image: "mainSlide2.png",
        btn:"Save Now",
        btnText: "text-[#faa34e]",
        bgColor: 'bg-[#faa34e]',
    },
    {
        id:"s3",
        title:"Custom Order",
        description:"We Can Order Customly",
        image: "mainSlide3.png",
        btn:"View Products",
        btnText: "text-[#7d8df0]",
        bgColor: 'bg-[#7d8df0]',
    },
    {
        id:"s4",
        title:"Coupon Savings ",
        description:"Up To 40% Off Everyday Essentials",
        image: "mainSlide4.png",
        btn:"View Products",
        btnText: "text-[#6bbd6a]",
        bgColor: 'bg-[#6bbd6a]',
    },
 ]
 
 const Services = () => {
   return (
     <div className='max-w-[1640px] mx-auto'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full p-4 mt-12'>
          {SERVIECES.map((item , index) =>(
           <div key={item.id}  className={`w-full  text-white flex justify-between p-4 h-[180px] rounded-sm relative ${item.bgColor} px-3 py-5 hover:scale-105 duration-300`}>
           <div className=' space-y-1 w-full'>
                <h1 className='text-xl font-bold'>{item.title}</h1>
                <p>{item.description}</p>
                <button className={`bg-white rounded-lg p-2 ${item.btnText} absolute bottom-4 font-bold text-sm `} >{item.btn}</button>
                </div>
                <img className=' h-[130px] w-[100px]' src={item.image} />

            </div>

          ))}
        </div>
     </div>
   )
 }
 
 export default Services