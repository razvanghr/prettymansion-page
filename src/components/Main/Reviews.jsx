import "./reviews-style.css";

function Review({ rev, author }) {
  return (
    <div className="rev-box">
      <p>{rev}</p>
      <p className="rev-author">{author}</p>
    </div>
  );
}

export default Review;
