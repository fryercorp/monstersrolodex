import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className="card-container"> 
        <img id={props.monster.name} alt="monster" src={props.monster.image} width="300px" height="400px" />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </div>
)