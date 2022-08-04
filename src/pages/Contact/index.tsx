import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, FunctionComponent } from 'react';
import './style.scss'

const Contact: FunctionComponent = () => {
  return (
    <Fragment>
      <div className='contact'>
        <div className="contact__bg">
          <img src={require('../../assets/profile/profil-stephane-lieumont-contact.jpg')} alt="profil stéphane lieumont"/>
        </div>
        <p>
          Un projet, une question où juste un Hello World ?<br />
          <span>Je suis actuellement à la recherche d'un poste en entreprise.</span>
        </p>
        <ul className='contact__card'>
          <li><FontAwesomeIcon icon={faPhone} className={'fa-icon'}/> 06.37.35.35.79</li>
          <li><FontAwesomeIcon icon={faLocation} className={'fa-icon'}/> 31470 Fontenilles, FRANCE</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Contact;