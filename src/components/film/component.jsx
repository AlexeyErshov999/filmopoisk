import { Rating } from "../rating/component";
import "./style.css";

export function Film(film) {
  let link = `http://localhost:5173/api/v1/movie/${film.id}`;

  return (
    <div className="film-body">
        <img className="film-picture" src={film.poster}></img>
        <div className="film-info">
        <a href={link}>
          <h2 className="film-title">{film.title}</h2>
        </a>
        <div className="film-description-container">
          <div className="film-fields">
            <p className="genre">Жанр</p>
            <p className="year">Год выпуска</p>
            <p className="description">Описание</p>
          </div>
          <div className="fields-values">
            <p className="genre-value">{film.genre}</p>
            <p className="year-value">{film.year}</p>
            <p className="description-value">{film.description}</p>
          </div>
        </div>
      </div>
      <Rating />
    </div>
  );
}
