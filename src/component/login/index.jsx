import React from 'react'
import {Row ,Col,Button,Typography } from 'antd';
import firebase , { auth, db } from '../firebase/config.js';
import {useHistory} from 'react-router-dom';
import { addDocument, generateKeywords } from '../firebase/sevice.js';
import { uuid} from '../../utils/uuid'
import { AppContext } from '../../Context/AppProvider.js';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../Context/AuthProvider.js';
import { doc, getDoc } from "firebase/firestore";


const { Title }=Typography 
const fbProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
    const { countUser,rooms } = useContext(AppContext);
    const { setUser,setLoading } = useContext(AuthContext);
    const history = useHistory();
    var Roomid=[]
    const idRooms="2PK6ky75LQEBk9AwQ6oJ";
    React.useEffect(()=>{
    var docRef = db.collection("rooms").doc(idRooms);
    docRef.get().then((doc) => {
    if (doc.exists) {
        Roomid =doc.data().members;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
    },[])
    

      const handlelogin = async ()=>{
      const {additionalUserInfo,user} =  await auth.signInWithPopup(fbProvider)

      if(additionalUserInfo.isNewUser){
        addDocument('users',{
            displayName:user.displayName,
            email:user.email,
            photoURL:user.photoURL,
            uid:user.uid,
            providerId:additionalUserInfo.providerId,
            keywords:generateKeywords(user.displayName)
        })
        const roomRef = db.collection('rooms').doc(idRooms);
       
        roomRef.update({
        members: [...Roomid,user.uid]
    });

        
      }
    }

    return (
        <div>
            <Row justify="center" style={{minWidth:500}}>
                <Col span={8}>
                <Title style={{textAlign:'center'} } level={3}>App Chat</Title>
                {/* <Button style={{width:'100%' , marginBottom:10}} onClick={handleLoginUknown}>Đăng Nhập Ẩn danh</Button> */}
                <Button style={{width:'100%' , marginBottom:5}} onClick={handlelogin}>Đăng Nhập Google</Button>

                </Col>
            </Row>
        </div>
    )
}
