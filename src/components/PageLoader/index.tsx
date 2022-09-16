import { FunctionComponent } from 'react';
import './style.scss';

type PageLoaderProps = {
  visible?: boolean
}

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
        <span style={{'--i':1} as React.CSSProperties}>C</span>
        <span style={{'--i':2} as React.CSSProperties}>h</span>
        <span style={{'--i':3} as React.CSSProperties}>a</span>
        <span style={{'--i':4} as React.CSSProperties}>r</span>
        <span style={{'--i':5} as React.CSSProperties}>g</span>
        <span style={{'--i':6} as React.CSSProperties}>e</span>
        <span style={{'--i':7} as React.CSSProperties}>m</span>
        <span style={{'--i':8} as React.CSSProperties}>e</span>
        <span style={{'--i':9} as React.CSSProperties}>n</span>
        <span style={{'--i':10} as React.CSSProperties}>t</span>
        </div>
    </div>
  );
}

export default PageLoader;
