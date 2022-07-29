import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Colors from '../../sass/themes/colors.module.scss'
import { ArtstationIcon } from '../../assets/icons/SocialIconsCustom';
import './index.scss';

const SocialSideBar: React.FunctionComponent = () => {
 
  return (
    <div className='social-sidebar'>
      <ul>
        <li><SocialIcon url='https://github.com/StephaneLi' bgColor={Colors.secondary} /></li>
        <li><SocialIcon url='https://www.linkedin.com/in/stephane-lieumont/'  bgColor={Colors.secondary} /></li>
        <li><SocialIcon url='https://s-lieumont.artstation.com/'  bgColor={Colors.secondary} defaultSVG={ ArtstationIcon }  /></li>
      </ul>
    </div>
  );
}

export default SocialSideBar;
