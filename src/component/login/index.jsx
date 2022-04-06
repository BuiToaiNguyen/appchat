import React from 'react'
import {Row ,Col,Button,Typography } from 'antd';
import firebase , { auth } from '../firebase/config.js';
import {useHistory} from 'react-router-dom';
import {db} from '../firebase/config';
import { addDocument, generateKeywords } from '../firebase/sevice.js';

const { Title }=Typography 
const fbProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
    const handlelogin = async ()=>{
      const {additionalUserInfo,user} =  await auth.signInWithPopup(fbProvider)
     console.log(user);

      if(additionalUserInfo.isNewUser){
        addDocument('users',{
            displayName:user.displayName,
            email:user.email,
            photoURL:user.photoURL,
            uid:user.uid,
            providerId:additionalUserInfo.providerId,
            keywords:generateKeywords(user.displayName)
        })
        
      }
    }
   


    return (
        <div>
            <Row justify="center" style={{height:800}}>
                <Col span={8}>
                <Title style={{textAlign:'center'} } level={3}>App Chat</Title>
                <Button style={{width:'100%' , marginBottom:10}}>Đăng Nhập FaceBook</Button>
                <Button style={{width:'100%' , marginBottom:5}} onClick={handlelogin}>Đăng Nhập Google</Button>

                </Col>
            </Row>
        </div>
    )
}
