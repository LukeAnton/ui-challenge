//Functions

//Adds the users rating with the existing rating and divides by 2 to achieve the average rating
export const calculateRating = (item: number, fullStarCount: number) => {
  return (item + fullStarCount) / 2;
};

//Star sort function --- takes in total grey and gold stars and returns a merged object array of stars :)
export const sortStars = (goldStarCount: number, greyStarCount: number) => {
  let greyStars: { index: number; color: string }[] = [];
  let goldStars: { index: number; color: string }[] = [];
  for (let i = 0; i < greyStarCount; i++) {
    greyStars.push({ index: Math.abs(Math.round(i) - 5), color: "grey" });
  }
  for (let i = 0; i < Math.round(goldStarCount); i++) {
    goldStars.push({ index: i + 1, color: "gold" });
  }
  const stars: { index: number; color: string }[] = [
    ...goldStars,
    ...greyStars.reverse(),
  ];
  return stars;
};
