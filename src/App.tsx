import React from 'react';

import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import RoutesApp from './routes/Routes.app';

const App: React.FunctionComponent = () => {
  return (
    <div data-testid="app" className="react-app">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <main>
          <div className='main-content'>
          <Routes>
            { RoutesApp.routeList.map(({ path, Component, title }) => (
              <Route key={path} path={path} element={<Component title={title} />} /> 
            ))}
          </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
