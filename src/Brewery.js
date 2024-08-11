import React from "react";
import './Brewery.css'

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
  width: "80vw"
}


function Brewery (props) {

  const {beer, index} = props

  return (
    <div id="upper">
      <iframe scrolling="no" style={iFrameStyles} src={beer.website_url} title="description"></iframe>
      <div style={rightStyles}>
        <h3 key={index}>{beer.name}</h3>
        <span> Brewery type: {beer.brewery_type}</span>
        <h4>Phone: {beer.phone}</h4>
        <p>Street: {beer.street} <span> City: {beer.city}</span> Website: {beer.website_url}</p> 
      </div>
    </div>


  )
}

export default Brewery