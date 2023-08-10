import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";



export const sendCartData = (cart) => {
    return async dispatch => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending",
          message: "Sending cart data",
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch(
          "https://e-commercesite-29058-default-rtdb.firebaseio.com/ecommerce.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
  
        if (!response.ok) {
          throw new Error("send cart data failed");
        }
      };
  
      try {
        await sendRequest();
  
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success",
            message: "Sent cart data successfully",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "fetch cart data Failed!",
          })
        );
      }
    };
  };
  


  export const fetchCartData = ()=>{
     return async (dispatch) =>{
         const fetchData = async ()=>{
            const response = await fetch("https://e-commercesite-29058-default-rtdb.firebaseio.com/ecommerce.json")

                if(!response.ok){
                    throw new Error("fetch data failed!") 
                }

             const data = await response.json();
             return data;
         }

         try{

           const cartData  = await fetchData();
           dispatch(cartActions.replaceCart(cartData))
            
         }catch(error){
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error",
                  message: "Sent cart data Failed!",
                })
              );
         }
     }
  }