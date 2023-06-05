import FacilitiesCard from "./FacilitatiCard";

function Facilities() {
  return (
    <div className="facilities">
      <div className="facilities-text-box">
        <h1>Facilities</h1>
        <p>
          To enjoy a relaxing experience and to reward you for choosing to visit
          us at Pretty Mansion, we have prepared special packages. You can
          contact us at <span>reservations@prettymansion.com</span> or{" "}
          <span>+40 758 628 352</span> to help you choose the most suitable
          package for you!
        </p>
      </div>
      <div className="facilities-card-box">
        <FacilitiesCard
          text="
          Restaurant"
          source="https://cf.bstatic.com/xdata/images/hotel/max500/54855295.jpg?k=b2b19e85c6053b763f82ed1c4854c285d6e5cdbb6c8e3a50062d6ec26b194f50&o=&hp=1"
        />
        <FacilitiesCard
          text="Comfort"
          source="https://cf.bstatic.com/xdata/images/hotel/max1024x768/54855288.jpg?k=a405c9ee780aba2561724cd19b533d674782004f24e88c072075d5f02afd4eb7&o=&hp=1"
        />
        <FacilitiesCard
          text="
          Quality"
          source="https://cf.bstatic.com/xdata/images/hotel/max1280x900/55830851.jpg?k=6a6ae89dd4ee3644f7064605aa14d3b26c376410603a5bfe0b24f18fd53788ab&o=&hp=1"
        />
      </div>
    </div>
  );
}

export default Facilities;
