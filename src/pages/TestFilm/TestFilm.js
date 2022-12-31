import { useState, useEffect } from 'react';

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

  // const [title, runtime, genres] = filmCard;

  return (
    <div>
      <img src={filmCard.backdrop_path} alt="" />
      <p>
        <b>{filmCard.title}</b>
      </p>
      <p>Runtime: {filmCard.runtime} min</p>
      <p>
        <b>Overview</b>
      </p>
      <p>{filmCard.overview}</p>
      <p>
        <b>Genres</b>
      </p>
      <p></p>
    </div>
  );
}
