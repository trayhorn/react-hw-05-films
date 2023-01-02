import { useParams, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import './FilmInfo.css';


export default function FilmInfo() {
  const [filmCard, setFilmCard] = useState(null);

  const {movieId} = useParams()

  const KEY = 'cb13da90a39eba44c82ce3db6bc38256';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`,
    )
      .then(r => r.json())
      .then(data => setFilmCard(data));
  }, [movieId]);


  return (
    <>
      {filmCard && (
        <section>
          <div className="filmBox">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/original${filmCard.poster_path}`}
              alt={`${filmCard.title} poster`}
            />
            <div className="filmInfo">
              <p>
                <b>{filmCard.title}</b>
              </p>
              <p>Runtime: {filmCard.runtime} min</p>
              <p>
                <b>Overview</b>
              </p>
              <p>{filmCard.overview}</p>
              <p>
                <b>Genres</b>
              </p>
              <p>Random Genres</p>
            </div>
          </div>
          <div className="addInfo">
            <p className="addInfoTitle">Additional information</p>
            <ul className="addInfoList">
              <NavLink to="cast">
                <li>Cast</li>
              </NavLink>
              <NavLink to="reviews">
                <li>Reviews</li>
              </NavLink>
            </ul>
          </div>
          <Outlet />
        </section>
      )}
    </>
  );
}