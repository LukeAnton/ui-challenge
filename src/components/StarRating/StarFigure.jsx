import React from "react";
import { StyledStarRatingFigure } from "../../styles/StarFigure.style";

const StarFigure = ({ fullStarCount }) => {
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
