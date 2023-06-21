import React, { useEffect, useState } from "react"
import "./Search.css"
import { useParams } from "react-router-dom"
import Cards from "../Card/Cards"

const SearchResult = ({ SearchKey }) => {
    const { movie } = useParams()
    const [searchList, setSearchList] = useState([])


    useEffect(() => {
        // getData()
        searchResult()
    }, []);

    useEffect(() => {
        // getData()
        searchResult()
    }, [movie])


    console.log(movie)

    const search_API =
        "https://api.themoviedb.org/3/search/movie?&api_key=d97508404cfbb48cfc8addeeb6612c31&query=";

    const searchResult = () => {
        fetch(search_API + movie)
            .then((res) => res.json())
            .then((data) => {
                setSearchList(data.results)
                // console.log(data.results)
            });
    };

    return (
        <div className="movie__list">
            <div className="list__cards">
                {
                    searchList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default SearchResult