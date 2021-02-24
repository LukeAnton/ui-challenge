import React from "react";
import logo from "../../assets/image-placement.svg";
import StarRating from "../StarRating/StarRating";
import {
  StyledCard,
  StyledCardImageContainer,
  StyledCardImage,
  StylePublishedTitle,
  StyledCardInfoSection,
  StyledAppTitle,
  StyledUserTitle,
  StyleRatingSection,
} from "./Card.style";

export const Card = ({ title, published, user, rating, id }) => {
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
          <StyleRatingSection>
            <StarRating
              title={title}
              published={published}
              user={user}
              rating={rating}
              id={id}
            />
          </StyleRatingSection>
        </StyledCardInfoSection>
      </StyledCard>
    </div>
  );
};

export default Card;
