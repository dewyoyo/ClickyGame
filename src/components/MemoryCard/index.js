import React from "react";
import "./MemoryCard.css";

const MemoryCard = props => (
    <div className="card">
        <div className="img-container">
            <div onClick={() => props.selectImage(props.id)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.id} src={props.image} />
            </div>
        </div>
    </div>
);

export default MemoryCard;
