import { useParams } from "react-router-dom";

export default function FilmInfo() {
  const {movieId} = useParams()

  return <div>{movieId}</div>;
}