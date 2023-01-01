import './Home.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);

  const KEY = 'cb13da90a39eba44c82ce3db6bc38256';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`)
      .then(r => r.json())
      .then(data => setTrendMovies([...data.results]));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendMovies.map(({ id, title, name }) => {
          return (
            <NavLink className="movieLink" key={id} to={`/movies/${id}`}>
              <li>{title || name}</li>
            </NavLink>
          );
        })}
      </ul>
    </>
  );
}
