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
                            <h1>Dashboard</h1>
                            <h2> Welcome back : Michael Nashed </h2>
                        </div>
                    </div>

                </div>
                <div classname="PersonalDetailsSections">
                    <h3> Personal Details</h3>
                </div>





            </div>

        </div>
    </div>
)

export default DocumentSettingPage
