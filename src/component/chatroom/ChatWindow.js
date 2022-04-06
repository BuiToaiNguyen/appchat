import { UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Input, Row, Tooltip,Form ,Alert} from 'antd'
import ButtonGroup from 'antd/lib/button/button-group';
import { add } from 'date-fns';
import React, { useContext ,useState } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../Context/AppProvider';
import { AuthContext } from '../../Context/AuthProvider';
import Message from './Message';
import {addDocument} from '../firebase/sevice'
import useFireStore from '../../hook/useFireStore';
 const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 0 16px;
    align-items: center;
    border-bottom:1px solid rgba(230,230,250);
    .header{
        &_info{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        &_title{
             margin: 0;
             font-weight: bold;
        }
        &_decript{
                font-size: 12px;
        }
    }
 `;
 const ContentStyled = styled.div`
    height: calc(100% - 56px);
    display: flex;
    flex-direction: column;
    padding: 11px;
    justify-content: flex-end;

 `;
 const ButtonGroupStyle =styled.div`
 
    display: flex;
    align-items: center;
 `
 const MessageListStyle = styled.div`
   max-height: 100%;
   overflow-y:auto;

 `;
 const WrapperStyle =  styled.div`
    height: 100vh;
 `;
  const FormStyle = styled(Form)`
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 2px 2px 0;
    border: 2px solid rgb(230,230,230);
    border-radius: 20px;
    .ant-form-item{
        flex:1;
        margin-bottom: 0;
    }
  `;
export default function ChatWindow() {
    const {selectedRoom,members,setinvite} =React.useContext(AppContext)
    const {users:{uid,photo,displayName}} =React.useContext(AuthContext)
    const inviteClick=()=>{
        setinvite(true)
    }
    const [inputvalue, setinputvalue] = useState('')
    const handelInput=(e)=>{
        setinputvalue(e.target.value);
    }
    const handleSubmit =()=>{
        addDocument('messages',{
            text:inputvalue,
            uid,
            photo,
            displayName,
            roomid:selectedRoom.id
        });
        form.resetFields(['message'])
    }
    const [form]= Form.useForm()

    const condition =React.useMemo(()=>({
        fielName:'roomid',
        operator:'==',
        comparValue:selectedRoom.id
    }),[selectedRoom.id])
    const messages = useFireStore('messages',condition)
    ///console.log(messages);
    return (
      
        <WrapperStyle>

         {selectedRoom.id?(
             <>
               <HeaderStyled>
                <div className="header_info">
                    <p className="header_title">{selectedRoom.name}</p>
                    <span className="header_decript">{selectedRoom.description} </span>
                </div>
                <ButtonGroupStyle>
                    <Button icon={<UserAddOutlined/>} type='text' onClick={()=>inviteClick()}>Mời</Button>
                    <Avatar.Group size="small" maxCount={2}> 
                        {members.map(member =>
                             <Tooltip key ={member.id} title={member.displayName} >
                             <Avatar src={member.photoURL}> {member.photoURL ? ' ' : member.displayName?.charAt(0)?.toUpperCase()}</Avatar>
                         </Tooltip>)}
                        
                       
                        

                    </Avatar.Group>
                </ButtonGroupStyle>
            </HeaderStyled>
            <ContentStyled>
                <MessageListStyle>

                    {messages.map((mess)=>(
                        <Message key={mess.id} text={mess.text} photoURL={mess.photo}  createAt={mess.createAt} displayName={mess.displayName} id={mess.uid}/>
                      
                    ) 
                    )}
                   
                </MessageListStyle>
                <FormStyle  form={form}>
                    <Form.Item name='message'>
                    <Input  onChange={(e)=>handelInput(e)} onPressEnter={()=>handleSubmit()} placeholder='nhập tin nhắn' bordered={false} autoCapitalize="off"/>
                    </Form.Item>

                </FormStyle>

            </ContentStyled>
             </>
         ) : (
            <Alert
              message='Hãy chọn phòng'
              type='info'
              showIcon
              style={{ margin: 5 }}
              closable
            />
          ) }

        </WrapperStyle>
    )
}
