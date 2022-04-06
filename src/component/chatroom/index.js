import { Row,Col } from 'antd'
import React, { Component } from 'react'
import ChatWindow from './ChatWindow'
import SideBar from './SideBar'

export default class ChatRoom extends Component {
    render() {
        return (
            <div>
               <Row>
                <Col span={8}>
                <SideBar/>
                </Col>
                <Col span={16}>
                <ChatWindow/>
                </Col>
            </Row>
            
            </div>
        )
    }
}
