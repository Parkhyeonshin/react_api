import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";

const Movie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("https://api.themoviedb.org/3/search/movie?api_key=e9df2a50c640db534a28c26f470cc305&query=marble&page=1", requestOptions)
            .then((response) => response.json())
            .then((result) => console.log(result.results))
            .then((result) => setMovies(result.results))
            .catch((error) => console.log("error", error));

        // var requestOptions = {
        //     method: "GET",
        //     redirect: "follow",
        // };

        // fetch("https://api.themoviedb.org/3/search/movie?api_key=e9df2a50c640db534a28c26f470cc305&query=marble&page=1", requestOptions)
        //     .then((response) => response.json())
        //     .then((result) => console.log(result))
        //     .then((result) => setMovies(result.results))
        //     .catch((error) => console.log("error", error));
    }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={["movie", "reference api"]} />
                <MovieCont movies={movies} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Movie;
