import s from './Cast.module.css';

export default function ActorCard({ id, image, name, character }) {
  return (
    <li className={s.actorCard} key={id}>
      <img
        className={s.actorsImage}
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt={image}
      />
      <p className={s.charName}>{character}</p>
      <p className={s.actorName}>{name}</p>
    </li>
  );
}