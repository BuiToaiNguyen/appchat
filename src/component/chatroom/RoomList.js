import React,{useContext} from 'react'
import { Button, Collapse, Typography,Avatar } from 'antd'
import styled from 'styled-components';
import {PlusSquareOutlined} from '@ant-design/icons';
import { AuthContext } from '../../Context/AuthProvider';
import useFireStore from '../../hook/useFireStore';
import AppProvider, { AppContext } from '../../Context/AppProvider';
const {Panel} =Collapse;

const PanelStyled = styled(Panel)` 
    &&&{
        .ant-collapse-header{
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
    margin-left: 10px;
    margin-bottom : 5px;
    color:white;
    &&&{
        color:white;
    }
    min-width:100px ;
    font-size:1.3rem

`
const BoxLink = styled.div`
    display: flex;
    justify-content :flex-start;
    align-items :center;
    width :100%;
    height :50px;
    margin: 8px  ;

`
const Avatarbox = styled.div`
    width:50px;
    height:50px;
    border-radius:100% ;
    background-color:white;
    position:relative;
    cursor:pointer ;


`
const AvataConten = styled.div`

    margin: auto;
    font-size: 2.5rem;
    width: 100%;
    text-align: center;
    height: 100%;
    font-weight: 700;
    margin-top: -8px;
`
export default function RoomList() {
   const { rooms, setaddroomInvisible,setidroomselect } = React.useContext(AppContext);
    const handleAddRoom=()=>{
        setaddroomInvisible(true)
    }
    /* console.log(rooms) */

    

   return (
      <Collapse ghost defaultActiveKey={['1']}>
          <PanelStyled header="danh sach cac phong "key='1'>
              {
                  rooms.map((room)=>(
                    <BoxLink onClick={()=>setidroomselect(room.id)}>
                    <Avatarbox>
                    <AvataConten>{room.members.length}</AvataConten>
                    </Avatarbox>
                    <LinkStyled key={room.id}>{room.name} </LinkStyled>
                    

                    </BoxLink>
                  ))
              }
           
         
            <Button type="text" icon={<PlusSquareOutlined/>} className="addRoom " onClick={handleAddRoom}> Thêm Phòng</Button>
          </PanelStyled>
      </Collapse>
    )
}
