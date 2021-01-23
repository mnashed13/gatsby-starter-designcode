import React from 'react'
import './form.css'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'

import SmallCard from './smallCard.js'







const Form = () => {

    const { user } = useAuth0();
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm1">
                    <img
                        src={user.picture}
                        alt="Profile"
                    />
                </div>
                <div class="col-sm">
                    <div className="box">
                        <h1> Profile: </h1>
                        <h2> Name:{user.name}</h2>
                        <h2> Nickname:{user.nickname} </h2>
                        <h2> Email:{user.email} </h2>
                        <SmallCard
                            title="courses"
                            link="CoursePage"
                        />
                        <LogoutButton />
                    </div>
                </div>
                <div class="col-sm">
                </div>
            </div>
            <smallCard
                title="Test1"
                link="./Home"
            />
        </div>

    )
}

export default Form
