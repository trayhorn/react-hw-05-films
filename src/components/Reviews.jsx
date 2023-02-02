import { useParams } from 'react-router-dom';
import { useGetFilmReviewsQuery } from 'redux/MoviesApi';

export default function Reviews() {
  const { movieId } = useParams();

  const { data } = useGetFilmReviewsQuery(movieId);

  if (!data) {
    return;
  }

  const reviews = data.results;
  return (
    <ul className="reviews-list">
      {reviews.length !== 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>
              <b>{author}</b>
            </p>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>No reviews</p>
      )}
    </ul>
  );
}
