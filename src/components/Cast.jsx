import { useParams } from 'react-router-dom';
import { useGetFilmCastQuery } from 'redux/MoviesApi';
import ActorCard from './ActorCard';

export default function Cast() {
  const { movieId } = useParams();
  const { data } = useGetFilmCastQuery(movieId);

  if (!data) {
    return;
  }

  return (
    <ul className="actorsList">
      {data.cast.map(
        ({ id, profile_path, name, character }) =>
          profile_path && (
            <ActorCard
              key={id}
              id={id}
              image={profile_path}
              name={name}
              character={character}
            />
          ),
      )}
    </ul>
  );
}