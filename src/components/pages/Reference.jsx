import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

const Reference = () => {
    const [references, setRefernces] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Parkhyeonshin/react_api/main/src/utils/reference.json")
            .then((response) => response.json())
            // .then((result) => console.log(result.cssRefer))
            .then((result) => setRefernces(result.cssRefer))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={["reference", "book"]} />
                <ReferCont references={references} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Reference;
