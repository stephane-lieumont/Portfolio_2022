import { FunctionComponent, CSSProperties } from 'react';
import { PageLoaderProps } from '~/interfaces/component.intf';

import './style.scss';

const PageLoader: FunctionComponent<PageLoaderProps> = ({ visible = true }) => {  
  return (
    <div className={`page-loader${ visible ? ' visible' : '' }`}>
      <div className="pacman-container">
        <div className="pacman"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
      </div>
      <div className="loading">
        <span style={{'--i':1} as CSSProperties}>C</span>
        <span style={{'--i':2} as CSSProperties}>h</span>
        <span style={{'--i':3} as CSSProperties}>a</span>
        <span style={{'--i':4} as CSSProperties}>r</span>
        <span style={{'--i':5} as CSSProperties}>g</span>
        <span style={{'--i':6} as CSSProperties}>e</span>
        <span style={{'--i':7} as CSSProperties}>m</span>
        <span style={{'--i':8} as CSSProperties}>e</span>
        <span style={{'--i':9} as CSSProperties}>n</span>
        <span style={{'--i':10} as CSSProperties}>t</span>
        </div>
    </div>
  );
}

export default PageLoader;
