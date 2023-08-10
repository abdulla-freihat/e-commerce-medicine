import React from 'react'
import { useSelector } from 'react-redux'

import CartItem from './CartItem'

const Cart = () => {

  const cartItems = useSelector(state => state.cart.items)
  return (
    <>
        <div className='absolute top-24 w-full h-full overflow-y-scroll'>
        {cartItems.map((item) =>(
          
          <CartItem key={item.id} item={{ 
            id: item.id,
            image:item.image,
              name: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price}}  />
                
        ))}
      
         
        </div>
    </>
  )
}

export default Cart