import { FunctionComponent } from 'react';
import './style.scss';


const Loader: FunctionComponent = () => {  
  return (
    <div className="loader positionning">
      <div className="lightgreen"></div>
      <div className="darkgreen"></div>
    </div>
  );
}

export default Loader;
