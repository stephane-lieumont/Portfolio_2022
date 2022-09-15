import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import Background from '~/components/Background'
import Button from '~/components/Button'
import { PageProps } from '~/interfaces/Component.intf'
import RoutesApp from '~/routes/Routes.app'
import { useAppSelector } from '~/store/main.store'
import './style.scss'

const Home: FunctionComponent<PageProps> = ({title}) => {

  const navigate = useNavigate()
  const currentPage = useRef<HTMLDivElement>(null)
  const headerheigth = useAppSelector((state) => state.layoutSlice.headerHeigth)

  const [imgLoaded, setImgLoaded] = useState<boolean>(false) 

  const linkPortfolioDev = RoutesApp.getRouteByName('dev')?.path
  const linkPortfolioCgi = RoutesApp.getRouteByName('cgi')?.path

  useEffect(() => {
    document.title = title ?? 'document title not found'
  }, [title])

  return (
    <div ref={currentPage}  className={`min-heigth-screen homepage${ !imgLoaded ? ' homepage--loading' : ''}`} data-testid='page-home'>
      <section className='homepage__leftside' style={{ paddingTop: headerheigth + 'px' }}>
        <blockquote>
          <p><FontAwesomeIcon size='xs' icon={faQuoteLeft} className="quote" /> La passion est un désir qui se mue en plaisir <FontAwesomeIcon size='xs'icon={faQuoteRight} className="quote" /></p>
          <small>Romain Guilleaumes</small>
        </blockquote>
          { imgLoaded && (
            <Background 
              ligthen
              triangleProperties = {{
                top: '20%',
                rigth: '20%',
                rotate: '260deg',
                size: '150px',
                delayAnimation: 0
              }}
              pointsProperties = {{
                top: '80%',
                left: '70%',
                rotate: '145deg',
                size: '400px',
                delayAnimation:150
              }}
              circleProperties = {{
                top: '85%',
                rigth: '80%',
                size: '350px',
                delayAnimation: 300
              }} 
            />
          )}
          <div className='homepage__leftside__content'>
            <h2 className={`reveal${ imgLoaded ? ' reveal--3' : ''}`}>
              Developpeur Frontend & <span className='text--primary'>Graphiste 3D</span>
            </h2>
            <p className={`reveal${ imgLoaded ? ' reveal--4' : ''}`}>
              Captivé par les nouvelles technologies depuis 2006, ma curiosité m’a amené à découvrir le développement informatique et le graphisme 3D.
            </p>
            <div className='homepage__leftside__content__nav'>
              <div className={`reveal${ imgLoaded ? ' reveal--5' : ''}`}>
                <Button label='profil dev' onClick={linkPortfolioDev ? () => navigate(linkPortfolioDev) : () => {} } />
              </div>
              <div className={`reveal${ imgLoaded ? ' reveal--6' : ''}`}>
                <Button label="profil 3D" outlined onClick={linkPortfolioCgi ? () => navigate(linkPortfolioCgi) : () => {}} />
              </div>
            </div>
          </div>
      </section>
      <section className='homepage__rigthside background--primary' style={{ paddingTop: headerheigth + 'px' }}>
        { imgLoaded && (
          <Background 
            triangle={false} 
            points={false}
            circleProperties = {{
              top: '85%',
              left: '88%',
              size: '250px',
              delayAnimation: 300
            }}        
          />
        )}
        <img 
          className={!imgLoaded ? 'loading' : '' } 
          width={600} 
          height={470} 
          onLoad={() => setImgLoaded(true) } 
          src={require('~/assets/profile/profil-stephane-lieumont-min.png')} 
          alt='profil stéphane lieumont'
        />
      </section>
    </div>
  )
}

export default Home;