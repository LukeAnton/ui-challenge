import styled from "styled-components";
import { grid } from "../../_config.style";

export const StyleCardsGrid = styled.div`
  width: 1560px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-flow: wrap;
  @media ${grid.fourBox} {
    width: 1248px;
  }
  @media ${grid.threeBox} {
    width: 936px;
  }
  @media ${grid.twoBox} {
    width: 625px;
  }
  @media ${grid.oneBox} {
    width: 315px;
  }
`;
