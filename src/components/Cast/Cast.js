import s from './Cast.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchFilmCast } from 'api';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();


  useEffect(() => {
    fetchFilmCast(movieId)
      .then(data => setCast(data.cast))
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <ul className={s.actorsList}>
      {cast.map(
        ({ id, profile_path, character, name }) =>
          profile_path && (
            <li className={s.actorCard} key={id}>
              <img
                className={s.actorsImage}
                src={`https://image.tmdb.org/t/p/original${profile_path}`}
                alt={profile_path}
              />
              <p className={s.charName}>{character}</p>
              <p className={s.actorName}>{name}</p>
            </li>
          ),
      )}
    </ul>
  );
}
