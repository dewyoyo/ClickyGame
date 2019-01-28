import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li className="nav-item"><a href="/">Clicky Game</a></li>{" "}
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>{" "}
            <li className="nav-item">Score: <span style={{color: "yellow"}}>{props.curScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default NavBar;

