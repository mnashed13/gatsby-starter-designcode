import React from 'React'
import './Footer.css'

const Footer = () => (
  <div className="Footer">
    {/* <img src={require('../assets/IEC-Logo-1.svg')} /> */}
    <div className="FooterHeading">
      <p2>Dont Be a stranger!Get in touch with us!</p2>
    </div>
    <ul>
      <a1 href="/AboutUs">
        <li>About Us</li>
      </a1>
      <a1 href="/ContactUs">
        <li>Contact Us</li>
      </a1>
      <a1 href="/Process">
        <li>Process</li>
      </a1>
    </ul>
  </div>
)

export default Footer
