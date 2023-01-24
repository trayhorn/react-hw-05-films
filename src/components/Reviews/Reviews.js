import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'api';

export default function Reviews() {
  const [reviews, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId)
      .then(data => setReview(data.results))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul style={{padding: 0}}>
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
