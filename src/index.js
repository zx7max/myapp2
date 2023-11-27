import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { App } from 'antd';
import MyApp from './App';

localStorage.setItem('Access', 0);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <MyApp />
      </App>   
    </BrowserRouter>  
  </React.StrictMode>
);

// 123

