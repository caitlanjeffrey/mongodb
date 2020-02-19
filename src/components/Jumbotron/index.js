import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        < div className="jumbotron jumbotron-fluid" >
            <div className="container">
                <h1 className="display-4">Welcome to React Clicky Game</h1>
                <p className="lead">Click a card to earn pints. but just don't click it twice!</p>
            </div>
        </div>
    )
};

export default Jumbotron;
