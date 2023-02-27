import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';


export default function MainInfo({ posterImage, title, runtime, overview, genres, movieId }) {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <section className="filmBox">
        <img
          className="filmPoster"
          src={`https://image.tmdb.org/t/p/original${posterImage}`}
          alt={`${title} poster`}
        />
        <div className="mainInfo">
          <div>
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
          </div>
          <div className="link-container">
            <NavLink
              className="addInfo_link"
              to={
                location.pathname.includes('cast')
                  ? `/movies/${movieId}`
                  : 'cast'
              }
            >
              <Button variant="contained">Cast</Button>
            </NavLink>
            <NavLink
              className="addInfo_link"
              to={
                location.pathname.includes('reviews')
                  ? `/movies/${movieId}`
                  : 'reviews'
              }
            >
              <Button variant="contained">Reviews</Button>
            </NavLink>
            <NavLink className="mainInfo_link" to={backLinkHref}>
              <Button variant="contained">Back</Button>
            </NavLink>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}
