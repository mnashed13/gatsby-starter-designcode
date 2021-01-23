import React from 'React'
import './LargeTitleBox.css'
import VideoModal from '../components/VideoModal'
const LargeTitleCard = props => (
    <div className="LargeTitleCard">
        <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <a href={props.link}>
            <VideoModal />
        </a>
    </div>
)
export default LargeTitleCard