import React from 'react'
import {MdChevronLeft , MdChevronRight} from "react-icons/md";

const PRODUCTS_SHOW = [
    {
        id:"c1",
        image:"ca1.png",
        name:"Face & Skin Care"
       
    },
    {
        id:"c2",
        image:"ca2.png",
        name:"Baby Care"
    },
    {
        id:"c3",
        image:"ca3.png",
        name:"Beauty Care"
    },
    {
        id:"c4",
        image:"ca4.png",
        name:"Contraceptive"
    },
    {
        id:"c5",
        image:"ca5.png",
        name:"Feminine Hygiene"
    },
    {
        id:"c6",
        image:"ca6.png",
        name:"Health & Protein"
    },
    {
        id:"c7",
        image:"ca7.png",
        name:"Health & Wellness "
    },
    {
        id:"c8",
        image:"ca8.png",
        name:"Medicine & First Aid"
    },
    {
        id:"c9",
        image:"ca9.png",
        name:"Oral Care"
    },
    {
        id:"c10",
        image:"ca10.png",
        name:"Pregnancy"
    },
   

]


const sliderLeft = ()=>{
     const slider = document.getElementById("slider");
     slider.scrollLeft = slider.scrollLeft -500
}


const sliderright = ()=>{
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft +500
}

const ProductsShow = () => {
  return (
    <div className='max-w-[1640px] mx-auto '>
        <div className='w-full h-full p-4 mt-12 relative flex items-center '>
        <MdChevronLeft onClick={sliderLeft} className="bg-black text-white rounded-full opacity-50 hover:opacity-100 cursor-pointer absolute z-10  group-hover:block" size={40}/>
        <div id={'slider'} className='overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap w-full h-full  '>
        {PRODUCTS_SHOW.map((item) =>(
            <div key={item.id} className='px-4 py-8 bg-white shadow-md ml-3 w-[160px] md:w-[200px] lg:w-[220px] inline-block  hover:scale-105 duration-300 text-center  ' >
              <img className='m-auto'  src={item.image} />
              <p>{item.name}</p>
            </div>
        ))}
        </div>
        <MdChevronRight onClick={sliderright}    className="bg-black text-white rounded-full opacity-50 hover:opacity-100 cursor-pointer absolute z-10 right-0  group-hover:block " size={40}  />

        </div>
    </div>
  )
}

export default ProductsShow