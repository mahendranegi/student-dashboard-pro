import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from "./assets/styled";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <div className='globalCss'>
    <App />
    </div>
    </GlobalStyle>
  </React.StrictMode>
);


