import React from "react";
import './Brewery.css'
import heart from './purple-heart.png'
import fullHeart from "./full-heart.png"

const iFrameStyles = {
  height: "30vh",
  width: "15vw",
  color: "red",
  position: "absolute",
  left: "0px"
  
}

const rightStyles = {
  position: "abolute",
  left: "30vw",
  width: "80vw",
  right: 0
}


function Brewery (props) {

  const {beer, index, liked, clickFunc, visible} = props

  return (
    <div id="upper" style={{visibility : visible ? 'visible' : 'hidden' , position : visible ? "static" : "absolute"}}>
      <iframe scrolling="no" style={iFrameStyles} src={beer.website_url} title="description"></iframe>
      
      <div id="right" style={rightStyles}>
        <h3 key={index}>{beer.name}</h3>
        <span> Brewery type: {beer.brewery_type}</span>
        <h4>Phone: {beer.phone}</h4>
        <p>Street: {beer.street} <span> City: {beer.city}</span> Website: <a href={beer.website_url}>{beer.website_url}</a></p> 
      </div>
      <img src={liked ? fullHeart : heart} onClick={clickFunc}></img>
    </div>


  )
}

export default Brewery