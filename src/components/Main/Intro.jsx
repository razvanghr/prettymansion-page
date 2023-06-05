import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

function Intro() {
  const [introText, setIntroText] = useState("");

  const helloWords = ["Welcome", "Bine ati venit ", "Benvenuto a ", "Witamy w"];

  // Redirect to BookingPage
  const redirectToBooking = () => {
    window.location.href =
      "https://www.booking.com/hotel/ro/pretty-mansion.ro.html";
  };

  return (
    <>
      <main className="intro-home-page">
        <Typewriter
          options={{
            strings: [
              "Welcome to",
              "Bine ati venit la",
              "Benvenuto a ",
              "Witamy w",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <h1 className="intro-text">Pretty Mansion</h1>
        <button className="redirect-btn" onClick={redirectToBooking}>
          Book Now
        </button>
        <div className="intro-icons">
          <div className="option-box">
            <img
              className="icons"
              src="https://ramadaoradea.ro/wp-content/uploads/2018/04/checkin.png"
              alt=""
            />
            <p>Check-in</p>
          </div>
          <div className="option-box">
            <img
              className="icons"
              src="https://ramadaoradea.ro/wp-content/uploads/2018/04/freewifi.png"
              alt=""
            />
            <p>Free WiFi</p>
          </div>
          <div className="option-box">
            <img
              className="icons"
              src="https://ramadaoradea.ro/wp-content/uploads/2018/04/parking.png"
              alt=""
            />
            <p>Free Parking</p>
          </div>
          <div className="option-box">
            <img
              className="icons"
              src="https://ramadaoradea.ro/wp-content/uploads/2018/04/bar-restaurant.png"
              alt=""
            />
            <p>Food & Drinks</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Intro;
