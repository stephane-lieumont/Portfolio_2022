import React, { useEffect, useRef } from "react";
import useWindowSize from "../../hooks/useWindowsSize";
import "./style.scss";

type SmoothScrollProps = {
  children: JSX.Element,
  offset?: boolean,
  onChanged?: (scrollY: number) => void
}

const SmoothScroll: React.FunctionComponent<SmoothScrollProps> = ({ children, offset = false, onChanged = () => {} }) => {
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

      onChanged(params.rounded)  
      requestAnimationFrame(() => smoothScrollingHandler());
    };

    requestAnimationFrame(() => smoothScrollingHandler());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // timer fix scale effect
    let timer = setTimeout(() => {
      setBodyHeight();
      clearTimeout(timer)
    }, 700);    
  }, [windowSize]);

  const setBodyHeight = () => {
    if(scrollingContainerRef.current) {
      document.body.style.height = `${ scrollingContainerRef.current.getBoundingClientRect().height }px`
    }    
  };

  return (
    <div className="smoothscroll-container">
      <div className={`smoothscroll-container__child${ offset ? ' smoothscroll-container__child--offset' : ''}`} ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;