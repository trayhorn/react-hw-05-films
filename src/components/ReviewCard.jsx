

export default function ReviewCard({ id, author, content, changeOption, showMore, index }) {
  return (
    <li key={id} className="reviews-list__item">
      <p>
        <b>{author}</b>
      </p>
      <p>{showMore ? content : content.substring(0, 250)}</p>
      <button onClick={() => changeOption(index)}>
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </li>
  );
}
