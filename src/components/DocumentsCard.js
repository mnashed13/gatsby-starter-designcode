import React from 'React'
// import { reducePropsToState } from 'react-helmet/lib/HelmetUtils'
import './DocumentsCard.css'


const DocumentsCard = props => (
    <div className="DocumentsCard">

        <img src={props.image} />
        <p>{props.text}</p>
        <p>{props.date}</p>
    </div>
)

export default DocumentsCard