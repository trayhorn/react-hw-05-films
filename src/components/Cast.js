import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Cast() {
  const { movieId } = useParams();

  const KEY = 'cb13da90a39eba44c82ce3db6bc38256';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
    )
      .then(r => r.json())
      .then(data => console.log(data));
  }, [movieId]);

  return <div>Here will be a cast</div>;
}
