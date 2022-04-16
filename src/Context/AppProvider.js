import React, { Component,useEffect,useState } from 'react'

import { AuthContext } from './AuthProvider';
import useFireStore from '../hook/useFireStore';
import {useFireStore2} from '../hook/useFireStore';
import { uuid } from '../utils/uuid';
export  const AppContext = React.createContext();

export default function AppProvider(  { children}) {

    const [idroomselect, setidroomselect] = useState("");
    const [addroomInvisible, setaddroomInvisible] = useState(false)
    const [alertMess, setAlertMess] = useState(false)
    const [invite, setinvite] = useState(false)
    const {users :{ uid}} = React.useContext(AuthContext);
    const roomsCondition = React.useMemo(()=>{
        return{
            fielName: 'members',
            operator: 'array-contains',
            comparValue:uid
        }
    },[uid])
    const ueser = React.useMemo(()=>{
        return{
            fielName: '',
            operator: "",
            comparValue:" "
        }
    },[uid])
   
    const rooms =useFireStore('rooms',roomsCondition);

        const countUser= useFireStore2('users',ueser);

    
   


    


    const selectedRoom = React.useMemo(
        ()=>rooms.find((room)=>room.id === idroomselect) || {}
    ,[rooms,idroomselect]);
    


    const usersCondition = React.useMemo(()=>{
        return{
            fielName: 'uid',
            operator: 'in',
            comparValue:selectedRoom.members
        }
    },[selectedRoom.members])

  
    
  
    const members=useFireStore('users',usersCondition)

    return (
        <AppContext.Provider value={{alertMess,setAlertMess,invite,setinvite,members,rooms ,addroomInvisible,setaddroomInvisible,idroomselect,setidroomselect,selectedRoom,countUser}}>{children}</AppContext.Provider>
    )

}


