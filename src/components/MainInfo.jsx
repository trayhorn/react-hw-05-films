import { NavLink, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';


export default function MainInfo({ posterImage, title, runtime, overview, genres }) {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <section className="filmBox">
      <img
        className="filmPoster"
        src={`https://image.tmdb.org/t/p/original${posterImage}`}
        alt={`${title} poster`}
      />
      <div className="mainInfo">
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
            <span key={id} className="genre">
              {name}{' '}
            </span>
          ))}
        </p>
        <NavLink className="mainInfo_link" to={backLinkHref}>
          <Button variant="contained">
            Back to movies
          </Button>
        </NavLink>
      </div>
    </section>
  );
}
