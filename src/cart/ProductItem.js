


 import React from 'react'

 import {BsPlusCircle} from "react-icons/bs"
 import { cartActions } from '../store/cart-slice'
 import { useDispatch } from 'react-redux'
import { UserAuth } from '../components/context/AuthContext'
import { useState } from 'react'
 
 const ProductItem = ({image , name , price , id}) => {

  const [userIsLogin , setUserIsLogin] = useState(false)

  const {user} =UserAuth();

 const dispatch = useDispatch();
 const addItemHandler = ()=>{

     if(!user?.displayName){
      setUserIsLogin(true)
      return ; 
     }

   dispatch(cartActions.addItemToCart({
     id,
     image,
     name,
     price,
     
   }))
 }

   return (
     <>
         <div key={id} className='flex '>
             <img className='h-[100px]' src={image} alt={name}/>
             <div className='ml-3'>
                <h3 className='font-bold'>${price.toFixed(2)}</h3>
                <p className='text-gray-500'>{name}</p>
             </div>
 
             <BsPlusCircle onClick={addItemHandler} className='absolute right-8 bottom-5 hover:text-red-200 cursor-pointer' size={25}/>
             {userIsLogin && <p className='text-red-600 absolute bottom-0 left-[40%] '>Please Login First.</p>}
             
            
         </div>
     </>
   )
 }
 
 export default ProductItem