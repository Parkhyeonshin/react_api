import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

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
        <section className="unsplash__popular">
            <div className="container">
                <div className="unsplash__headerinner">
                    <h2>Unsplash Random</h2>
                    <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
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
