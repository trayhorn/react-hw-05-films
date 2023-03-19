import { ErrorMessage } from 'components';
import { NavLink } from 'react-router-dom';
import { useGetTrendFilmsQuery } from 'redux/MoviesApi';


export default function Home() {
  const {
    data: trendFilms,
    error,
  } = useGetTrendFilmsQuery();

  return (
    <>
      <h1 className="home__title">Trending today</h1>
      {error && <ErrorMessage />}
      {trendFilms && (
        <ul className="films-list">
          {trendFilms.results.map(({ id, title, name, poster_path }) => {
            return (
              <li key={id} className="films-list__film">
                <NavLink className="films-list__film-link" to={`/movies/${id}`}>
                  <div className="posterBox">
                    <img
                      className="poster"
                      src={`https://image.tmdb.org/t/p/original${poster_path}`}
                      alt={`${title}`}
                    />
                  </div>
                  <p className="films-list__film-name">{title || name}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
