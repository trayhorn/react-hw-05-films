import { NavLink } from 'react-router-dom';
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
      <h1 className="home_title">Trending today</h1>
      {error && <ErrorMessage />}
      {isLoading && Loading.circle()}
      {!isFetching && Loading.remove(200)}
      {!isFetching && (
        <ul className="list">
          {trendFilms.results.map(({ id, title, name, poster_path }) => {
            return (
              <li key={id} className="list_item">
                <NavLink className="list_link" to={`/movies/${id}`}>
                  <div className="posterBox">
                    <img
                      className="poster"
                      src={`https://image.tmdb.org/t/p/original${poster_path}`}
                      alt={`${title}`}
                    />
                  </div>
                  <p className="list_name">{title || name}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
