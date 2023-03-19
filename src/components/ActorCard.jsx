export default function ActorCard({ id, image, name, character }) {
  return (
    <li key={id}>
      <img
        className="actorsList__image"
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt={image}
      />
      <p className="actorsList__charName">{character}</p>
      <p className="actorsList__actorName">{name}</p>
    </li>
  );
}