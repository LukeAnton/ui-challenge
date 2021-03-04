import React from "react";
import logo from "../../assets/image-placement.svg";
import StarRating from "../StarRating/StarRating";

//Typescript imports
import { CardProps } from "../../typescript/interface/card";

import * as S from "./Card.style";

export const Card: React.FC<CardProps> = ({
  title,
  published,
  user,
  rating,
  id,
}) => {
  return (
    <S.Card>
      <S.PublishedTitle published={published}>
        {published ? "Published" : "Unpublished"}
      </S.PublishedTitle>
      <S.CardImageContainer>
        <S.CardImage src={logo} alt="image-placement" />
      </S.CardImageContainer>
      <S.CardInfoSection>
        <S.AppTitle>{title}</S.AppTitle>
        <S.UserTitle>by {user} </S.UserTitle>
        <S.RatingSection>
          <StarRating
            title={title}
            published={published}
            user={user}
            rating={rating}
            id={id}
          />
        </S.RatingSection>
      </S.CardInfoSection>
    </S.Card>
  );
};

export default Card;
