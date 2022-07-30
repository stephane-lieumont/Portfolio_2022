import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './config/config.report';

import './sass/main.scss'
import App from './App';
import { BrowserRouter  as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
