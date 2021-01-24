import React from "react"
import Layout from "../components/layout/layout"
import '../layouts/index.css'
import SEO from "../components/layout/seo"
import Card from '../components/card'
import Footer from '../components/footer'
import PricingCard from '../components/PricingCard'
import AuthModal from '../components/Modal'
import StageCard from '../components/StageCard'
import Header from '../components/header'







function IndexPage() {
  return (

    <Layout>
      <SEO title="Home" />
      <div>
        <div className="Page">
          {/* <div className={DarkModeButton ? 'Page' : 'light-mode'}> */}
          <Header />
          {/* test */}
          <div className="BGimage">
            <div className="Hero">
              <div className="HeroGroup">
                <h1>MONARCH</h1>
                <p>Simplify your financial life</p>
              </div>
              <div className="infogroup2">
                <div className="infoTextGroup">
                  <h3>
                    Monarch, is the place for you to get in touch <br />
                with a financial advisor to get ahead today.
              </h3>
                  <p>
                    We will help you get back on track,not just throught tradional
                    financial methods. We will show how to succeed in this post
                    covid era of business and what skills to matain your fianacial wealth.
              </p>
                </div>
              </div>
              <div className="CardGroup">
                <Card
                  title="ETF's 101"
                  image={require('../assets/creditCard.png')}
                  text="a Complete understanding of ETFs"
                />

                <Card
                  title="AUD 1Q Forecasts"
                  text="By John Appleseed"
                  image={require('../assets/ethereum.png')}
                />

                <Card
                  title="Australian Real Estate"
                  text="By Sohair Nashed"
                  image={require('../assets/coinUSD_S.png')}
                />
              </div>
              <div className="PricingSectionHeader">
                <h2>Pricing</h2>
              </div>
              <div className="PricingSection">
                <PricingCard
                  title="Basic "
                  image={require('../assets/coinUSD_S.png')}
                  text2="Basic Subscription package"
                  text="$10"
                  link="./PricingPage"
                />
                <PricingCard
                  title="Starter"
                  image={require('../assets/coinUSD_S.png')}
                  text2=" Starter Subscription package"
                  text="$15"
                  link="./PricingPage"
                />
                <PricingCard
                  title="Family"
                  image={require('../assets/coinUSD_S.png')}
                  text2="Family Subscription package"
                  text="$20"
                  link="./PricingPage"
                />
              </div>
              <div className="ProcessSectionHeader">
                <h2> Process</h2>
              </div>
              <div className="PricingSection">
                <StageCard
                  title="Phase 1"
                  text2="Analyzing your outgoings"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit leo sed eget ullamcorper at euismod sem consequat netus. Neque tristique porttitor amet tristique varius eget faucibus. Erat et tortor vitae quis donec massa. Et enim vitae scelerisque diam, et sed purus lectus. Non, vitae tempus, vel tortor mollis nibh condimentum."
                  link="./ContactUs"
                />
                <StageCard
                  title="Phase 2"
                  text2="Define a Plan"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit leo sed eget ullamcorper at euismod sem consequat netus. Neque tristique porttitor amet tristique varius eget faucibus. Erat et tortor vitae quis donec massa. Et enim vitae scelerisque diam, et sed purus lectus. Non, vitae tempus, vel tortor mollis nibh condimentum."
                  link="./dashboard/"

                />
                <StageCard
                  title="Chat App Test "
                  text2="Execute your finiacail Plans"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit leo sed eget ullamcorper at euismod sem consequat netus. Neque tristique porttitor amet tristique varius eget faucibus. Erat et tortor vitae quis donec massa. Et enim vitae scelerisque diam, et sed purus lectus. Non, vitae tempus, vel tortor mollis nibh condimentum."
                  link="./ChatApp"

                />
              </div>
              <br />
              <div className="LearningSectionHeader">
                <h2> Learning Pathways</h2>
              </div>
              <br />

              <div className="CardGroup">
                <Card
                  title="Course 1 "
                  image={require('../assets/GroupLogoAsset1.png')}
                  text="a Complete understanding of ETFs"
                  link="/ContactUs"
                />

                <Card
                  title="Course 2"
                  text="By Sohair Nashed"
                  image={require('../assets/GroupLogoAsset1.png')}
                  link="/ContactUs"
                />

                <Card
                  title="News Story 1"
                  text="By Sohair Nashed"
                  image={require('../assets/GroupLogoAsset1.png')}
                  link="/ContactUs"
                />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Layout>

  )
}

export default IndexPage




