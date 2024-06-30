import { createSlice } from "@reduxjs/toolkit";

const ratingSlice = createSlice({
  name: "rating",
  initialState: {
    rating: 5,
  },
  reducers: {
    setRating(state, action) {
      state.rating = action.payload;
    },
  },
});

export const { setRating } = ratingSlice.actions;
export default ratingSlice.reducer;