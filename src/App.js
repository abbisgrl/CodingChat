import './Css/App.css';
import Sidebar from './Component/Sidebar';
import ChatBox from './Component/ChatBox';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './Component/Login';
import { useStateValue } from './Context/StateProvider';
function App() {
  //taking the user value from react context hook 
  const [{ user }, dispatch] = useStateValue();

  return (
    
    <div className="App">
      {/*If user is not found then login page will render
       otherwise main box with sidebar and chat box will render*/}
      {!user ? (
        <Login />
      ) : (
        <div className='main_box'>
          <Sidebar />
          {/* Setting up the routing according to user id so that for 
          different user,chatbox will show according to them */}
          <Routes>
            <Route path='/rooms/:roomId' element={
              <>
                <ChatBox />
              </>}>
            </Route>

            <Route path='/' element={
              <>
                <ChatBox />
              </>}>
            </Route>

          </Routes>


        </div>)

      }
    </div>
  );
}

export default App;
