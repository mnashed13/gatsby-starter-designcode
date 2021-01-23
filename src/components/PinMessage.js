import React from 'React'
import './PinMessage.css'
import Link from 'gatsby-link'
// import { Icon, InlineIcon } from '@iconify/react';
// import plusCircleOutlined from '@iconify/icons-ant-design/plus-circle-outlined';




function MessageHandler() {
    window.location.assign("http://localhost:8000/ChatApp")
}



const PinMessage = props => (
    <div className="PinMessage" onClick={MessageHandler}>
        <h3>Pin New Message</h3>
        <div className="ImageHolder">
            {/* <img src={require('../assets/LogoWhite.png')} /> */}
            {/* <Icon icon={plusCircleOutlined} style={{ color: '#ffffff', fontSize: '16px', 'margin-left': '145px', 'margin-top': '-42px' }} /> */}

        </div>
    </div>
)

export default PinMessage
