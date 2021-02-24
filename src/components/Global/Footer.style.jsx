import styled from "styled-components";
import { Link } from "react-router-dom";
import { $white, $offBlack } from "../../_config.style";

export const StyleFooter = styled.footer`
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
`;

export const StyleCopywrightTag = styled.p`
  margin: 0 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${$white};
  margin: 0 10px;
`;

export const StyleLeftContainer = styled.div`
  display: inline-block;
`;
export const StyleRightContainer = styled.div`
  display: inline-block;
  display: flex;
`;
