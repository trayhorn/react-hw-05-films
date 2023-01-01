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
              src="https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_960_720.png"
              alt="random film"
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
          <div>
            <p>Additional information</p>
            <ul>
              <NavLink to='cast'>
                <li>Cast</li>
              </NavLink>
              <NavLink to='reviews'>
                <li>Reviews</li>
              </NavLink>
            </ul>
            <Outlet />
          </div>
        </section>
      )}
    </>
  );
}