import React from 'react'

import '../layouts/Courses.css'
import '../layouts/AuthPage.css'
import AuthenticationModal from '../components/AuthenticationModal'

const AuthenticationPage = () => (
    <div>
        <div className="AuthPage">
            <AuthenticationModal />
        </div>
    </div>
)

export default AuthenticationPage
