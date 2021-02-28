import React from "react";

//Typescript imports
import { StarFigureProps } from "../../typescript/interface/starRating";

//Style imports
import { StyledStarRatingFigure } from "../../styles/StarFigure.style";

const StarFigure: React.FC<StarFigureProps> = ({ fullStarCount }) => {
  return (
    <StyledStarRatingFigure>
      {fullStarCount
        ? fullStarCount.toString().includes(".")
          ? fullStarCount.toFixed(1)
          : fullStarCount.toFixed(1)
        : "No review"}
    </StyledStarRatingFigure>
  );
};

export default StarFigure;
