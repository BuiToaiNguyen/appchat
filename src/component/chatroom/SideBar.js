import { Row,Col } from 'antd'
import React from 'react'
import RoomList from './RoomList'
import UserInfo from './UserInfo'
import styled from 'styled-components';
import {auth} from '../firebase/config';
const StyleSideBar = styled.div`
    background:	#3399FF;
    color:white;
    height:100vh;

`;
export default function SideBar() {
    return (
        <StyleSideBar>
            <Row>
                <Col span={24}><UserInfo/></Col>
                <Col span={24}><RoomList/></Col>
            </Row>
        </StyleSideBar>
    )
}
