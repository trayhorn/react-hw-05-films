import { useState } from 'react';
import { SearchBox, ErrorMessage } from '../components';
import { useGetRequestedMoviesQuery } from 'redux/MoviesApi';
import { useLocation, useSearchParams, NavLink } from 'react-router-dom';


export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [skip, setSkip] = useState(true);
  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  const { data, error } = useGetRequestedMoviesQuery(query, {
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
    <>
      <SearchBox
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        params={query}
      />
      {error && <ErrorMessage />}
      {data && (
        <ul className="list">
          {data.results.map(
            ({ id, title, name, poster_path }) =>
              poster_path && (
                <li key={id} className="list_item">
                  <NavLink
                    className="list_link"
                    to={`${id}`}
                    state={{ from: location }}
                  >
                    <div className="posterBox">
                      <img
                        className="poster"
                        src={`https://image.tmdb.org/t/p/original${poster_path}`}
                        alt=""
                      />
                    </div>
                    <p className="list_name">{title || name}</p>
                  </NavLink>
                </li>
              ),
          )}
        </ul>
      )}
    </>
  );
}
