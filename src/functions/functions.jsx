//example goldStars = [1,2,3] greyStars = [1,2] to mergedStars = [1,2,3,4,5] to acheive the chosen value
//grey stars array is listed in reverse so that the index can be calculated using the difference ---
//if grey is greyStar = [3, 2, 1] its place can be calculated by grabbing 1 and finding the difference to 5
// 1 to 5 is 2 - 3 - 4 - 5 ---- 4 places + 1 = 5 returning the index of the star which will be the submited rating

//Merging the gold star array with the grey star array to create an accending index
export const starArrayMerge = (item, color) => {
  return color === "gold" ? item : Math.abs(Math.round(item) - 5) + 1;
};
//Adds the users rating with the existing rating and divides by 2 to achieve the average rating
export const calculateRating = (item, fullStarCount) => {
  return (item + fullStarCount) / 2;
};

//function to update stars on the screen
export const updateStars = (calculatedRating) => {
  for (let i = 0; i < Math.round(calculatedRating); i++) {
    const gStars = (star) => [...star, i];
    return gStars;
  }
  // turning the grey stars into an array to map in the jsx
  for (let i = 0; i < Math.abs(Math.round(calculatedRating) - 5); i++) {
    const grStars = (star) => [...star, i];
    return grStars;
  }
  return;
};
