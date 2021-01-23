import React from 'React'
import './CommsCard.css'
import VideoModal from '../components/VideoModal'



function MessageHandler() {
    window.location.assign("http://localhost:8000/ChatApp")
}


const CommsCard = props => (
    <div className="CommsCard" onClick={MessageHandler}>
        <h3>Mesasge Title</h3>
        <h4>Advisor: David </h4>
        {/* <img src={require('../assets/house.png')} /> */}


    </div>
)

export default CommsCard
