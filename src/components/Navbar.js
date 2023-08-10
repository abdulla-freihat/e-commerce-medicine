


import React , {useState ,  useEffect} from 'react'
import {AiOutlineSearch , AiOutlineClose} from "react-icons/ai"
import CartBadge from '../cart/CartBadge'
import Cart from '../cart/Cart'
import { useSelector } from 'react-redux'
import { UserAuth } from './context/AuthContext';
import { Link } from 'react-router-dom'




const Navbar = () => {




  const [showCart , setShowCart] = useState(false)

 const quantity = useSelector(state => state.cart.totalQuantity)
 const items = useSelector(state => state.cart.items)



 const {user , Logout} = UserAuth();


 let totalAmount = 0;

 

  const showCartHandler = ()=>{
     setShowCart(true)
  }

  const closeCartHandler = ()=>{
    setShowCart(false)
 }


 const LogoutHandler =async ()=>{
    try{
       await Logout()

  
       
     
      
    }catch(error){
       console.log(error.mesage)
    }
 }


 
  return (
    <div className='max-w-[1640px] mx-auto '>

       <div className='w-full h-[70px] shadow-sm flex justify-between items-center p-4 '>
              <div className='cursor-pointer'>
                  <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl'><span className='text-[#7f67ab]'>CARTSY</span> MEDICINE</h1>
              </div>

              <div className='flex items-center  w-[400px] rounded-lg hidden md:flex '>
                 <AiOutlineSearch size={25} />
                 <input className='w-full p-3 ' type="text"  placeholder='Search...' />
              </div>

           <div className='flex'>
             <CartBadge showCart={showCartHandler} />

             {user?.displayName ?   <button onClick={LogoutHandler} className='ml-6 bg-[#7f67ab] text-white font-bold px-3 py-2 rounded-xl'>Logout</button> : <Link to="/signin" className='ml-6 bg-[#7f67ab] text-white font-bold px-3 py-2 rounded-xl'>Login</Link>   }
           

             </div>

             <div className={showCart? ' w-full md:w-[500px] shadow-lg fixed top-0 right-0 bg-white  h-screen z-20 duration-300' :'fixed top-0 left-[-100%]   bg-white  z-20 duration-300' }>
                    <h2 className='text-xl absolute top-4 left-4 font-bold '> Your Shopping Cart ({quantity})</h2>
                  <AiOutlineClose onClick={closeCartHandler} size={25} className='absolute top-4 right-4' />
                  
                   <Cart />
                   <h2 className='text-xl absolute bottom-4 left-4 font-bold '> Total Amount : {totalAmount.toFixed(2)}</h2>

                  
             </div>

       </div>

    </div>
  )
}

export default Navbar