import React from "react";
import Cards from "../components/Card/Cards";
import {
  StyledHomeContainer,
  StyleHeaderContainer,
  StyleHeader,
  StyleSecondaryHeader,
  StyleFooter,
  StyleLeftContainer,
  StyleRightContainer,
  StyledLink,
} from "./Home.style";

const Home = () => {
  return (
    <StyledHomeContainer>
      <StyleHeaderContainer>
        <StyleHeader></StyleHeader>
        <StyleSecondaryHeader></StyleSecondaryHeader>
      </StyleHeaderContainer>
      <Cards />
      <StyleFooter>
        <StyleLeftContainer>
          <p>2019 &copy; NETFRONT</p>
        </StyleLeftContainer>
        <StyleRightContainer>
          <StyledLink to="#">Privacy </StyledLink>|
          <StyledLink to="#"> Terms and Conditions </StyledLink>|
          <StyledLink to="#"> Contact</StyledLink>
        </StyleRightContainer>
      </StyleFooter>
    </StyledHomeContainer>
  );
};

export default Home;
