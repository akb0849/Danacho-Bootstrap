import React, { useEffect, useState } from 'react'

import { Button, Icon } from './scrollToTopElements';
const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []); 
  const scrollToTopFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  return (
    <>
    {showButton && (
      <Button onClick={scrollToTopFunction} className="back-to-top">
        <Icon />
      </Button>
    )}
    {/* &#8679; is used to create the upward arrow */}
  </>
  )
}

export default ScrollToTop