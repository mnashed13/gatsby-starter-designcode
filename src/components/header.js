import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
// import AuthModal from '../components/Modal'
// import LoginButton from './loginButton'
import DarkModeButton from './DarkMode'
import AuthenticationButton from './authentication-button'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlescroll)
  }

  handlescroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require('../assets/LogoWhite.png')} />
          </Link>
          <Link to="/">
            <button>Home</button>
          </Link>
          {/* <Link to="/ContactUs">
            <button>About</button>
          </Link> */}
          <Link to="/Process">
            <button>Services</button>
          </Link>
          <Link to="/Courses">
            <button>Courses</button>
          </Link>
          {/* <AuthModal /> */}
          {/* <LoginButton /> */}
          {/* <AuthenticationButton /> */}
          <Link to="/AuthenticationPage">
            <button>Login</button>
          </Link>
          <DarkModeButton />
          {/* <SingleModal></SingleModal> */}
        </div>
      </div>
    )
  }
}

export default Header
