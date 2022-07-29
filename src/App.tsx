import React, { useState } from 'react';

import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom';
import SocialSideBar from './components/SocialSideBar';
import Header from './layout/Header';
import RoutesApp from './routes/Routes.app';

const App: React.FunctionComponent = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  const handleClickMenu = (value: boolean) => {
    setMenuIsOpen(value)
  }

  return (
    <div data-testid="app" className="react-app">
      <Router basename={process.env.PUBLIC_URL}>
        <Header onClick={handleClickMenu} menuIsOpen={menuIsOpen} />
        <main className={`${menuIsOpen ? 'translate' : ''}`}>
          <div className='main-content'>
          <Routes>
            { RoutesApp.routeList.map(({ path, Component, title }) => (
              <Route key={path} path={path} element={<Component title={title} />} /> 
            ))}
          </Routes>
          </div>
        </main>
        <SocialSideBar menuIsOpen={menuIsOpen} />
      </Router>      
    </div>
  );
}

export default App;
