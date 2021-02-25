import React from "react";
import {
  StyleFooter,
  StyleCopywrightTag,
  StyleLeftContainer,
  StyleRightContainer,
  StyledLink,
} from "../../styles/Footer.style";

const Footer = () => {
  return (
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
  );
};

export default Footer;
