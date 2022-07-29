import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Colors from '../../sass/themes/colors.module.scss'
import { ArtstationIcon } from '../../assets/icons/SocialIconsCustom';
import './index.scss';

type SocialSideBarProps = {
  menuIsOpen?: boolean
}

const SocialSideBar: React.FunctionComponent<SocialSideBarProps> = ({menuIsOpen = false}) => {
 
  return (
    <div className={`social-sidebar${ menuIsOpen ? ' social-sidebar--hidden' : ''}`}>
      <ul>
        <li><SocialIcon url='https://github.com/StephaneLi' bgColor={Colors.secondary} /></li>
        <li><SocialIcon url='https://www.linkedin.com/in/stephane-lieumont/'  bgColor={Colors.secondary} /></li>
        <li><SocialIcon url='https://s-lieumont.artstation.com/'  bgColor={Colors.secondary} defaultSVG={ ArtstationIcon }  /></li>
      </ul>
    </div>
  );
}

export default SocialSideBar;
