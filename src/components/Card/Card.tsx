import React from "react";
import logo from "../../assets/image-placement.svg";
import StarRating from "../StarRating/StarRating";

//Typescript imports
import { CardProps } from "../../typescript/interface/card";

//Style imports
import "../../styles/Card.css";

import {
  StyledCard,
  StyledCardImageContainer,
  StyledCardImage,
  StylePublishedTitle,
  StyledCardInfoSection,
  StyledAppTitle,
  StyledUserTitle,
  StyleRatingSection,
} from "../../styles/Card.style";

export const Card: React.FC<CardProps> = ({
  title,
  published,
  user,
  rating,
  id,
}) => {
  return (
    <StyledCard className="render-font">
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
  );
};

export default Card;
