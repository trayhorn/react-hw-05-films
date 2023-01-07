import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import s from './Home.module.css';
import { KEY, baseURL } from '../../api';


export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}trending/movie/day?api_key=${KEY}`)
      .then(r => r.json())
      .then(data => setTrendMovies([...data.results]));
  }, []);

  return (
    <main className={s.home}>
      <h1 className={s.title}>Trending today</h1>
      <ul className={s.filmsList}>
        {trendMovies.map(({ id, title, name, poster_path }) => {
          return (
            <li className={s.listItem}>
              <NavLink className={s.movieLink} key={id} to={`/movies/${id}`}>
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
