import React, { useEffect, useRef } from "react";
import useWindowSize from "../../hooks/useWindowsSize";
import "./index.scss";

type SmoothScrollProps = {
  children: JSX.Element
}

const SmoothScroll: React.FunctionComponent<SmoothScrollProps> = ({ children }) => {
  const windowSize = useWindowSize();
  const scrollingContainerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const params = {
      ease: 0.1,
      current: 0,
      previous: 0,
      rounded: 0,
    };

    const smoothScrollingHandler = () => {
      params.current = window.scrollY;
      params.previous += (params.current - params.previous) * params.ease;
      params.rounded = Math.round(params.previous);
  
      if(scrollingContainerRef.current) {
        params.previous > 1 ?
        scrollingContainerRef.current.style.transform = `translateY(-${params.rounded }px)` :
        scrollingContainerRef.current.style.transform = `translateY(0px)`
      }
  
      requestAnimationFrame(() => smoothScrollingHandler());
    };

    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  useEffect(() => {
    // timer fix scale effect
    let timer = setTimeout(() => {
      setBodyHeight();
      clearTimeout(timer)
    }, 500);    
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${ scrollingContainerRef.current!.getBoundingClientRect().height }px`
  };

  return (
    <div className="smoothscroll-container">
      <div className="smoothscroll-container__child" ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;