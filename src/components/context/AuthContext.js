import { createContext , useContext , useEffect,useState } from "react";
import { 

    GoogleAuthProvider ,
     signInWithPopup , 
     signInWithRedirect ,
      signOut , 
      onAuthStateChanged  //to check if the user is authenticated

    } from "firebase/auth";

    import {auth} from "../../firebase"

const AuthContext = createContext('');

export const AuthContextProvider = ({children}) => {

    const [user , setUser] = useState({})

    const GoogleSigIn =()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth , provider)

    }

    const Logout = ()=>{
          signOut(auth)
    }

       useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth , (currentUser) =>{
             setUser(currentUser)

             console.log('User' , currentUser)
          })

          return () =>{
             unsubscribe()
          }
       } , [])

    
     return <AuthContext.Provider value={{GoogleSigIn , user , Logout}}>
        {children}
     </AuthContext.Provider>
}


export const UserAuth = ()=>{
     return useContext(AuthContext);
}