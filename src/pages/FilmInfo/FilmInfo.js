import { useParams, useLocation, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
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

  const { poster_path, title, runtime, overview, genres } = filmCard;

  return (
    <main>
      <section className="filmBox">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={`${title} poster`}
        />
        <div className="filmInfo">
          <p>{title}</p>
          <p>Runtime: {runtime} min</p>
          <p>Overview</p>
          <p>{overview}</p>
          <p>Genres</p>
          <p>
            {genres.map(genre => (
              <span className="genre">{genre.name} </span>
            ))}
          </p>
          <NavLink className="link" to={backLinkHref}>
            <Button sx={{ marginTop: '200px' }} variant="contained">
              Back to movies
            </Button>
          </NavLink>
        </div>
      </section>
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
    </main>
  );
}