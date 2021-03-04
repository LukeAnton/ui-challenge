import React from "react";

//Typescript imports
import { StarFigureProps } from "../../typescript/interface/starRating";

//Style imports
import * as S from "./StarFigure.style";

const StarFigure: React.FC<StarFigureProps> = ({ goldStarCount }) => {
  return (
    <S.StarRatingFigure>
      {goldStarCount
        ? goldStarCount.toString().includes(".")
          ? goldStarCount.toFixed(1)
          : goldStarCount.toFixed(1)
        : "No review"}
    </S.StarRatingFigure>
  );
};

export default StarFigure;
