import React from "react";
import Cards from "../components/Card/Cards";
import ScrollTop from "../components/Global/ScrollTop";

import { StyledHomeContainer } from "./Home.style";

const Home = () => {
  return (
    <StyledHomeContainer>
      <Cards />
      <ScrollTop />
    </StyledHomeContainer>
  );
};

export default Home;
