import React from "react";
import Cards from "../components/Card/Cards";
import ScrollTop from "../components/Global/ScrollTop";

import * as S from "./Home.style";

const Home = () => {
  return (
    <S.HomeContainer>
      <Cards />
      <ScrollTop />
    </S.HomeContainer>
  );
};

export default Home;
