import React from 'react';
import './style.scss'

const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" data-testid='layout-footer'>
      <p>Design & Development  ©{currentYear} <span>Stéphane Lieumont</span></p>
    </footer>
  );
}

export default Footer;