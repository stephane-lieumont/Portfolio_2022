import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import RoutesApp from '../../routes/Routes.app';
import './style.scss'
import NavBarButton from '../NavBarSlider';
import Button from '../../components/Button';

type HeaderProps = {
  menuIsOpen?: boolean
  onClick?: (isOpen: boolean) => void
}

const Header: React.FunctionComponent<HeaderProps> = ({menuIsOpen = false, onClick = () => {}}) => {
  return (
    <header className='header' data-testid='layout-header'>
      <div className={`header__block${ menuIsOpen ? ' header__block--hidden' : ''}`}>
        <div className='header__main'>
          <h1>
            <span className='head-title'>
              <span className='text--primary'>P</span>
              <span>ortfolio</span>
            </span>
            <span className='head-subtitle'>
              <span>Stéphane</span>
              <span className='text--primary text--bold'>Lieumont</span>
            </span>
          </h1>
          <div className='navigation'>
            <ul className='navigation__buttons'>
              <li><Button label='Contact' outlined white /></li>
              <li><Button label='Mon CV' outlined white /></li>
            </ul>
          </div>
        </div>      
        <div className='header__content'>
          <blockquote>
            <p><FontAwesomeIcon size='xs' icon={faQuoteLeft} className="quote" /> La passion est un désir qui se mue en plaisir <FontAwesomeIcon size='xs'icon={faQuoteRight} className="quote" /></p>
            <small>Romain Guilleaumes</small>
          </blockquote>
        </div>        
      </div>
      <NavBarButton routeList={RoutesApp.routeList} onClick={onClick}/>  
    </header>
  );
}

export default Header;