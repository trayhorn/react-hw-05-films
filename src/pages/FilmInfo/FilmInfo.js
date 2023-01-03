import { useParams, useLocation, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import './FilmInfo.css';
import { KEY, baseURL } from '../../api';


export default function FilmInfo() {
  const [filmCard, setFilmCard] = useState(null);
  const location = useLocation();
  const {movieId} = useParams()

  useEffect(() => {
    fetch(`${baseURL}movie/${movieId}?api_key=${KEY}&language=en-US`)
      .then(r => r.json())
      .then(data => setFilmCard(data));
  }, [movieId]);

  const backLinkHref = location.state?.from ?? '/';

  if (!filmCard) {
    return;
  }

  const { poster_path, title, runtime, overview } = filmCard;

  return (
    <section>
      <div className="filmBox">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={`${title} poster`}
        />
        <div className="filmInfo">
          <p>
            <b>{title}</b>
          </p>
          <p>Runtime: {runtime} min</p>
          <p>
            <b>Overview</b>
          </p>
          <p>{overview}</p>
          <p>
            <b>Genres</b>
          </p>
          <p>Random Genres</p>
          <NavLink className="link" to={backLinkHref}>
            Back to movies
          </NavLink>
        </div>
      </div>
      <div className="addInfo">
        <p className="addInfoTitle">Additional information</p>
        <ul className="addInfoList">
          <li>
            <NavLink className="link" to="cast">
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="reviews">
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </section>
  );
}