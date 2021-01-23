import React from 'React'
import './LearningCard.css'
// import LearnMoreBtn from './LearnMoreBtn'


const LearningCard = props => (
    <div className="LearningCard">
        <h3>{props.title}</h3>
        <img src={props.image} />
        <p>{props.text}</p>
        <button href="./">Learn More</button>
    </div>
)

export default LearningCard