import React from "react";
import logo from "../../assets/logo.svg";
import menuDash from "../../assets/menu-dash.svg";
import miniNav from "../../assets/mini-nav.svg";
import profile from "../../assets/profile.svg";

//Style imports
import * as S from "./Header.style";

const Header: React.FC = () => {
  return (
    <S.HeaderContainer className="render-font">
      <S.Header>
        <S.LeftContainer>
          <S.SVG src={logo} alt="logo" />
        </S.LeftContainer>
        <S.RightContainer>
          <S.MiniNav src={miniNav} alt="mini-nav" />
          <S.ProfileSVG src={menuDash} alt="menu-dash" />
          <S.ProfileSVG src={profile} alt="profile" />
        </S.RightContainer>
      </S.Header>
      <S.SecondaryHeader>
        <S.BreadCrumbContainer>
          <S.Breadcrumb>{"Dashboard > My apps"}</S.Breadcrumb>
          <S.PageTitle>{"My apps"}</S.PageTitle>
        </S.BreadCrumbContainer>
      </S.SecondaryHeader>
    </S.HeaderContainer>
  );
};

export default Header;
