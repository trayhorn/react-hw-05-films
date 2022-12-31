import { Routes, Route, NavLink } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import './App.css';
import Movies from './pages/Movies';
import Home from './pages/Home';
import TestFilm from './pages/TestFilm';
import FilmInfo from './pages/FilmInfo/FilmInfo';


function App() {

  return (
    <div className="App">
      <header>
        <nav>
          <NavLink className="navLink" to="/">
            <Button sx={{ margin: '10px' }} variant="text">
              Home
            </Button>
          </NavLink>
          <NavLink className="navLink" to="/movies">
            <Button sx={{ margin: '10px' }} variant="text">
              Movies
            </Button>
          </NavLink>
          <NavLink className="navLink" to="/test">
            <Button sx={{ margin: '10px' }} variant="text">
              TestFilm
            </Button>
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":movieId" element={<FilmInfo />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="/test" element={<TestFilm />} />
      </Routes>
    </div>
  );
}

export default App;
