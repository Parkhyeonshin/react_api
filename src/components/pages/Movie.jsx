import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import MovieSearch from "../include/MovieSearch";
import MovieList from "../include/MovieList";
import Contact from "../layout/Contact";
const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [popular, setpopular] = useState([]);

    const search = (query) => {
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=e9df2a50c640db534a28c26f470cc305&language=ko-KOR&page=1&include_adult=false&query=${query}`
        )
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e9df2a50c640db534a28c26f470cc305&language=ko-KOR&page=1&region=`)
            .then((response) => response.json())
            .then((result) => setpopular(result.results))
            // .then((result) => console.log(result.results))
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/search/movie?api_key=e9df2a50c640db534a28c26f470cc305&language=ko-KOR&page=1&include_adult=false&query=디즈니"
        )
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            // .then((result) => console.log(result.results))
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            <Header />
            <Contents>
                <Title title={["Movie", "reference API"]} />
                <MovieList popular={popular} />
                <MovieSearch onSearch={search} />
                <MovieCont movies={movies} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};
export default Movie;
