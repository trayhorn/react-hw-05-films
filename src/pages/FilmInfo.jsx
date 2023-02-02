import { useParams } from "react-router-dom";
import { useGetFilmInfoQuery } from "redux/MoviesApi";
import AdditionalInfo from "components/AdditionalInfo";
import ErrorMessage from "components/ErrorMessage";
import MainInfo from "components/MainInfo";


export default function FilmInfo() {
  const { movieId } = useParams()
  const { data: filmInfo, error } = useGetFilmInfoQuery(movieId);

  if (!filmInfo) {
    return;
  }

  const { poster_path, title, runtime, overview, genres } = filmInfo;

  return (
    <>
      {error && <ErrorMessage />}
      <MainInfo
        posterImage={poster_path}
        title={title}
        runtime={runtime}
        overview={overview}
        genres={genres}
      />
      <AdditionalInfo movieId={movieId} />
    </>
  );
}