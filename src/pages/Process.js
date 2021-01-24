import React from 'react'
import Link from 'gatsby-link'
import '../layouts/Process.css'
import Footer from '../components/footer'
import Header from '../components/header'

const ProcessPage = () => (
  <div>
    <div className="ProcessPage">
      <Header />
      <div className="ProcessBGImage">
        <div className="ProcessHero">
          <div className="ProcessHeroGroup">
            <h1>Services We Offer </h1>
          </div>
          <div className="HeroElement1">
            <h2>Sample Text</h2>
            <div className="ProcessCardheading">
              <h1>The best design for your studio website</h1>
            </div>
          </div>
        </div>


      </div>

    </div>
    <Footer />
  </div>
)

export default ProcessPage
