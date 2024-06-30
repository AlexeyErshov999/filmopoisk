import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainContent } from "../main-content/component";
import { OnlyOneMovie } from "../only-one-movie/component";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import "./style.css";
import ratingReducer from "../../rating-reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    rating: ratingReducer,
  },
});

export function Main() {
  return (
    <Provider store={store}>
      <div className="main">
        <Router>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/api/v1/movie/:id" element={<OnlyOneMovie />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}
