


import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { cartActions } from '../store/cart-slice';



const CartItem = (props) => {

const {price , name , total , image , id ,quantity} = props.item;

const dispatch = useDispatch();

const increaseItemHandler = ()=>{

   if(quantity < 5 ){
      dispatch(cartActions.addItemToCart({
         id,
         price,
          name
       }))

   }
  
}

const decreaseItemHandler = ()=>{
   dispatch(cartActions.removeItemFromCart(id))
}


  return (
    <>
     
        <div className='flex items-center flex-row justify-between  w-full p-4 '>
            <img className="h-[60px]" src={image}   />
            <div className='space-y-1 '>
            <p className='font-bold'>${price}</p>
               <h3 className='font-bold' >{name}</h3>
               <p className='text-gray-500'>x{quantity}</p>
              
            </div>
           
               <div className='flex'>
                  <button onClick={increaseItemHandler} className='bg-gray-200 p-3 text-lg font-bold rounded-full mr-3 '>+</button>
                  <button onClick={decreaseItemHandler} className='bg-gray-200 p-3 text-lg font-bold rounded-full mr-3 '>-</button>
                  </div>

               
        </div>
        
       
    </>
  )
}

export default CartItem