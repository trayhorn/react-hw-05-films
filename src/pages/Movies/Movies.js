import { useState } from 'react';
import { useLocation, useSearchParams, NavLink } from 'react-router-dom';
import s from '../Home/Home.module.css';
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
    <main>
      <SearchBox
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        params={query}
      />
      {queryFilms && (
        <ul className={s.filmsList}>
          {queryFilms.map(({ id, title }) => (
            <li key={id}>
              <NavLink
                className={s.movieLink}
                to={`${id}`}
                state={{ from: location }}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
