import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  $gradient1,
  $gradient2,
  $white,
  $grey,
  $offBlack,
  grid,
} from "../_config.style";

export const StyledHomeContainer = styled.div``;

export const StyleHeaderContainer = styled.div`
  height: 140px;
  width: 100%;
  margin: 0 0 30px 0;
`;
export const StyleHeader = styled.div`
  height: 50%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, ${$gradient1}, ${$gradient2});
`;

export const StyleLeftContainer = styled.div`
  display: inline-block;
`;
export const StyleRightContainer = styled.div`
  display: inline-block;
  display: flex;
`;

export const StyleSVG = styled.img`
  height: 35px;
  margin: 10px 5px;
`;
export const StyleProfileSVG = styled(StyleSVG)`
  height: 20px;
  margin: 0 10px;
`;

export const StyleSecondaryHeader = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${$grey};
  font-weight: 100;
  padding: 5px 0;
`;

export const StyleBreadcrumb = styled.div`
  width: 1560px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  line-height: 26px;
  font-size: 10pt;
  //breadcrumb container same width as cards array container
  // - card padding "20px" to align text with edge of card
  @media ${grid.fiveBox} {
    width: calc(1541px - 20px);
  }
  @media ${grid.fourBox} {
    width: calc(1248px - 20px);
  }
  @media ${grid.fourBox} {
    width: calc(1248px - 20px);
  }
  @media ${grid.threeBox} {
    width: calc(936px - 20px);
  }
  @media ${grid.twoBox} {
    width: calc(625px - 20px);
  }
  @media ${grid.oneBox} {
    width: calc(315px - 20px);
  }
`;
export const StylePageTitle = styled(StyleBreadcrumb)`
  font-size: 17pt;
  font-weight: bold;
`;
export const StyleFooter = styled.footer`
  position: absolute;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  font-size: 10pt;
  padding: 10px 30px;
  background-color: ${$offBlack};
  color: ${$white};
  font-weight: 100;
`;

export const StyleCopywrightTag = styled.p`
  margin: 0 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${$white};
  margin: 0 10px;
`;
