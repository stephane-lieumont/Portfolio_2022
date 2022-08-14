import React from 'react';
import Background from '~/components/Background';
import './style.scss'

const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" data-testid='layout-footer'>
      <Background points={false} darken />
      <p>Designed & Developed on ReactJs ©{currentYear} by <span>Stéphane Lieumont</span></p>
    </footer>
  );
}

export default Footer;