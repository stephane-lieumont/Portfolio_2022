import React from "react";
import Background from "~/components/Background";

import "./style.scss";

const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" data-testid="footer">
      <Background
        points={false}
        darken
        triangleProperties={{
          top: "30%",
          left: "70%",
          rotate: "210deg",
          size: "130px",
          delayAnimation: 0,
        }}
        circleProperties={{
          top: "60%",
          rigth: "63%",
          size: "250px",
          delayAnimation: 300,
        }}
      />
      <p>
        Designed & Developed on ReactJs ©{currentYear} by <span>Stéphane Lieumont</span>
      </p>
    </footer>
  );
};

export default Footer;
