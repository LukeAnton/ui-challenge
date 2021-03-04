import styled from "styled-components";
import { Link } from "react-router-dom";
import { $white, $offBlack, grid } from "../../styles/_config.style";

export const Footer = styled.footer`
  height: 70px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  font-size: 10pt;
  padding: 10px 30px;
  background-color: ${$offBlack};
  color: ${$white};
  font-weight: 100;
  @media ${grid.twoBox} {
    display: block;
    text-align: center;
  }
`;

export const CopywrightTag = styled.p`
  margin: 0 10px;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${$white};
  margin: 0 10px;
`;

export const LeftContainer = styled.div`
  display: inline-block;
  @media ${grid.twoBox} {
    display: block;
    margin: 5px 0;
  }
`;
export const RightContainer = styled.ul`
  display: inline-block;
  display: flex;
  @media ${grid.twoBox} {
    display: block;
    margin-top: 10px;
  }
`;
