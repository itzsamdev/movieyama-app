import React, { useState } from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";


const Header = () => {
    const navigate = useNavigate()

    const [changedValue, setChangedValue] = useState("");
    //  Search Input ..

    const changeHandler = (e) => {
        setChangedValue(e.target.value);
    };


    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            navigate(`/search/${changedValue}`)
        }
    };
    return (
        <div className='Header'>
            <div className="headerLeft">
                <Link to="/"> <img className='header__icon' src="https://i.postimg.cc/zft264XX/logo-removebg-preview.png" alt='logo' /></Link>
                <Link to="movies/popular"><span>Popular</span></Link>
                <Link to="movies/top_rated"><span>Top Rated</span></Link>
                <Link to="movies/upcoming"><span>Upcoming</span></Link>
            </div>
            <div className='headerRight'>
                <input
                    placeholder="Search.."
                    type="search"
                    onKeyDown={(e) => onKeyDown(e)}
                    value={changedValue}
                    onChange={(e) => changeHandler(e)}
                />
                <BsSearch className="_searchIcon" />
            </div>
        </div>
    )
}

export default Header