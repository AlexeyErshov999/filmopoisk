import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../../rating-reducer";

const thirdExample = {
  size: 20,
  count: 5,
  isHalf: true,
  color: "grey",
  activeColor: "#FF5500",
};

export function Rating() {
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.rating.rating);

  const handleRatingChange = (newRating) => {
    dispatch(setRating(newRating));
  };

  return (
    <ReactStars
      {...thirdExample}
      value={rating}
      onChange={handleRatingChange}
    />
  );
}