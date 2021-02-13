import React from 'React'
import './smallcardBG.css'


const SubCardBG = props => (
    <div className="smallcardBG">

        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <a href={props.link}>Link</a>

    </div>
)

export default SubCardBG

