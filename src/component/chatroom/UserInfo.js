import { Avatar, Button, Space, Typography } from 'antd'
import { Content } from 'antd/lib/layout/layout';
import {auth, db} from '../firebase/config';

import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react/cjs/react.development';
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
    return (
        <WrapperStyled>
            <div>
                <Avatar  src={photo} >{photo ?"": displayName && displayName.charAt(0)?.toUpperCase()} </Avatar>
            <Typography.Text className="userName">{displayName}</Typography.Text>
            </div>
            <div>
                <Button ghost onClick={()=> auth.signOut()} >Đăng Xuất </Button>

            </div>
        </WrapperStyled>
    )
}
