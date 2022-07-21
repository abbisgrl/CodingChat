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
    {/* Providing the initial state and reducer to the app so that all the
    component can use the state for taking the values and dispatch the values */}
      <StateProvider initialState={initialState}
        reducer={reducer}>
        <App />
      </StateProvider >
    </BrowserRouter>
  </React.StrictMode>

);


