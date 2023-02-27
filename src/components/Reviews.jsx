import { useParams } from 'react-router-dom';
import { useGetFilmReviewsQuery } from 'redux/MoviesApi';
import { useState } from 'react';
import ReviewCard from './ReviewCard';

export default function Reviews() {
  const [showMore, setShowMore] = useState(false);
  const { movieId } = useParams();

  const { data } = useGetFilmReviewsQuery(movieId);

  if (!data) {
    return;
  }

  const handleButtonClick = index => {
    console.log(index);
    setShowMore(prev => !prev);
  };

  const reviews = data.results;
  return (
    <ul className="reviews-list">
      {reviews.length !== 0 ? (
        reviews.map(({ id, author, content }, index) => (
          <ReviewCard
            index={index}
            key={id}
            author={author}
            content={content}
            showMore={showMore}
            changeOption={handleButtonClick}
          />
        ))
      ) : (
        <p>No reviews</p>
      )}
    </ul>
  );
}
