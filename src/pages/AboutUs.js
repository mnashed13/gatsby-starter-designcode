import React from 'react'
import Link from 'gatsby-link'
// import '../layouts/AboutUs.css'
import Card from "../components/card"
import Footer from '../components/footer';
import Header from '../components/header';



const AboutUsPage = () => (
  <div>
    <div className="Hero">
      <Header />
      <div className="HeroGroup">
        <h1>About Us</h1>
        <Link to="/page-2/">Learn More</Link>
      </div>
    </div>

    <div className="infogroup2">

      <div>
        <h3> Looking for a sustainable building specialist?</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          laoreet elit quis diam fermentum, ac efficitur nulla congue. P
          ellentesque tincidunt tortor nec laoreet pulvinar. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Suspendisse id elit est. Sed ipsum magna, vulputate ut mi
          ut, suscipit commodo sem. Maecenas eget odio vel risus mollis
          convallis. Vivamus blandit risus quis sem ultricies, et rutrum felis
          viverra. Nunc at nunc in orci gravida egestas. Nunc quis metus
          laoreet, vehicula dolor vel, rutrum mauris. Donec volutpat risus sit
          amet mattis blandit. Curabitur scelerisque orci massa, non eleifend
          lacus dignissim finibus. Donec eget erat ut dui dignissim pharetra.
  </p>

        <br />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          laoreet elit quis diam fermentum, ac efficitur nulla congue. P
          ellentesque tincidunt tortor nec laoreet pulvinar. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Suspendisse id elit est. Sed ipsum magna, vulputate ut mi
          ut, suscipit commodo sem. Maecenas eget odio vel risus mollis
          convallis. Vivamus blandit risus quis sem ultricies, et rutrum felis
          viverra. Nunc at nunc in orci gravida egestas. Nunc quis metus
          laoreet, vehicula dolor vel, rutrum mauris. Donec volutpat risus sit
          amet mattis blandit. Curabitur scelerisque orci massa, non eleifend
          lacus dignissim finibus. Donec eget erat ut dui dignissim pharetra.
  </p>
      </div>
      <div>
        <img src={require('../assets/Profile.png')} />
      </div>
    </div>


    <div className="infogroup2">


      <h3>We are certified and <br /> rarring to start on your project </h3>

      <div>
        <img src={require('../assets/ABSA 1.png')} />
      </div>
    </div>


    <br />

    <div className="CardGroup">
      <Card
        title="News Story 1"
        text="By Sohair Nashed"
        image={require('../assets/card-bg1.png')} />
      <Card
        title="News Story 2"
        text="By Sohair Nashed"
        image={require('../assets/card-bg2.png')} />
      <Card
        title="News Story 3"
        text="By Sohair Nashed"
        image={require('../assets/card-bg3.png')} />
    </div>


    <Footer />

  </div>
)

export default AboutUsPage