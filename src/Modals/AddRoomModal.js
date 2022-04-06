import { Input, Modal,Form } from 'antd'
import {addDocument} from '../component/firebase/sevice'

import React, { useContext } from 'react'
import { AppContext } from '../Context/AppProvider'
import { AuthContext } from '../Context/AuthProvider';

export default function AddRoomModal() {
    const [form] = Form.useForm();
    const {users:{uid}} = React.useContext(AuthContext);
    const {addroomInvisible,setaddroomInvisible} = React.useContext(AppContext);
   const handelOk=()=>{
    addDocument('rooms',{...form.getFieldsValue(),members:[uid]})
    setaddroomInvisible(false);

    form.resetFields();
    }
    const handelCancel =()=>{
        
        setaddroomInvisible(false);
    }
    
    return (
        <div>
            <Modal title="tạo phòng"
            visible={addroomInvisible}
            onOk={()=>handelOk()}
            onCancel={()=>handelCancel()}>
                <Form layout='vertical' form={form}>
                    <Form.Item label="tên phòng" name ='name'>
                        <Input placeholder="nhập tên phòng"/>
                    </Form.Item>
                    <Form.Item label="mô tả" name="description">
                        <Input placeholder ="nhập mô tả"/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
