import React from "react";
import logo from "../../assets/logo.svg";
import menuDash from "../../assets/menu-dash.svg";
import miniNav from "../../assets/mini-nav.svg";
import profile from "../../assets/profile.svg";

//Style imports
import {
  StyleHeaderContainer,
  StyleHeader,
  StyleSVG,
  StyleProfileSVG,
  StyleSecondaryHeader,
  StyleBreadcrumb,
  StyleBreadCrumbContainer,
  StylePageTitle,
  StyleLeftContainer,
  StyleRightContainer,
  StyleMiniNav,
} from "../../styles/Header.style";

const Header: React.FC = () => {
  return (
    <StyleHeaderContainer className="render-font">
      <StyleHeader>
        <StyleLeftContainer>
          <StyleSVG src={logo} alt="logo" />
        </StyleLeftContainer>
        <StyleRightContainer>
          <StyleMiniNav src={miniNav} alt="mini-nav" />
          <StyleProfileSVG src={menuDash} alt="menu-dash" />
          <StyleProfileSVG src={profile} alt="profile" />
        </StyleRightContainer>
      </StyleHeader>
      <StyleSecondaryHeader>
        <StyleBreadCrumbContainer>
          <StyleBreadcrumb>{"Dashboard > My apps"}</StyleBreadcrumb>
          <StylePageTitle>{"My apps"}</StylePageTitle>
        </StyleBreadCrumbContainer>
      </StyleSecondaryHeader>
    </StyleHeaderContainer>
  );
};

export default Header;
