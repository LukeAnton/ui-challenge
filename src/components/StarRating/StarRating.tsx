import React, { useState, useEffect } from "react";
import StarFigure from "./StarFigure";
import goldStar from "../../assets/single-star-gold.svg";
import greyStar from "../../assets/single-star-grey.svg";
import axios from "axios";

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
  const [emptyStarCount] = useState<number>(Math.abs(Math.round(rating) - 5));
  const [stars, setStars] = useState<Stars[]>([]);

  useEffect(() => {
    setStars(sortStars(fullStarCount, emptyStarCount));
  }, []);

  //this function submits a rating
  const addRating = async (item: number) => {
    const totalRating = calculateRating(item, fullStarCount);
    const goldStarCountUpdate = Math.round(totalRating);
    const greyStarCountUpdate = Math.abs(Math.round(totalRating) - 5);
    try {
      axios
        .put(`http://localhost:3000/cards/${id}`, {
          title: title,
          published: published,
          user: user,
          rating: totalRating,
        })
        .then(() => {
          setFullStarCount(totalRating);
          setStars(sortStars(goldStarCountUpdate, greyStarCountUpdate));
        });
    } catch (err) {
      console.error(err);
    }
  };

  //on click handler
  const handleClick = (item: number) => {
    addRating(item);
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
