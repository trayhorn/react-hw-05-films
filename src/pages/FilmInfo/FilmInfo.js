import { useParams, useLocation, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import Button from '@mui/material/Button';
import s from './FilmInfo.module.css';
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

  const { id, poster_path, title, runtime, overview, genres } = filmCard;

  return (
    <main className={s.filmSection}>
      <section className={s.filmBox}>
        <img
          className={s.poster}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={`${title} poster`}
        />
        <div className={s.mainInfo}>
          <h1>{title}</h1>
          <p>Runtime: {runtime} min</p>
          <p>
            <b>Overview</b>
          </p>
          <p>{overview}</p>
          <p>
            <b>Genres</b>
          </p>
          <p>
            {genres.map(({id, name}) => (
              <span key={id} className={s.genre}>{name} </span>
            ))}
          </p>
          <NavLink className={s.link} to={backLinkHref}>
            <Button sx={{ marginTop: '200px' }} variant="contained">
              Back to movies
            </Button>
          </NavLink>
        </div>
      </section>
      <section className={s.addInfo}>
        <h2 className={s.addInfoTitle}>Additional information</h2>
        <ul className={s.addInfoList}>
          <li className={s.cast}>
            <NavLink
              className={s.link}
              to={
                location.pathname.includes('cast')
                  ? `/movies/${movieId}`
                  : 'cast'
              }
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={s.link}
              to={
                location.pathname.includes('reviews')
                  ? `/movies/${movieId}`
                  : 'reviews'
              }
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </section>
      <Outlet />
    </main>
  );
}