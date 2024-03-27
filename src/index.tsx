import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './UniSwap/ColorScheme.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="backgroundColor">
      <App/>
    </div>
  </React.StrictMode>
);