import React from "react";
import "../../styles/Card.css";
import logo from "../../assets/image-placement.svg";
import StarRating from "../StarRating/StarRating";
import { Props } from "../../typescript/interface/card";
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

export const Card: React.FC<Props> = ({
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
