export default function ActorCard({ id, image, name, character }) {
  return (
    <li className="actorsList_card" key={id}>
      <img
        className="actorsList_image"
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt={image}
      />
      <p className="actorsList_charName">{character}</p>
      <p className="actorsList_actorName">{name}</p>
    </li>
  );
}