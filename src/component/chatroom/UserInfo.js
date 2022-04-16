import { Avatar, Button, Space, Typography,Popconfirm } from 'antd'
import { Content } from 'antd/lib/layout/layout';
import {auth, db} from '../firebase/config';

import React from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../Context/AuthProvider';
const WrapperStyled = styled.div`
    display:flex;
    justify-content : space-between;
    padding:12px 16px; 
    border-bottom : 1px solid rgba(82,38,83);

    .userName{
        color:white;
        margin-left:10px 
    }
    `
    
export default function UserInfo() {
 
    const {users:{displayName,photo}} =React.useContext(AuthContext);
    const [isConfirm,setIsConfirm]= React.useState(false)
 
    return (
        <WrapperStyled>
            <div>
                <Avatar  src={photo} >{photo ?"": displayName && displayName.charAt(0)?.toUpperCase()} </Avatar>
            <Typography.Text className="userName">{displayName}</Typography.Text>
            </div>
            <div>
              <Popconfirm placement="bottom" title={"bạn có muốn out"} onConfirm={()=>auth.signOut()} okText="Yes" cancelText="No">
                <Button ghost onClick={()=>setIsConfirm(true)}   >Đăng Xuất </Button>
            </Popconfirm>

            </div>
        </WrapperStyled>
    )
}
