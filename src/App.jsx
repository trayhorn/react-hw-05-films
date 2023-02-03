import { Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import Home from './pages/Home';
import FilmInfo from './pages/FilmInfo';
import Cast from './components/Cast';
import Reviews from './components/Reviews';
import SharedLayout from 'components/SharedLayout';
import NotFound from 'pages/NotFound';


function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<FilmInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
