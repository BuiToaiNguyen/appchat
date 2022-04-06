

import React,{useEffect,useState} from 'react'
import { db } from '../component/firebase/config'
 const  useFireStore =( collection ,condition)=> {
  const [document,setDocument] =  useState([])
      React.useEffect(()=>{
       let collectionRef =db.collection(collection).orderBy('createAt');
       if(condition){
         if(!condition.comparValue  || !condition.comparValue.length ){
           return ;
         }
         collectionRef =  collectionRef.where(condition.fielName, condition.operator,condition.comparValue)

       }
       const unscribe=  collectionRef.onSnapshot((snapshot) =>{
         const document = snapshot.docs.map((doc)=>{
      
          
          return {
             
                ...doc.data(),
                id:doc.id
               
            }
          
          
          

           
         }
         )
         setDocument(document);
        
       }
       
       )
       
      return unscribe
    },[collection,condition]) ;
     return document;
};
export default useFireStore;
