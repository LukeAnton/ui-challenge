import React, { useState, useEffect } from "react";
import StarFigure from "./StarFigure";
import goldStar from "../../assets/single-star-gold.svg";
import greyStar from "../../assets/single-star-grey.svg";
import axios from "axios";

//functions import
import { calculateRating, sortStars } from "../../functions/functions";
import { StyledStar } from "../../styles//StarRating.style";

const StarRating = ({ title, published, user, rating, id }) => {
  const [fullStarCount, setFullStarCount] = useState(parseFloat(rating));
  const [emptyStarCount] = useState(Math.abs(Math.round(rating) - 5));
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(sortStars(fullStarCount, emptyStarCount));
  }, []);

  //this function submits a rating
  const addRating = async (item) => {
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
  const handleClick = (item) => {
    addRating(item);
  };

  return (
    <>
      {stars.map((item) => {
        return (
          <StyledStar
            key={item.index}
            onClick={() => handleClick(item.index)}
            src={item.color === "gold" ? goldStar : greyStar}
            alt="star-svg"
          />
        );
      })}
      <StarFigure fullStarCount={fullStarCount} />
    </>
  );
};

export default StarRating;
