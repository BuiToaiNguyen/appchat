import './App.css';
import Login from './component/login';
import {Route ,Switch,BrowserRouter} from 'react-router-dom';
import ChatRoom from './component/chatroom';
import AuthProvider  from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';

import InviteModal from './Modals/InviteModal';
import AddRoomModal from './Modals/AddRoomModal';
import Alert from './component/chatroom/Alert';
export default function  App() {
  return (
  <BrowserRouter>
  <AuthProvider>
    <AppProvider>
  <Switch>

    <Route component={Login} path="/login"/>
    <Route component={ChatRoom} path="/"/>

  </Switch>
 <AddRoomModal/>
 <InviteModal/>
  </AppProvider>
  </AuthProvider>
  </BrowserRouter>
    
  )
}

