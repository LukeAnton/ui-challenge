import React, { useState, useEffect } from "react";
import StarFigure from "./StarFigure";
import fullStar from "../../assets/single-star-gold.svg";
import emptyStar from "../../assets/single-star-grey.svg";
import axios from "axios";
import { starArrayMerge, calculateRating } from "../../functions/functions";
import { StyledStar } from "../../styles/StarRating.style";

const StarRating = ({ title, published, user, rating, id }) => {
  const [fullStarCount, setFullStarCount] = useState(parseFloat(rating));
  const [emptyStarCount] = useState(Math.abs(Math.round(rating) - 5));
  const [goldStars, setGoldStars] = useState([]);
  const [greyStars, setGreyStars] = useState([]);

  useEffect(() => {
    //initial star array is set here
    for (let i = 0; i < Math.round(fullStarCount); i++) {
      setGoldStars((star) => [...star, i]);
    }
    // turning the grey stars into an array to map in the jsx
    for (let i = 0; i < emptyStarCount; i++) {
      setGreyStars((star) => [...star, i]);
    }
  }, []);

  //submits a rating
  const addRating = async (item, color) => {
    const starIndex = starArrayMerge(item, color);
    const totalRating = calculateRating(starIndex, fullStarCount);
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
          updateStars(totalRating);
        });
    } catch (err) {
      console.error(err);
    }
  };

  //function to update stars on the screen
  const updateStars = (calculatedRating) => {
    setGoldStars([]);
    setGreyStars([]);
    for (let i = 0; i < Math.round(calculatedRating); i++) {
      setGoldStars((star) => [...star, i]);
    }
    // turning the grey stars into an array to map in the jsx
    for (let i = 0; i < Math.abs(Math.round(calculatedRating) - 5); i++) {
      setGreyStars((star) => [...star, i]);
    }
  };

  //on click handler
  const handleClick = (item, color) => {
    addRating(item, color);
  };

  return (
    <div>
      {goldStars.map((item, _) => {
        return (
          <StyledStar
            key={item}
            onClick={() => handleClick(item + 1, "gold")}
            src={fullStar}
            alt="single-star-gold"
          />
        );
      })}
      {greyStars.reverse().map((item, _) => {
        return (
          <StyledStar
            key={item}
            onClick={() => handleClick(item + 1, "grey")}
            src={emptyStar}
            alt="single-star-gold"
          />
        );
      })}
      <StarFigure fullStarCount={fullStarCount} />
    </div>
  );
};

export default StarRating;
