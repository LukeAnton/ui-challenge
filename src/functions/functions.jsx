//Adds the users rating with the existing rating and divides by 2 to achieve the average rating
export const calculateRating = (item, fullStarCount) => {
  return (item + fullStarCount) / 2;
};

export const sortStars = (goldStarCount, greyStarCount) => {
  let greyStars = [];
  let goldStars = [];
  for (let i = 0; i < greyStarCount; i++) {
    greyStars.push({ index: Math.abs(Math.round(i) - 5), color: "grey" });
  }
  for (let i = 0; i < Math.round(goldStarCount); i++) {
    goldStars.push({ index: i + 1, color: "gold" });
  }
  const stars = [...goldStars, ...greyStars.reverse()];
  return stars;
};
