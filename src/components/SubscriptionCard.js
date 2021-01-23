import React from 'React'
import './PricingCard.css'

const SubCard = props => (
    <div className="PricingCard">
        <img src={props.image} />

        <h3>{props.title}</h3>
        <p2>{props.text2}</p2>
        <p>{props.text}</p>
        <a href={props.link}>link</a>
    </div>
)

export default SubCard
