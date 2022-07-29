import gsap, { Power3, Elastic } from 'gsap';
import React, { MouseEvent, useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { RouteAppObject } from '../../interfaces/Routes.intf'
import Colors from '../../sass/themes/colors.module.scss'

import './index.scss';

type NavBarSliderProps = {
  defaultValueOpen?: boolean
  animated?: boolean
  ligth?: boolean
  routeList?: RouteAppObject[]
  onClick?: CallableFunction  
}

const NavBarSlider: React.FunctionComponent<NavBarSliderProps> = ({
    defaultValueOpen = false, 
    animated = true, 
    ligth = false,
    routeList = [],
    onClick
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

  const handleClick = (e : MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const isOpen = !open

    if (!isAnimated) {
      setOpen(isOpen) 
      isOpen ? slideIn.current.restart() : slideOut.current.restart(); 
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
      .to(menu.current.querySelectorAll('li'), { x: 0, opacity: 1, delay: 0.4, stagger: { each: 0.15 }}, 0)
      .to(startPoints.current, { attr: { d: startPoints.current!.getAttribute('d') ?? ''  }, duration: 0.7, ease: Elastic.easeInOut, onComplete: () => setIsAnimated(false) }, "rectangleStart")

    slideOut.current
      .to(wrapper.current, { x: "100%", duration: 0.7, ease: Power3.easeInOut, onStart: () => setIsAnimated(true) }, 0)
      .to(startPoints.current, { attr: { d: endPoints.current!.getAttribute('d') ?? '' }, duration: 0.2, ease: Power3.easeIn }, 0)
      .to(startPoints.current, { attr: { d: startPoints.current!.getAttribute('d') ?? '' }, duration: 0.5, ease: Power3.easeInOut, onComplete: () => setIsAnimated(false) }, ">")
      .pause()
  }, [])

  return (
    <div>
      <div 
        className={`navbar__button${ animated ? ' navbar__button--animated' : ''}${ ligth ? ' navbar__button--ligth' : ''}${ open ? ' open' : ''}`}
        onClick={handleClick}
      >
        <div className='navbar__button__burger'></div>
      </div>

      <div className='navbar__slider' ref={wrapper}>
        <svg fill='none' height='100%' preserveAspectRatio='none' viewBox='0 0 200 400' width='100%' xmlns='http://www.w3.org/2000/svg'>
          <path d='M500 500H0c0 0 0-112 0-250S0 0 0 0l500 0V500z' fill={Colors.secondary} id='start' ref={startPoints}></path>
          <defs>
            <path d='M500 500H118c0 0-118-112-118-250S118 0 118 0l382 0V500z' id='end' ref={endPoints}></path>
            <path d='M500 500H0c0 0 123-112 123-250S0 0 0 0l500 0V500z' id='middle' ref={middlePoints}></path>
          </defs>
        </svg>
        <nav className='navbar__slider__menu'>
          <ul ref={menu}>
          { routeList.map(({ path, label, name }) => (
              path !== '*' ?
              <li key={name}>
                <NavLink to={path}>{label}</NavLink>
              </li>
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
