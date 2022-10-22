import Styles from './Recipe.module.css'

import React from "react";
const Recipe =(props)=>{
    return(
        <div className={Styles.recipe}>
            <h1>{props.title}</h1>
            <ol>
            {props.ingredients.map(ing => <li>{ing.text}</li>)}
            </ol>
            <p>{props.calories}</p>
     
            <img src= {props.image} alt="Alternative Image" className={Styles.image}/>
        </div>
    )
}

export default Recipe