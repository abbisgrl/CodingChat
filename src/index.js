import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './Css/index.css';
import App from './App';
import { StateProvider } from './Context/StateProvider';
import reducer, { initialState } from './Context/Reducer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState}
        reducer={reducer}>
        <App />
      </StateProvider >
    </BrowserRouter>
  </React.StrictMode>

);


