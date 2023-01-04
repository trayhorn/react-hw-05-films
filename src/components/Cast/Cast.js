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

  if (!cast) {
    return;
  }

  return (
    <ul className="actorsList">
      {cast.map(
        ({ cast_id, profile_path, character, name }) =>
          profile_path && (
            <li className="actorCard" key={cast_id}>
              <img
                className="actorsImage"
                src={`https://image.tmdb.org/t/p/original${profile_path}`}
                alt={profile_path}
              />
              <p>Character: {character}</p>
              <p>{name}</p>
            </li>
          ),
      )}
    </ul>
  );
}