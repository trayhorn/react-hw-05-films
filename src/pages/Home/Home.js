import { NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);

  const KEY = 'cb13da90a39eba44c82ce3db6bc38256';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`)
      .then(r => r.json())
      .then(data => setTrendMovies([...data.results]));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <Outlet />
      <ul>
        {trendMovies.map(({ id, title, name }) => {
          return (
            <NavLink key={id} to={`${id}`}>
              <li>{title || name}</li>
            </NavLink>
          );
        })}
      </ul>
    </>
  );
}
