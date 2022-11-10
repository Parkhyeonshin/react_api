import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

function MoviePopular(props) {
    return (
        <a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.title} />
            <em>
                <span className="title">{props.movie.title}</span>
                {/* <span className="star">{props.movie.vote_average}</span> */}
                <span className="star">{props.index + 1}위</span>
            </em>
        </a>
    );
}

const MovieList = (props) => {
    return (
        <section className="cont__movie">
            <div className="container">
                <div className="movie__pop">
                    <div className="movie__popname">인기 순위</div>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 390,
                            stretch: 0,
                            depth: 400,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        {props.popular.map((popular, index) =>
                            index < 10 ? (
                                <SwiperSlide key={index}>
                                    <MoviePopular key={index} movie={popular} index={index} />
                                </SwiperSlide>
                            ) : null
                        )}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default MovieList;
