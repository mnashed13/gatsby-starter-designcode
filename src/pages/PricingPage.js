import React from 'react'
import Link from 'gatsby-link'
import '../layouts/PricingPage.css'
import Footer from '../components/footer'
import SubCard from '../components/SubscriptionCard'
import Card from '../components/card'
import Header from '../components/header'
import SubCardBG from '../components/SubCard'

// import StageCard from '../components/StageCard'
// import PricingCard from '../components/PricingCard'
// // import StripePaymentCard from '../components/StripeCardPayment'

const PricingPage = () => (
  <div>

    <div className="CoursesPage">
      <Header />
      <div className="PriceBGimage">
        <div className="CoursesHero">
          <div className="PricingHeroGroup">

            <h1> Subscription Packages</h1>

          </div>
          <br />

          <div className="PricingSection">
            {/* <h2> Pricing</h2> */}
          </div>
          <br />
          <div className="PricingCardSection">

            {/* <SubCard /> */}
            <SubCardBG />

          </div>



        </div>

      </div>


    </div>

  </div >
)

export default PricingPage
