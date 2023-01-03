import { useState } from 'react';
import { useLocation, useSearchParams, NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          value={query}
          sx={{ marginTop: '20px' }}
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <Button sx={{ margin: '33px 0 0 10px' }} variant="text" type="submit">
          Search
        </Button>
      </form>
      {queryFilms &&
        queryFilms.map(({ id, title }) => (
          <ul>
            <li key={id}>
              <NavLink to={`${id}`} state={{from: location}}>{title}</NavLink>
            </li>
          </ul>
        ))}
    </main>
  );
}
