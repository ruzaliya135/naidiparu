import React from 'react';
import styleclasses from './Map.module.css';
import Card from "./Card";
import CardFase01 from '../data/cardFaces/cardFace01.png'
import CardFase02 from '../data/cardFaces/cardFace02.png'
import CardFase03 from '../data/cardFaces/cardFace03.png'
import CardFase04 from '../data/cardFaces/cardFace04.png'
import CardFase05 from '../data/cardFaces/cardFace05.png'
import CardFase06 from '../data/cardFaces/cardFace06.png'
import CardFase07 from '../data/cardFaces/cardFace07.png'
import CardFase08 from '../data/cardFaces/cardFace08.png'
import CardFase09 from '../data/cardFaces/cardFace09.png'
import CardFase10 from '../data/cardFaces/cardFace10.png'
import CardFase11 from '../data/cardFaces/cardFace11.png'
import CardFase12 from '../data/cardFaces/cardFace12.png'
import CardFase13 from '../data/cardFaces/cardFace13.png'
import CardFase14 from '../data/cardFaces/cardFace14.png'
import CardFase15 from '../data/cardFaces/cardFace15.png'
import CardFase16 from '../data/cardFaces/cardFace16.png'
import CardFase17 from '../data/cardFaces/cardFace17.png'
import CardFase18 from '../data/cardFaces/cardFace18.png'



const Map = () => {
    const CardMassiv=[
        CardFase01,CardFase01,
        CardFase02,CardFase02,
        CardFase03,CardFase03,
        CardFase04,CardFase04,
        CardFase05,CardFase05,
        CardFase06,CardFase06,
        CardFase07,CardFase07,
        CardFase08,CardFase08,
        CardFase09,CardFase09,
        CardFase10,CardFase10,
        CardFase11,CardFase11,
        CardFase12,CardFase12,
        CardFase13,CardFase13,
        CardFase14,CardFase14,
        CardFase15,CardFase15,
        CardFase16,CardFase16,
        CardFase17,CardFase17,
        CardFase18,CardFase18]
    CardMassiv.sort(function(a, b) {
        return Math.random() - 0.5
    });

    return (

        <div className={styleclasses.mapcontainer}>
        <div className={styleclasses.map}>

            {CardMassiv.map(
                (cardFase)=>
                    <Card cardfase={cardFase}></Card>

            )}
        </div>
        </div>
    )
}
export default Map;