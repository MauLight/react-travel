import React from "react";
//import Star from "../../img/star.png"
import Map from "../../img/1.png"


export default function Cards(props) {


    return (
        <div className="cards">
            <img src={props.item.imageUrl} className="card--image" />
            <div id="wrapper">
                <div className="card--stats">
                    <img src={Map} className="card--star" />
                    <h2 className="location">{props.item.location}</h2>
                    <a className="card--ref" href={props.item.googleMapsUrl}>View in Google Maps</a>
                </div>
                <div id="wrapper2">
                    <h1 className="title">{props.item.title}</h1>
                    <h3 className="date">{props.item.startDate} - {props.item.endDate}</h3>
                    <p className="description">{props.item.description}</p>
                </div>
            </div>


        </div>
    )
}


// this expression {props.openSpots === 0 && <div className="card--badge">Sold Out</div>}
// means that the <div> element will only render if props.openSpots value equals 0 