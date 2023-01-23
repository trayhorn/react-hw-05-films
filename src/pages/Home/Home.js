import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import s from './Home.module.css';
import { fetchTrendFilms } from '../../api';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';


export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchTrendFilms()
      .then(response => setTrendMovies([...response]))
      .catch(error => {
        if (error) {
          setError(true);
        }
      });
  }, []);


  return (
    <main className={s.home}>
      <h1 className={s.title}>Trending today</h1>
      {error && <ErrorMessage />}
      <ul className={s.filmsList}>
        {trendMovies.map(({ id, title, name, poster_path }) => {
          return (
            <li key={id} className={s.listItem}>
              <NavLink className={s.movieLink} to={`/movies/${id}`}>
                <img
                  className={s.poster}
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt=""
                />
                <p className={s.filmName}>{title || name}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
