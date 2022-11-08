import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper";

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
                    <ul>
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
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
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MovieList;
