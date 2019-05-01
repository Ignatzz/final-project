import React from "react";
import { Link } from "react-router-dom"

const Gameover = () => {
    return (
        <div className="Container">
        <span className="text1">Game Over</span>
        <br />
        <span className="text2">
        <Link to="/fairmount">
        Try Again
        </Link>
        </span>
        <br />
        <span className="text3">
        <Link to="/main">
        Exit
        </Link>
        </span>
        </div>
    )
}

export default Gameover