import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  $gradient1,
  $gradient2,
  $white,
  $grey,
  $offBlack,
} from "../_config.style";

export const StyledHomeContainer = styled.div``;

export const StyleHeaderContainer = styled.div`
  height: 120px;
  width: 100%;
  margin: 0 0 30px 0;
`;
export const StyleHeader = styled.div`
  height: 50%;
  background: linear-gradient(to right, ${$gradient1}, ${$gradient2});
`;

export const StyleSecondaryHeader = styled.div`
  height: 50%;
  background-color: ${$grey};
`;

export const StyleFooter = styled.footer`
  position: absolute;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  font-size: 10pt;
  padding: 10px 30px;
  background-color: ${$offBlack};
  color: ${$white};
`;

export const StyleLeftContainer = styled.div`
  display: inline-block;
  width: auto;
`;
export const StyleRightContainer = styled.div`
  display: inline-block;
  width: auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${$white};
  margin: 10px;
`;
