import React from 'React'
import './StageCard.css'

const StageCard = props => (
  <div className="StageCard">
    <h3>{props.title}</h3>
    <p2>{props.text2}</p2>
    <p>{props.text}</p>
    <a href={props.link}>Learn More</a>
  </div>
)

export default StageCard
