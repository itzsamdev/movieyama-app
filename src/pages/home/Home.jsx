import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "./Home.css"
import MovieList from "../../component/Movielist/MovieList"

const Home = () => {
    const [popularmovies, setPopularmovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=d97508404cfbb48cfc8addeeb6612c31&language=en-US")
            .then(res => res.json())
            .then(data => setPopularmovies(data.results))


    }, [])
    return (
        <>
            <div className="poster">
                <div className="carousel_container">
                    <Carousel showThumbs={false}
                        autoPlay={true}
                        transitionTime={1.5}
                        infiniteLoop={true}
                        showStatus={false}>
                        {popularmovies.filter((item, index) => index < 10).map(movie => {
                            return <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                                    <div className="posterImage__runtime">{movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average : ""}
                                            <i className='fas fa-star' />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>

                            </Link>

                        })}
                    </Carousel>
                </div>
                <MovieList />
            </div>
        </>
    )
}

export default Home