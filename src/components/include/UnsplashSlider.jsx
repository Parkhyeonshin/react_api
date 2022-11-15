import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

function UnsplashRan({ random }) {
    return (
        <li>
            <a href={`https://unsplash.com/photos/${random.id}`}>
                <img src={random.urls.regular} alt={random.urls.alt_description} />
            </a>
        </li>
    );
}

const UnsplashSlider = ({ random }) => {
    return (
        <section className="movie__popular">
            <div className="container">
                <div className="unsplash__inner">
                    <h2>Unsplash Random</h2>
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={false}
                        slidesPerGroupSkip={1}
                        grabCursor={true}
                        keyboard={{
                            enabled: true,
                        }}
                        breakpoints={{
                            769: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                        }}
                        scrollbar={true}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {random.map((random, index) =>
                            index < 10 ? (
                                <SwiperSlide key={index}>
                                    <UnsplashRan key={index} random={random} index={index} />
                                </SwiperSlide>
                            ) : null
                        )}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default UnsplashSlider;
