import { NavLink, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import s from './MainInfo.module.css';


export default function MainInfo({ posterImage, title, runtime, overview, genres }) {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <section className={s.filmBox}>
      <img
        className={s.poster}
        src={`https://image.tmdb.org/t/p/original${posterImage}`}
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
          {genres.map(({ id, name }) => (
            <span key={id} className={s.genre}>
              {name}{' '}
            </span>
          ))}
        </p>
        <NavLink className={s.link} to={backLinkHref}>
          <Button sx={{ marginTop: '200px' }} variant="contained">
            Back to movies
          </Button>
        </NavLink>
      </div>
    </section>
  );
}
