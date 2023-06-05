import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Review from "./Reviews";

function Slider() {
  return (
    <>
      <div className="slider-section">
        <div className="slider-text">
          <h1>Rewies</h1>
          <img
            className="dec-bar"
            src="https://ramadaoradea.ro/wp-content/uploads/2018/03/divider2.png"
            alt=""
          />
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          {
            <Review
              rev="Had a fantastic stay at Pretty Mansion! The staff was friendly, rooms were clean and comfortable, and the surroundings were breathtaking. Will definitely be back!"
              author="Ana Mihai"
            />
          }
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          {
            <Review
              rev="Absolutely wonderful! Impeccable service, beautiful rooms, and a peaceful atmosphere. Highly recommended!"
              author="Radu Munteanu"
            />
          }
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          {
            <Review
              rev=" The rooms were clean, spacious, and beautifully decorated"
              author="Adrian Petrescu"
            />
          }
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          {
            <Review
              rev="Fantastic service and accommodations!"
              author="Elena Radu"
            />
          }
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
