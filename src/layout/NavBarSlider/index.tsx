import React, { MouseEvent, useEffect, useState, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import useWindowSize from '~/hooks/useWindowsSize';
import gsap, { Power3, Elastic } from 'gsap';
import { NavBarSliderProps } from '~/interfaces/component.intf';
import Colors from '~/sass/themes/colors.module.scss'
import Screen from '~/sass/abstract/variables.module.scss'

import './style.scss';

const NavBarSlider: React.FunctionComponent<NavBarSliderProps> = ({
    defaultValueOpen = false, 
    animated = true, 
    ligth = false,
    routeList = [],
    onClick,
  }) => {
  
  const wrapper = useRef<HTMLDivElement>(null)
  const menu = useRef<HTMLUListElement>(null)
  const startPoints = useRef<SVGPathElement>(null)
  const middlePoints = useRef<SVGPathElement>(null)
  const endPoints = useRef<SVGPathElement>(null)
  const slideIn = useRef(gsap.timeline())
  const slideOut = useRef(gsap.timeline())

  const [open, setOpen] = useState<boolean>(defaultValueOpen)
  const [isAnimated, setIsAnimated] = useState<boolean>(false)
  const [mobileNav, setMobileNav] = useState<boolean>(true)

  const windowSize = useWindowSize();
  const location = useLocation()

  const handleClick = (e : MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const isOpen = !open

    if (!isAnimated) {
      setOpen(isOpen) 
      isOpen ? slideIn.current.restart() : slideOut.current.restart() 
      if(onClick) onClick(isOpen)
    }
  }

  useEffect(() => {
    if(!wrapper.current || !menu.current || !startPoints.current ||  !middlePoints.current || !endPoints.current ) return

    slideIn.current = gsap.timeline({ paused: true })
    slideOut.current = gsap.timeline({ paused: true })

    slideIn.current
      .to(wrapper.current, { x:0, duration: 0.9, ease: Power3.easeInOut, onStart: () => setIsAnimated(true) })
      .to(startPoints.current, { attr: { d: middlePoints.current!.getAttribute('d') ?? '' }, duration: 0.2, ease: Elastic.easeInOut}, 0).addLabel("rectangleStart", ">")
      .to(startPoints.current, { attr: { d: startPoints.current!.getAttribute('d') ?? ''  }, duration: 0.7, ease: Elastic.easeInOut, onComplete: () => setIsAnimated(false) }, "rectangleStart")

    slideOut.current
      .to(wrapper.current, { x: "100%", duration: 0.7, ease: Power3.easeInOut, onStart: () => setIsAnimated(true) }, 0)
      .to(startPoints.current, { attr: { d: endPoints.current!.getAttribute('d') ?? '' }, duration: 0.2, ease: Power3.easeIn }, 0)
      .to(startPoints.current, { attr: { d: startPoints.current!.getAttribute('d') ?? '' }, duration: 0.5, ease: Power3.easeInOut, onComplete: () => setIsAnimated(false) }, ">")
      .pause()
  }, [])

  useEffect(() => {
    windowSize.width <  Number(Screen.screenXl.replace('px', '')) ? setMobileNav(true) : setMobileNav(false)
  }, [windowSize])

  return (
    <div data-testid='navbar'>
      <div  data-testid='navbar-button' className={`navbar__button${ animated ? ' navbar__button--animated' : ''}${ ligth ? ' navbar__button--ligth' : ''}${ open ? ' open' : ''}`} onClick={handleClick} >
        <div className='navbar__button__burger'></div>
      </div>
      <div className={`navbar__slider${ open ? ' open' : ''}`} ref={wrapper}>
        <svg fill='none' height='100%' preserveAspectRatio='none' viewBox='0 0 210 297' width='100%' xmlns='http://www.w3.org/2000/svg'>
          <path d='M 210,297 H 0 C 0,297 0,230.472 0,148.5 0,66.528001 0,0 0,0 h 210 z' fill={Colors.secondary} id='start' ref={startPoints}></path>
          <defs>
            <path d='M 210,297 H 49.560001 C 49.560001,297 0,230.472 0,148.5 0,66.528001 49.560001,0 49.560001,0 H 210 Z' id='end' ref={endPoints}></path>
            <path d='M 210,297 H 0 C 0,297 51.660001,230.472 51.660001,148.5 51.660001,66.528001 0,0 0,0 h 210 z' id='middle' ref={middlePoints}></path>
          </defs>
        </svg>
        <nav className='navbar__slider__menu'>
          <ul ref={menu}>
          { routeList.map(({ path, label, name, params }, index) => (
              path !== '*' && params?.mainMenuEnabled !== false ?
              <li className={ `${open ? `delay--${index}` : ''}${ location.pathname === path ? ' active' : '' }`} key={name} onClick={handleClick}><NavLink to={path}>{label}</NavLink></li>
              : mobileNav === true && (name === 'contact') ?
              <li className={ open ? `delay--${index}` : ''} key={name} onClick={handleClick}><NavLink to={path}>{label}</NavLink></li>
              : null
            )) 
          }
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBarSlider;
