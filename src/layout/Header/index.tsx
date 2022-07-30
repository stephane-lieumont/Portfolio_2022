import RoutesApp from '../../routes/Routes.app';
import './style.scss'
import NavBarButton from '../NavBarSlider';
import Button from '../../components/Button';

type HeaderProps = {
  menuIsOpen?: boolean
  menuIsLigth?: boolean
  onClick?: (isOpen: boolean) => void
}

const Header: React.FunctionComponent<HeaderProps> = ({menuIsOpen = false, menuIsLigth = false, onClick = () => {}}) => {
  return (
    <header className='header' data-testid='layout-header'>
      <div className={`header__main${ menuIsOpen ? ' header__main--hidden' : ''}`}>
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
      <NavBarButton routeList={RoutesApp.routeList} ligth={menuIsLigth} onClick={onClick}/>  
    </header>
  );
}

export default Header;