import React from "react";

import "./style.scss";

const Loader: React.FunctionComponent = () => {
  return (
    <div className="loader positionning" data-testid="loader">
      <div className="lightgreen"></div>
      <div className="darkgreen"></div>
    </div>
  );
};

export default Loader;
