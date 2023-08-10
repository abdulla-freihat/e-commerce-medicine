
import {BsFillCartPlusFill} from "react-icons/bs"
import { useSelector } from "react-redux";
import { useState , useEffect } from 'react'
import { UserAuth } from "../components/context/AuthContext";


const CartBadge = (props) => {

const [showCartBadge , setShowCartBadge] = useState(false);

  const badge = useSelector(state => state.cart.totalQuantity)

  const {user} = UserAuth();


  useEffect(() => {
    if (user?.displayName) {
      setShowCartBadge(true);
    } else {
      setShowCartBadge(false);
    }
  }, [user]);

  return (
    <>
{showCartBadge && <div className='relative flex items-center cursor-pointer'>

    
<BsFillCartPlusFill onClick={props.showCart} size={30} />    
<p className='bg-black p-1  text-white rounded-full text-center'>{badge}</p>     
</div> 

           }

           </>
 
  )
}

export default CartBadge