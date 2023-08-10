


import React from 'react'


const FEATURES = [
    {
        id:"f1",
        number:1,
         color: "bg-[#fdebc5]"    ,
        title:"Your Order",
        description: "There Are Many Variations of passages of lorem ipsum available"

    },
    {
        id:"f2",
        number:2,
        color: "bg-[#ccf1fa]"    ,
        title:"Ready Your Order",
        description: "There Are Many Variations of passages of lorem ipsum available"

    },
    {
        id:"f3",
        number:3,
        color: "bg-[#d5f6bc]"    ,
        title:"Packing Your Order",
        description: "There Are Many Variations of passages of lorem ipsum available"

    },
    {
        id:"f4",
        number:4,
        color: "bg-[#d6d7fd]"    ,
        title:"And Deliver",
        description: "There Are Many Variations of passages of lorem ipsum available"

    },
]

const Features = () => {
  return (
    <div className='max-w-[1640px] mx-auto'>
    <div className='w-full p-4 mt-12 '>

        <div className='bg-white shadow-md rounded-ءl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-16'>

        {FEATURES.map((item) =>(
            <div key={item.id} className='flex '>
               <div className= {`${item.color} w-[15%] h-full  p-4 font-bold flex items-center justify-center`}> 
                  {item.number}
               </div>
               <div className='space-y-3 ml-5'> 
                  <h2 className='text-xl font-bold '>{item.title}</h2>
                  <p className='text-gray-500'>{item.description}</p>
               </div>
             </div>
        ))}

        </div>
        </div>
    </div>
  )
}

export default Features