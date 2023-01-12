import { useState } from 'react';
import { useLocation, useSearchParams, NavLink } from 'react-router-dom';
import s from '../Home/Home.module.css';
import style from './Movies.module.css';
import SearchBox from '../../components/SearchBox/SearchBox';
import { KEY, baseURL } from '../../api';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryFilms, setQueryFilms] = useState([]);
  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchParams( value !== '' ? { query: value } : {});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `${baseURL}search/movie?api_key=${KEY}&language=en-US&query=${query}`,
    )
      .then(r => r.json())
      .then(data => setQueryFilms(data.results));
  };


  return (
    <main className={style.moviesPage}>
      <SearchBox
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        params={query}
      />
      {queryFilms && (
        <ul className={s.filmsList}>
          {queryFilms.map(({ id, title, name, poster_path }) => (
              poster_path && <li key={id} className={s.listItem}>
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
          ))}
        </ul>
      )}
    </main>
  );
}
