import { NavLink } from 'react-router-dom';
import s from './Home.module.css';
import ErrorMessage from 'components/ErrorMessage';
import { useGetTrendFilmsQuery } from 'redux/MoviesApi';
import { Loading } from 'notiflix';


export default function Home() {
  const {
    data: trendFilms,
    isFetching,
    isLoading,
    error,
  } = useGetTrendFilmsQuery();

  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      {error && <ErrorMessage />}
      {isLoading && Loading.circle()}
      {!isFetching && Loading.remove(200)}
      {!isFetching && (
        <ul className={s.filmsList}>
          {trendFilms.results.map(({ id, title, name, poster_path }) => {
            return (
              <li key={id} className={s.listItem}>
                <NavLink className={s.movieLink} to={`/movies/${id}`}>
                  <div className={s.posterBox}>
                    <img
                      className={s.poster}
                      src={`https://image.tmdb.org/t/p/original${poster_path}`}
                      alt={`${title}`}
                    />
                  </div>
                  <p className={s.filmName}>{title || name}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
