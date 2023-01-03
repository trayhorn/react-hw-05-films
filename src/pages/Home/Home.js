import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Home.css';
import { KEY, baseURL } from '../../api';


export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}trending/movie/day?api_key=${KEY}`)
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
