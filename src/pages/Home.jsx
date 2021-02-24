import React, { useState } from "react";
import Cards from "../components/Card/Cards";
import ScrollTop from "../components/Global/ScrollTop";

import { StyledHomeContainer, StyleToTop } from "./Home.style";

const Home = () => {
  return (
    <StyledHomeContainer>
      <Cards />
      <ScrollTop />
    </StyledHomeContainer>
  );
};

export default Home;
