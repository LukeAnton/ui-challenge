import React, { useState, useEffect, useContext } from "react";
import CardContext from "../../context/card/cardContext";

import StarFigure from "./StarFigure";
import goldStar from "../../assets/single-star-gold.svg";
import greyStar from "../../assets/single-star-grey.svg";

//Typescript imports
import { StarRatingProps, Stars } from "../../typescript/interface/starRating";

//function imports
import { calculateRating, sortStars } from "../../functions/functions";

//Style imports
import { StyledStar } from "../../styles//StarRating.style";

const StarRating: React.FC<StarRatingProps> = ({
  title,
  published,
  user,
  rating,
  id,
}) => {
  const [fullStarCount, setFullStarCount] = useState<number>(rating);
  const [greyStarCount] = useState<number>(Math.abs(Math.round(rating) - 5));
  const [stars, setStars] = useState<Stars[]>([]);
  const cardContext = useContext(CardContext);
  const { addRating } = cardContext;

  useEffect(() => {
    setStars(sortStars(fullStarCount, greyStarCount));
  }, []);

  //on click handler
  const handleClick = (item: number) => {
    const totalRating: number = calculateRating(item, fullStarCount);
    const goldStarCountUpdate: number = Math.round(totalRating);
    const greyStarCountUpdate: number = Math.abs(Math.round(totalRating) - 5);

    addRating(title, published, user, id, item, fullStarCount);
    setFullStarCount(totalRating);
    setStars(sortStars(goldStarCountUpdate, greyStarCountUpdate));
  };

  return (
    <>
      {stars.map(({ index, color }) => {
        return (
          <StyledStar
            key={index}
            onClick={() => handleClick(index)}
            src={color === "gold" ? goldStar : greyStar}
            alt="star-svg"
          />
        );
      })}
      <StarFigure fullStarCount={fullStarCount} />
    </>
  );
};

export default StarRating;
