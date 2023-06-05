import "./facilitati-card.css";
function FacilitiesCard({ source, text }) {
  return (
    <div className="fa-card">
      <img src={source} alt="" />
      <h1>{text}</h1>
    </div>
  );
}

export default FacilitiesCard;
