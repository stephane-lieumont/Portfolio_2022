import React from 'react';

import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom';
import Component from './components/sample/Component.sample';

const App: React.FunctionComponent = () => {
  return (
    <div className="react-app">
      <Router basename={process.env.PUBLIC_URL}>
        <header></header>
          <main>
            <Routes>
              <Route path="/" element={<Component />} ></Route> 
            </Routes>
          </main>
      </Router>
      <footer></footer>
    </div>
  );
}

export default App;
