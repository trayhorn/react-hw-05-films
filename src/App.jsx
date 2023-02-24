import { Routes, Route } from 'react-router-dom';
import { Movies, Home, FilmInfo, NotFound, PersonPage } from './pages';
import { Cast, Reviews, SharedLayout } from './components';


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
        <Route path="person/:personId" element={<PersonPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
