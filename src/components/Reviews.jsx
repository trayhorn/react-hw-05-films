import { useParams } from 'react-router-dom';
import { useGetFilmReviewsQuery } from 'redux/MoviesApi';
import ReviewCard from './ReviewCard';

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
          <ReviewCard
            key={id}
            author={author}
            content={content}
          />
        ))
      ) : (
        <p>No reviews</p>
      )}
    </ul>
  );
}
