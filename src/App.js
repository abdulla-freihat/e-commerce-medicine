import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { AuthContextProvider } from "./components/context/AuthContext";
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Notification from "./UI/Notification";
import { useDispatch } from "react-redux";

import { sendCartData } from "./store/cart-actions";
import { fetchCartData } from "./store/cart-actions";



let isInitial = true;

function App() {
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch(); 
  
  
  
  useEffect(() => {
   
    if(isInitial){
       isInitial = false;
       return;
    }

     if(cart.changed){
      dispatch(sendCartData(cart))
     }
     
    
  }, [cart, dispatch]);


 

  return (
    <AuthContextProvider>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;

