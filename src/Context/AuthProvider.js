import React, { Component,useEffect,useState } from 'react'
import { useHistory } from 'react-router-dom';
import {auth} from '../component/firebase/config';
import { Spin } from 'antd';
export  const AuthContext = React.createContext();

export default function AuthProvider(  { children}) {
    const history = useHistory();

    const [users,setUser] =  useState([])
     const [loading, setLoading] = useState(true)
    useEffect(()=>{

    const uncribe =  auth.onAuthStateChanged((user)=> {
          
            if(user){
               var photo = {user}.user.photoURL;
               var uid = {user}.user.uid;
               var displayName = {user}.user.displayName;
               var email = {user}.user.email;


                setUser({

                    uid,displayName,email,photo
                }
                )
               

                setLoading(false);
                
                
                history.push('/');
                return ;
            }
            setLoading(false);

           history.push('/login');
               
            
        });
        return ()=>{
            uncribe();
        }

    },[history])
    
   
    return (
        <AuthContext.Provider value={{setLoading,setUser,users}}>

        { loading ?  <Spin/> : children}

        </AuthContext.Provider>
    )
}


