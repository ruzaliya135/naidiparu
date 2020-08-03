import React, {useState} from 'react';
import styleclasses from './Card.module.css';
import cardBack01 from '../data/cardBacks/cardBack01.jpg'

const Card = (props) => {
    let [cardImage, setcardImage]=useState(cardBack01);
    const FlipCard=()=>{

setcardImage(props.cardfase)
    }

    return (
        <div onClick={FlipCard}
            className={styleclasses.card}
            style={{backgroundImage:`url(${cardImage})`}}>

        </div>


    )
}
export default Card;