import { useParams } from "react-router-dom";
import {
  useGetPersonDetailsQuery,
  useGetPersonImagesQuery,
} from 'redux/MoviesApi';
import { nanoid } from "nanoid";

export default function PersonPage() {
  const { personId } = useParams();

  const { data: personalInfo } = useGetPersonDetailsQuery(personId);
  const { data: personalImages } = useGetPersonImagesQuery(personId);

  if (!personalInfo || !personalImages) {
    return;
  }

  console.log(personalImages.profiles);

  const { name, biography, profile_path, place_of_birth, birthday } = personalInfo;

  return (
    <>
      <section className="actor-page">
        <img
          className="actor-page__poster"
          src={`https://image.tmdb.org/t/p/original${profile_path}`}
          alt="poster"
        />
        <div className="actor-page__personal-information">
          <h1>{name}</h1>
          <p>{birthday}</p>
          <p>{place_of_birth}</p>
          <p className="actor-page__bio">{biography}</p>
        </div>
      </section>
      <section className="actor-gallery">
        {personalImages.profiles.map(({ file_path }) => (
          <div className="actor-gallery__item" key={nanoid()}>
            <img
              className="actor-gallery__image"
              src={`https://image.tmdb.org/t/p/original${file_path}`}
              alt=""
            />
          </div>
        ))}
      </section>
    </>
  );
}
