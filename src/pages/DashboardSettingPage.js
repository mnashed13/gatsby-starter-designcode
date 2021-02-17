import React from 'react'
import Link from 'gatsby-link'

import Footer from '../components/footer'
import '../layouts/AccountSettings.css'
import StageCard from '../components/StageCard'
import DashboardHeader from '../components/DashboardHeader'
// import PricingCard from '../components/PricingCard'
import DocumentsCard from '../components/DocumentsCard'
const DocumentSettingPage = () => (
    <div>
        <div className="AccountsPage">
            <div className="AccountsHero">
                <DashboardHeader />
                <div className="AccountsHeroGroup">
                    <div className="FAHeaderImageSetting">
                        <img src={require('../assets/LogoWhite.png')} />
                        <div className="titleCred">
                            <h1>Account Settings</h1>
                            <h2> Welcome back : Michael Nashed </h2>
                        </div>

                    </div>

                </div>
                <div className="personalDetailsHeader">

                    <h3>Personal Details</h3>
                </div>
                <div className="PersonalInfoRow">
                    <div className="personalDetails">
                        <h5> First Name</h5>
                        <p> Michael</p>

                        <h5> Last Name</h5>
                        <p> Nashed</p>
                    </div>
                    <div className="personalDetails2">
                        <h5> Email</h5>
                        <p> mnashed13@gmail.com</p>

                        <h5>Phone</h5>
                        <p> +614123456789</p>
                    </div>
                    <img src="" />


                </div>






            </div>


        </div>
    </div>
)

export default DocumentSettingPage
