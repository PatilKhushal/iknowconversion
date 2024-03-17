import { context } from "../context/context";
import { iKnowUtilits } from "../utility";
import { useContext, useEffect } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);

const Testimonials = () => {
  const { testimonialItems, testimonalData } = useContext(context);

  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: testimonialItems, spaceBetween: 25 },
    },
  };
  useEffect(() => {
    iKnowUtilits.dataImage();
    iKnowUtilits.imgToSVG();
  }, []);

  return (
    <div className="iknow_tm_testimonials">
      <div className="iknow_tm_main_title">
        <span>Testimonials</span>
        <h3>What people say about me</h3>
      </div>
      <div
        className={`testimonials_list owl-theme ${
          testimonialItems == 1 ? "no-sadow" : ""
        }`}
      >
        <Swiper {...props}>
          {
            testimonalData.map((value) => {
              return <SwiperSlide className="list_inner" key={value.id}>
            <div className="in">
              <div className="text">
                <p>
                  {value.review}
                </p>
              </div>
              <div className="details">
                <div className="left">
                  <div className="avatar">
                    <div
                      className="main"
                      data-img-url={value.img}
                    />
                  </div>
                  <div className="info">
                    <h3>{value.name}</h3>
                    <span>{value.position}</span>
                  </div>
                </div>
                <div className="right">
                  <img
                    className="svg"
                    src="/img/svg/left-quote.svg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
            })
          }
        </Swiper>
        <div className="owl-dots" />
      </div>
    </div>
  );
};
export default Testimonials;
