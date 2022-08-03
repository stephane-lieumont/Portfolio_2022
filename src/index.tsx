import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './config/config.report';
import App from './App';
import { BrowserRouter  as Router } from 'react-router-dom';

import './sass/main.scss'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment >
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.Fragment >
);

reportWebVitals();
