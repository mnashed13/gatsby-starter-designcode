import React, { useState } from 'react'
import './Modal.css'
// import { useAuth0 } from '@auth0/auth0-react'
// import { Icon } from '@iconify/react';
// import moonIcon from '@iconify/icons-bi/moon';


// const ChangeColor = useState(false)


const ChangeColor = false;
const DarkModeButton = () => {

    return <button onClick={() => ChangeColor(prevMode => !prevMode)}>
        DarkMode

    </button>
}

export default DarkModeButton
