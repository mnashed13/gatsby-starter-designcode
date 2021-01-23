import React from 'React'
import './smallcard.css'


const SmallCard = props => (
    <div className="smallcard"
        onClick="./Home"
    >

        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <a href={props.link}>Link</a>

    </div>
)

export default SmallCard

