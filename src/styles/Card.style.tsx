import styled from "styled-components";
import { $white, $grey, $published, $unpublished } from "../_config.style";

export const StyledCard = styled.div`
  height: 315px;
  width: 290px;
  margin: 10px;
  border: 1px solid ${$grey};
  border-radius: 15px;
  &:hover {
    transition: 0.2s;
    transform-origin: center;
    transform: scale(1.05);
    box-shadow: 0 0 8px ${$grey};
  }
`;

export const StyledCardImageContainer = styled.div`
  width: 100%;
  height: 65%;
  margin-top: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px 14px 0 0;
  background-color: ${$grey};
`;

export const StyledCardImage = styled.img`
  width: 123px;
`;

export const StylePublishedTitle = styled.h2<{ published: boolean }>`
  display: inline-block;
  position: relative;
  padding: 15px;
  border-radius: 30px;
  top: 15px;
  left: 15px;
  font-weight: 100;
  font-size: 10pt;
  line-height: 0;
  color: ${$white};
  background-color: ${(props) => (props.published ? $published : $unpublished)};
`;

export const StyledCardInfoSection = styled.div`
  height: 35%;
  padding: 5px 20px;
`;

export const StyledAppTitle = styled.h2`
  margin: 10px 0;
  font-size: 17pt;
`;

export const StyledUserTitle = styled.p`
  margin: 10px 0;
  font-weight: 100;
  font-size: 10pt;
`;
export const StyleRatingSection = styled.div``;
