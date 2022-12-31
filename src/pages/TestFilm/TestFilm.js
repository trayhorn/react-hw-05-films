import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './TestFilm.css';

export default function TestFilm() {
  const KEY = 'cb13da90a39eba44c82ce3db6bc38256';

  const [filmCard, setFilmCard] = useState({})

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/76600?api_key=${KEY}&language=en-US`,
    )
      .then(r => r.json())
      .then(data => setFilmCard(data));
  }, []);

  return (
    <div className="filmBox">
      <img
        className="poster"
        src="https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_960_720.png"
        alt="random film"
      />
      <div className='filmInfo'>
        <p><b>{filmCard.title}</b></p>
        <p>Runtime: {filmCard.runtime} min</p>
        <p><b>Overview</b></p>
        <p>{filmCard.overview}</p>
        <p><b>Genres</b></p>
        <p>Random Genres</p>
      </div>
    </div>
  );
}
