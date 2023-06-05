import { useEffect, useState } from "react";

import "./homePage.css";
import Intro from "../../components/Main/Intro";
import TextContent from "../../components/Main/TextContent";
import Facilities from "../../components/Main/Facilitati";
import Slider from "../../components/Main/Swiper";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Intro />
      <div className="container">
        <TextContent />
        <Facilities />
        <Slider />
      </div>
      <Footer />
    </>
  );
}

export default Home;
