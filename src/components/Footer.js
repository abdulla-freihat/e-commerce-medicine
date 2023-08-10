
import {BsFacebook , BsGithub ,BsLinkedin} from "react-icons/bs";




import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1640px] mx-auto '>
        <div className='p-4 bg-white shadow-lg border border-t-gray-200 flex items-center justify-between '>
           <p className='font-bold text-gray-500 text-xs '>Cartsy Medicine-Developed by Abdulla Freihat  </p>

           <div className="flex ">
          <a href="https://www.facebook.com/abofreaih"><BsFacebook className="text-gray-500 hover:text-gray-200 mr-3" size={20} /> </a>  
           <a href="https://github.com/abdulla-freihat"> <BsGithub   className="text-gray-500 hover:text-gray-200 mr-3" size={20} /> </a>
           <a  href="https://www.linkedin.com/in/abdulla-freihat-b931a0232/"> <BsLinkedin className="text-gray-500 hover:text-gray-200 mr-3" size={20} /></a>
           </div>

        </div>
    </div>
  )
}

export default Footer