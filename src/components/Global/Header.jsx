import React from "react";
import logo from "../../assets/logo.svg";
import menuDash from "../../assets/menu-dash.svg";
import miniNav from "../../assets/mini-nav.svg";
import profile from "../../assets/profile.svg";

import {
  StyleHeaderContainer,
  StyleHeader,
  StyleSVG,
  StyleProfileSVG,
  StyleSecondaryHeader,
  StyleBreadcrumb,
  StylePageTitle,
  StyleLeftContainer,
  StyleRightContainer,
} from "../../styles/Header.style";

const Header = () => {
  return (
    <StyleHeaderContainer className="render-font">
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
  );
};

export default Header;
