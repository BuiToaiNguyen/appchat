import React,{useContext} from 'react'
import { Button, Collapse, Typography } from 'antd'
import styled from 'styled-components';
import {PlusSquareOutlined} from '@ant-design/icons';
import { AuthContext } from '../../Context/AuthProvider';
import useFireStore from '../../hook/useFireStore';
import AppProvider, { AppContext } from '../../Context/AppProvider';
const {Panel} =Collapse;

const PanelStyled = styled(Panel)` 
    &&&{
        .ant-collapse-header, p{
            color:white;
        }
        .ant-collapse-content-box {
            padding: 0 40px;
        }
        .addRoom{
            color:white;
            padding: 0;
        }
    }
    color:white;
`;
const LinkStyled = styled(Typography.Link)   `
    display: block;
    margin-bottom : 5px;
    color:white;
    &&&{
        color:white;
    }

`
export default function RoomList() {
   const { rooms, setaddroomInvisible,setidroomselect } = React.useContext(AppContext);
    const handleAddRoom=()=>{
        setaddroomInvisible(true)
    }
    

   return (
      <Collapse ghost defaultActiveKey={['1']}>
          <PanelStyled header="danh sach cac phong "key='1'>
              {
                  rooms.map((room)=>(
                    <LinkStyled key={room.id} onClick={()=>setidroomselect(room.id)}>{room.name} </LinkStyled>
                  ))
              }
           
         
            <Button type="text" icon={<PlusSquareOutlined/>} className="addRoom " onClick={handleAddRoom}> Thêm Phòng</Button>
          </PanelStyled>
      </Collapse>
    )
}
