import React from 'React'
import './Card.css'
import VideoModal from '../components/VideoModal'

const Card = props => (
  <div className="Card">
    <img src={props.image} />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    <a href={props.link}>
      <VideoModal />
    </a>
  </div>
)

export default Card
