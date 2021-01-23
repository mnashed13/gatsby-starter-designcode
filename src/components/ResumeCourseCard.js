import React from 'React'
import './ResumeCourseCard.css'

const ResumeCourseCard = props => (

    <div className="ResumeCourseCard">
        <h3>{props.coursetitle}</h3>
        <p2>Tutor: {props.tutor}</p2>


    </div>
)

export default ResumeCourseCard
