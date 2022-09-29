import { Fragment, FunctionComponent } from 'react';
import { ReactComponent as TriangleSVG } from '~/assets/background/triangle.svg'
import { ReactComponent as CircleDoubleSVG } from '~/assets/background/double-circle.svg'
import { ReactComponent as ReapeatPointsSVG } from '~/assets/background/repeat-points.svg'
import { BackgroundProps } from '~/interfaces/component.intf';

import './style.scss';

const Background: FunctionComponent<BackgroundProps> = ({ 
  darken = false, 
  ligthen = false, 
  triangle = true, 
  points = true, 
  circle = true,
  triangleProperties = {
    top: '20%',
    rigth: '20%',
    rotate: '260deg',
    size: '150px',
    delayAnimation: 0
  },
  pointsProperties = {
    top: '80%',
    left: '80%',
    rotate: '145deg',
    size: '300px',
    delayAnimation: 100
  },
  circleProperties = {
    top: '85%',
    rigth: '80%',
    size: '350px',
    delayAnimation: 200
  },
}) => {
  return (
    <div className={`background-svg${ darken ? ' background-svg--darken' : ligthen ? ' background-svg--ligthen' : ''}`} data-testid="background">
      <Fragment>
        { triangle ? (
          <div 
            className='triangle'
            style= {{
              top: triangleProperties.top,
              right: triangleProperties.rigth,
              bottom: triangleProperties.bottom,
              left: triangleProperties.left,
              animationDelay: triangleProperties.delayAnimation?.toString() + 'ms'
            }}
          >
            <TriangleSVG 
              className={`${ darken ? ' fill--grey' : ligthen ? ' fill--primary400' : ' fill--primary100' }`}
              style= {{ 
                width: triangleProperties.size,
                height: triangleProperties.size,
                transform: `rotate(${triangleProperties.rotate})`
              }}
            />
          </div>
        ) : null } 
        { points ? (
          <div 
            className='repeat-point'
            style= {{
              top: pointsProperties.top,
              right: pointsProperties.rigth,
              bottom: pointsProperties.bottom,
              left: pointsProperties.left,
              animationDelay: pointsProperties.delayAnimation?.toString() + 'ms'
            }}
          >
            <ReapeatPointsSVG 
              className={`${ darken ? ' fill--grey' : ligthen ? 'fill--primary400' : 'fill--primary100'}`} 
              style= {{
                transform: `rotate(${pointsProperties.rotate})`,
                width: pointsProperties.size,
                height: pointsProperties.size,
              }}
            />
          </div>
        ) : null } 
        { circle ? (
          <div
            className='circle-double'
            style= {{
              top: circleProperties.top,
              right: circleProperties.rigth,
              bottom: circleProperties.bottom,
              left: circleProperties.left,
              animationDelay: circleProperties.delayAnimation?.toString() + 'ms'
            }}
          >
            <CircleDoubleSVG 
              className={`${ darken ? ' stroke--grey' : ligthen ? 'stroke--primary400' : 'stroke--primary100'}`}
              style= {{
                transform: `rotate(${circleProperties.rotate})`,
                width: circleProperties.size,
                height: circleProperties.size,
              }}
            />
          </div>
        ) : null }
      </Fragment>
    </div>
  );
}

export default Background;
