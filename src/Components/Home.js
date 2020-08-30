import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <h2>Welcome to <br/>Cricket League Tournament</h2>
            <p>To Know More</p>
            <Link to="/dashboard">Click Here</Link>
        </div>
    )
}

export default Home
