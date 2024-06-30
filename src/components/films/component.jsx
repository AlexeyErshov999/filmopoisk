import { Film } from "../film/component";
import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

export function Films() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      for (let id = 1; id < 51; id++) {
        try {
          const res = await axios.get(`http://localhost:3030/api/v1/movie/${id}`);
          setMovies((prevMovies) => [...prevMovies, res.data]);
        } catch (error) {
          console.error("Error fetching movie with ID:", id);
        }
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="films-list">
      {movies.map((film) => (
        <Film
          key={film.id}
          id={film.id}
          poster={`../images/${film.id}.jpeg`}
          title={film.title}
          genre={film.genre}
          year={film.release_year}
          description={film.description}
        />
      ))}
    </div>
  );
}