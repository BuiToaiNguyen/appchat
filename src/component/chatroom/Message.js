import { Avatar, Typography } from 'antd'
import { formatRelative } from 'date-fns';
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../Context/AuthProvider';


const WapperStyle= styled.div`
margin-bottom:10px;
    &author{
    font-size: 18px;
    font-weight: bold;
    margin-left:20px
}
    .date{
        margin-left:20px;
        font-size: 11px;
        color:#a7a7a7
}
    .content{
        margin-left: 30px;
    }
    

`;
const WapperStyle2 = styled.div`
    margin-bottom:10px;
     
    .author{
    font-size: 18px;
    font-weight: bold;
    margin-left:20px;
 

    
}
.content{
        margin-right: 30px;
        background-color: blue;
        color:white;
        border-radius :15px;
        padding: 5px 10px 5px 10px;
    }

.date{  
        margin-right:10px;
        font-size: 11px;
        color:#a7a7a7
}
.item{
    display: flex;
    justify-content: flex-end;
}

`;
const formatDate = (second)=>{
    let formatdate ='';
    if(second){
     formatdate =formatRelative(new Date(second *1000),new Date());

     formatdate = formatdate.charAt(0).toUpperCase()+ formatdate.slice(1);
                }
    return formatdate;
}
export default function Message({text,displayName,createAt,photoURL,id}) {
    const {users:{uid}} = useContext(AuthContext);
    useEffect(()=>{
        // console.log(uid)
    },[uid])
    return (

        
        <div>
            {(uid!==id)?(<><WapperStyle>
                <div>
                <Avatar  size='small' src={photoURL}> {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()} </Avatar>
                <Typography.Text  className="author" >{displayName} </Typography.Text >
                <Typography.Text className="date">{formatDate(createAt?.seconds)}</Typography.Text>

            </div>
            <div>
                <Typography.Text className="content">{text}</Typography.Text>

            </div>
            
                 </WapperStyle></>):<WapperStyle2>
                <div className="item">
                <Typography.Text className="date">{formatDate(createAt?.seconds)}</Typography.Text>
           

            </div>
            <div className="item">
                <Typography.Text className="content">{text}</Typography.Text>

            </div>
            
                 </WapperStyle2>} 
            
            
    </div>
    )
}
