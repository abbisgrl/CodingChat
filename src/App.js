import './Css/App.css';
import Sidebar from './Component/Sidebar';
import ChatBox from './Component/ChatBox';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './Component/Login';
function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
      <div className='main_box'>
        <Sidebar />
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
