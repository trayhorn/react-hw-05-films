import { useState } from 'react';
import { useLocation, useSearchParams, NavLink } from 'react-router-dom';
import s from '../Home/Home.module.css';
import style from './Movies.module.css';
import SearchBox from '../../components/SearchBox/SearchBox';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { fetchRequestedFilm } from '../../api';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryFilms, setQueryFilms] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchParams( value !== '' ? { query: value } : {});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRequestedFilm(query)
      .then(response => setQueryFilms([...response]))
      .catch(error => {
        if (error) {
          setError(true);
        }
      });
  };


  return (
    <main className={style.moviesPage}>
      <SearchBox
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        params={query}
      />
      {error && <ErrorMessage />}
      {queryFilms && (
        <ul className={s.filmsList}>
          {queryFilms.map(
            ({ id, title, name, poster_path }) =>
              poster_path && (
                <li key={id} className={s.listItem}>
                  <NavLink
                    className={s.movieLink}
                    to={`${id}`}
                    state={{ from: location }}
                  >
                    <img
                      className={s.poster}
                      src={`https://image.tmdb.org/t/p/original${poster_path}`}
                      alt=""
                    />
                    <p className={s.filmName}>{title || name}</p>
                  </NavLink>
                </li>
              ),
          )}
        </ul>
      )}
    </main>
  );
}
