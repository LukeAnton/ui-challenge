import React, { useState } from "react";
import toTop from "../../assets/to-top.svg";

//Style imports
import * as S from "./ScrollTop.style";

const ScrollTop: React.FC = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  const checkScrollTop = () => {
    window.scrollY > 10 ? setShowScroll(true) : setShowScroll(false);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <S.ToTop
      showScroll={showScroll}
      onClick={() => scrollTop()}
      src={toTop}
      alt="to-top"
    />
  );
};

export default ScrollTop;
