import './Css/App.css';
import Sidebar from './Component/Sidebar';
import ChatBox from './Component/ChatBox';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
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


      </div>
    </div>
  );
}

export default App;
