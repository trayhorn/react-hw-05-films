import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import ReactPlayer from 'react-player/youtube';


export default function MainInfo({ posterImage, title, overview, genres, movieId, videoKey }) {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <section className="filmBox">
        <div className="poster-wrapper">
          <img
            className="filmPoster"
            src={`https://image.tmdb.org/t/p/original${posterImage}`}
            alt={`${title} poster`}
          />
        </div>
        <div className="mainInfo">
          <div className="film-card">
            <h1 className="film-card__title">{title}</h1>
            <p>{overview}</p>
            <p>
              {genres.map(({ id, name }) => (
                <span key={id} className="genre">
                  {name}{' '}
                </span>
              ))}
            </p>
            <ReactPlayer
              controls={true}
              url={`https://www.youtube.com/watch?v=${videoKey}`}
            />
          </div>
          <div className="link-container">
            <NavLink
              className="link-container__item"
              to={
                location.pathname.includes('cast')
                  ? `/movies/${movieId}`
                  : 'cast'
              }
            >
              <Button variant="contained">Cast</Button>
            </NavLink>
            <NavLink
              className="link-container__item"
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
