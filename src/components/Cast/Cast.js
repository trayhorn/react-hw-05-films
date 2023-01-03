import "./Cast.css";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  const KEY = 'cb13da90a39eba44c82ce3db6bc38256';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
    )
      .then(r => r.json())
      .then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <ul className="actorsList">
      {cast &&
        cast.map(actor => (
          <li className="actorCard" key={actor.cast_id}>
            <img
              className="actorsImage"
              src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              alt={actor.profile_path}
            />
            <p>Character: {actor.character}</p>
            <p>{actor.name}</p>
          </li>
        ))}
    </ul>
  );
}
