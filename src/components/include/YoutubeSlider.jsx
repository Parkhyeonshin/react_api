// import React from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper";

function YoutubeRan({ random }) {
    return (
        <li>
            <a href={`https://www.youtube.com/watch?v=${random.id.videoId}`}>
                <img src={random.snippet.thumbnails.medium.url} alt={random.snippet.description} />
            </a>
        </li>
    );
}

const YoutubeSlider = ({ random }) => {
    return (
        <section className="youtube__popular">
            <div className="container">
                <div className="youtube__inner">
                    <h2>Youtube Random</h2>
                    <Swiper
                        effect={"cube"}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        pagination={true}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper"
                    >
                        {random.map((random, index) =>
                            index < 10 ? (
                                <SwiperSlide key={index}>
                                    <YoutubeRan key={index} random={random} index={index} />
                                </SwiperSlide>
                            ) : null
                        )}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default YoutubeSlider;
