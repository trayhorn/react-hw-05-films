import { useParams } from "react-router-dom";
import { useGetFilmInfoQuery, useGetFilmVideosQuery } from 'redux/MoviesApi';
import { ErrorMessage, MainInfo } from '../components';


export default function FilmInfo() {
  const { movieId } = useParams()
  const { data: filmInfo, error } = useGetFilmInfoQuery(movieId);
  const { data: filmVideos } = useGetFilmVideosQuery(movieId);


  if (!filmInfo || !filmVideos) {
    return;
  }

  console.log(filmVideos.results);

  const getTrailerKey = (videos) => {
    const filteredVideos = videos.filter(video => video.name === 'Official Trailer');
    return filteredVideos[0].key;
  }

  const { poster_path, title, runtime, overview, genres } = filmInfo;
  const videoKey = getTrailerKey(filmVideos.results);

  return (
    <>
      {error && <ErrorMessage />}
      <MainInfo
        posterImage={poster_path}
        title={title}
        runtime={runtime}
        overview={overview}
        genres={genres}
        movieId={movieId}
        videoKey={videoKey}
      />
    </>
  );
}