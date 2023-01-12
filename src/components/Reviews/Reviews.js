import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Reviews() {
  const [reviews, setReview] = useState([]);
  const { movieId } = useParams();

  const KEY = 'cb13da90a39eba44c82ce3db6bc38256';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`,
    )
      .then(r => r.json())
      .then(data => setReview(data.results));
  }, [movieId]);

  // if (!reviews) {
  //   return;
  // }

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
