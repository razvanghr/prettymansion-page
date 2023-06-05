import { useState, useEffect } from "react";
import i1 from "../images/i2.jpg";
import i2 from "../images/i3.jpg";
import i3 from "../images/i4.jpg";
import i4 from "../images/pg.jpg";

import "./servicepage-style.css";

import Footer from "../../components/Footer/Footer";
function Services() {
  const images = [i1, i2, i3, i4];
  const [currentImage, setCurrentImage] = useState(null);

  // Image Circuit
  useEffect(() => {
    const IntervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 2000);

    return () => clearInterval(IntervalId);
  }, []);

  return (
    <div className="service-page">
      <div className="service-main">
        <h1>We invite you to view some images of our location</h1>
        <img src={currentImage} className="img-loop" alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default Services;
