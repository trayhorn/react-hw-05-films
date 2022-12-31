import { Routes, Route, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import './App.css';
import Movies from './pages/Movies';
import Home from './pages/Home';
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
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path='/movies/:movieId' element={<FilmInfo />} />
      </Routes>
    </div>
  );
}

export default App;
