import React from "react";
import logo from "../../assets/image-placement.svg";
import {
  StyledCard,
  StyledCardImageContainer,
  StyledCardImage,
  StylePublishedTitle,
  StyledCardInfoSection,
  StyledAppTitle,
  StyledUserTitle,
} from "./Card.style";

export const Card = ({ title, published, user, rating }) => {
  console.log(title);
  return (
    <div>
      <StyledCard>
        <StylePublishedTitle published={published}>
          {published ? "Published" : "Unpublished"}
        </StylePublishedTitle>
        <StyledCardImageContainer>
          <StyledCardImage src={logo} alt="image-placement" />
        </StyledCardImageContainer>
        <StyledCardInfoSection>
          <StyledAppTitle>{title}</StyledAppTitle>
          <StyledUserTitle>by {user} </StyledUserTitle>
        </StyledCardInfoSection>
      </StyledCard>
    </div>
  );
};

export default Card;
