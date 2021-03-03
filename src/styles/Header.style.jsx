import styled from "styled-components";

import { $gradient1, $gradient2, $grey, grid } from "../_config.style";

export const StyleHeaderContainer = styled.header`
  height: 140px;
  width: 100%;
  margin: 0 0 30px 0;
`;
export const StyleHeader = styled.nav`
  height: 50%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, ${$gradient1}, ${$gradient2});
`;

export const StyleSVG = styled.img`
  height: 40px;
  margin: 10px 5px;
  cursor: pointer;
  display: block;
`;
export const StyleMiniNav = styled.img`
  transform: rotate(180deg);
  height: 30px;
  display: none;
  @media ${grid.twoBox} {
    display: block;
  }
`;
export const StyleProfileSVG = styled(StyleSVG)`
  height: 20px;
  margin: 0 10px;
  @media ${grid.twoBox} {
    display: none;
  }
`;

export const StyleSecondaryHeader = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${$grey};
  font-weight: 100;
  padding: 5px 0;
`;
export const StyleBreadCrumbContainer = styled.div`
  width: 1560px;
  margin: 0 auto;
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
export const StyleBreadcrumb = styled.p`
  display: block;
  line-height: 26px;
  font-size: 10pt;
  font-weight: 100;
`;
export const StylePageTitle = styled.h2`
  display: block;
  font-size: 17pt;
  font-weight: bold;
`;

export const StyleLeftContainer = styled.div`
  display: inline-block;
`;
export const StyleRightContainer = styled.div`
  display: inline-block;
  display: flex;
`;
