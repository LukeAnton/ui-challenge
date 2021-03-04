import React from "react";

//Style imports
import * as S from "./Footer.style";

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.LeftContainer>
        <S.CopywrightTag>2019 &copy; NETFRONT</S.CopywrightTag>
      </S.LeftContainer>
      <S.RightContainer>
        <S.FooterLink to="#">Privacy </S.FooterLink>|
        <S.FooterLink to="#"> Terms and Conditions </S.FooterLink>|
        <S.FooterLink to="#"> Contact</S.FooterLink>
      </S.RightContainer>
    </S.Footer>
  );
};

export default Footer;
