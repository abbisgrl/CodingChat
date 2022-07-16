import './Css/App.css';
import Sidebar from './Component/Sidebar';
import ChatBox from './Component/ChatBox';
function App() {
  return (
    <div className="App">
      <div className='main_box'>
        <Sidebar />
        <ChatBox/>
      </div>
    </div>
  );
}

export default App;
