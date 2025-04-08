export const calculateAvgRating = (ratings) => {
  if (ratings.length === 0) return 0;
  let total = 0;
  ratings.forEach((rating) => {
    total += rating.rating;
  });

  return total / ratings.length;
};
