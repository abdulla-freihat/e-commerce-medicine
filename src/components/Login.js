


 import React, { useEffect } from 'react'
 import { useNavigate } from 'react-router-dom'
 import { UserAuth } from './context/AuthContext';
 import { useSelector } from 'react-redux'
 import { useDispatch } from 'react-redux';

 
 const Login = () => {
    const {GoogleSigIn , user} = UserAuth();


    const navigate = useNavigate();

    const GoogleSignInHandler = async() =>{
         try{
           await GoogleSigIn();
          

        
              

         }catch(error){
             console.log(error.message)
         }
    }


     useEffect(()=>{
        if(user != null){
             navigate("/")
        }
     } , [user])
   
   return (
     <div className='max-w-[1640px]  mx-auto  '>
     <div className='w-full h-screen flex items-center justify-center'>
        <div className='bg-white  rounded-xl shadow-lg w-[80%] md:w-[60%] lg:w-[40%] h-[300px] '>
            <div className='text-center pt-5 space-y-3 mb-8'>
                <img className='w-[90px] mx-auto' src="google-logo-1.png"   />
                <h1 className='text-2xl font-bold'>Sign in</h1>
                <p className='text-lg'>Use a google account</p>
            </div>
            <div className='text-center w-[60%] m-auto bg-[#4385f5] p-2 flex items-center rounded-lg   '>
            <img src="google-logo.jpg" className='w-[30px] md:w-[50px] h-full  rounded-lg' />
               <button onClick={GoogleSignInHandler} className='text-white text-lnp g  md:text-xl ml-5'>Sign in with google</button> 
            </div>
        </div>
     </div>
     
     </div>
    
   )
 }
 
 export default Login