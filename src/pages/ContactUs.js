import React from 'react'
import Link from 'gatsby-link'
import '../layouts/ContactUs.css'
import Footer from '../components/footer'
import Header from '../components/header'

const ContactUsPage = () => (
  <div>
    <div className="ContactPage">
      <Header />
      <div className="ContactHero">
        <div className="ContactHeroGroup">
          <h1> About Us</h1>
          <h2>More about what we do and how we can help you</h2>
        </div>
      </div>

      <br />

      <Footer />
    </div>
  </div>
)

export default ContactUsPage
