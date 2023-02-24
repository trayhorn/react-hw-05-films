import { NavLink, useParams } from 'react-router-dom';
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
            <NavLink key={id} className="actorsList_card" to={`/person/${id}`}>
              <ActorCard
                id={id}
                image={profile_path}
                name={name}
                character={character}
              />
            </NavLink>
          ),
      )}
    </ul>
  );
}
