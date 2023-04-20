import { useState } from "react";
import Button from '@mui/material/Button';

export default function ReviewCard({ id, author, content }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <li key={id} className="reviews-list__item">
      <p>
        <b>{author}</b>
      </p>
      <p>{showMore ? content : content.substring(0, 250)}</p>
      <Button
        onClick={() => setShowMore(prev => !prev)}
        variant="contained"
        size="small"
      >
        {showMore ? 'Show less' : 'Show more'}
      </Button>
    </li>
  );
}
