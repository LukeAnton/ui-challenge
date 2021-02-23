import React from "react";
import Cards from "../components/Card/Cards";
import logo from "../assets/logo.svg";
import menuDash from "../assets/menu-dash.svg";
import profile from "../assets/profile.svg";

import {
  StyledHomeContainer,
  StyleHeaderContainer,
  StyleHeader,
  StyleSVG,
  StyleProfileSVG,
  StyleSecondaryHeader,
  StyleBreadcrumb,
  StylePageTitle,
  StyleFooter,
  StyleCopywrightTag,
  StyleLeftContainer,
  StyleRightContainer,
  StyledLink,
} from "./Home.style";

const Home = () => {
  return (
    <StyledHomeContainer>
      <StyleHeaderContainer>
        <StyleHeader>
          <StyleLeftContainer>
            <StyleSVG src={logo} alt="logo" />
          </StyleLeftContainer>
          <StyleRightContainer>
            <StyleProfileSVG src={menuDash} alt="menu-dash" />
            <StyleProfileSVG src={profile} alt="profile" />
          </StyleRightContainer>
        </StyleHeader>
        <StyleSecondaryHeader>
          <StyleBreadcrumb>{"Dashboard > My apps"}</StyleBreadcrumb>
          <StylePageTitle>{"My apps"}</StylePageTitle>
        </StyleSecondaryHeader>
      </StyleHeaderContainer>
      <Cards />
      <StyleFooter>
        <StyleLeftContainer>
          <StyleCopywrightTag>2019 &copy; NETFRONT</StyleCopywrightTag>
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
