import React from 'React'
import './ChatSession.css'


const ChatSession = props => (
    <div className="ChatSessionCard">
        <img src={props.avatar} />
        <div className="ChatCredentials">
            <h3>{props.name}</h3>
            <p>{props.status}</p>
        </div>

    </div>
)

export default ChatSession 
