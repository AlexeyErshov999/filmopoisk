import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import { Rating } from "../rating/component";
import { ActorCard } from "../actor-card/component";

export const OnlyOneMovie = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3030/api/v1/movie/${id}`
        );
        setMovies([response.data]);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching movie with ID:", id);
      }
    };

    fetchMovies();
  }, [id]);

  return (
    <div className="films-list">
      {movies.map((film) => (
        <div className="only-one-film_container">
          <div className="film-desc">
            <img className="film-image" src={film.poster}></img>
            <div className="film-information">
              <div className="head">
                <h1 className="title">{film.title}</h1>
                <Rating />
              </div>
              <div className="details">
                <p>
                  <span className="accent">Жанр: </span>
                  {film.genre}
                </p>
                <p>
                  <span className="accent">Год выпуска: </span>
                  {film.release_year}
                </p>
                <p>
                  <span className="accent">Рейтинг: </span>
                  {film.rating}
                </p>
                <p>
                  <span className="accent">Режиссер: </span>
                </p>
                <p>
                  <span className="accent">Описание</span>
                </p>
                <p>{film.description}</p>
              </div>
            </div>
          </div>
          <div className="title actors-text">Актёры</div>
          <div className="actors">
            {film.actors.map((actor) => (
              <ActorCard actor={actor} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
