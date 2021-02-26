import React, { useState } from "react";
import toTop from "../../assets/to-top.svg";

import { StyleToTop } from "../../styles/ScrollTop.style";

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    window.scrollY > 10 ? setShowScroll(true) : setShowScroll(false);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <StyleToTop
      showScroll={showScroll}
      onClick={() => scrollTop()}
      src={toTop}
      alt="to-top"
    />
  );
};

export default ScrollTop;
