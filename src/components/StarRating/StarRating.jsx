import React, { useState, useEffect } from "react";
import StarFigure from "./StarFigure";
import fullStar from "../../assets/single-star-gold.svg";
import emptyStar from "../../assets/single-star-grey.svg";
import axios from "axios";
import {
  starArrayMerge,
  calculateRating,
  sortGold,
  sortGrey,
  setGoldSort,
  setGreySort,
} from "../../functions/functions";
import { StyledStar } from "../../styles//StarRating.style";

const StarRating = ({ title, published, user, rating, id }) => {
  const [fullStarCount, setFullStarCount] = useState(parseFloat(rating));
  const [emptyStarCount] = useState(Math.abs(Math.round(rating) - 5));
  const [goldStars, setGoldStars] = useState([]);
  const [greyStars, setGreyStars] = useState([]);

  useEffect(() => {
    setGoldStars(setGoldSort(fullStarCount));
    setGreyStars(setGreySort(emptyStarCount));
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
          console.log(sortGrey(totalRating));
          setFullStarCount(totalRating);
          setGoldStars(sortGold(totalRating));
          setGreyStars(sortGrey(totalRating));
        });
    } catch (err) {
      console.error(err);
    }
  };

  //on click handler
  const handleClick = (item, color) => {
    console.log(greyStars, goldStars);
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
      {greyStars.map((item, _) => {
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
