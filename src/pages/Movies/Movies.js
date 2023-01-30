import { useState } from 'react';
import { useLocation, useSearchParams, NavLink } from 'react-router-dom';
import { useGetRequestedMoviesQuery } from 'redux/MoviesApi';
import SearchBox from '../../components/SearchBox';
import ErrorMessage from 'components/ErrorMessage';
import s from '../Home/Home.module.css';
import style from './Movies.module.css';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [skip, setSkip] = useState(true);
  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  const { data } = useGetRequestedMoviesQuery(query, {
    skip,
  });


  const handleChange = (e) => {
    setSkip(true);
    const value = e.target.value;
    setSearchParams( value !== '' ? { query: value } : {});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSkip(false);
  };


  return (
    <main className={style.moviesPage}>
      <SearchBox
        handleSubmit={(handleSubmit)}
        handleChange={handleChange}
        params={query}
      />
      {data && (
        <ul className={s.filmsList}>
          {data.results.map(
            ({ id, title, name, poster_path }) =>
              poster_path && (
                <li key={id} className={s.listItem}>
                  <NavLink
                    className={s.movieLink}
                    to={`${id}`}
                    state={{ from: location }}
                  >
                    <div className={s.posterBox}>
                      <img
                        className={s.poster}
                        src={`https://image.tmdb.org/t/p/original${poster_path}`}
                        alt=""
                      />
                    </div>
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
