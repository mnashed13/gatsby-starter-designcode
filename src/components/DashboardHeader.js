import React from 'react'
import Link from 'gatsby-link'
import './DashboardHeader.css'

class DashboardHeader extends React.Component {

    render() {
        return (
            <div className='DashHeader'>
                <div className="DashboardNavBG">
                    <div className="DashboardHeaderGroup">
                        <div className="HeaderRow">
                            <img src={require('../assets/LogoWhite.png')} />
                            <div className="HeaderName">
                                <p>Monarch</p>
                                <p>Welcome back, Michael</p>
                            </div>
                        </div>
                        <Link to="/dashboard">
                            <button>Dashboard</button>
                        </Link>
                        <Link to="/CoursePage">
                            <button>Courses</button>
                        </Link>
                        <Link to="/ChatApp">
                            <button>Messages</button>
                        </Link>
                        <Link to="/DocumentsPage">
                            <button>Saved Documents</button>
                        </Link>
                        <Link to="/DashboardSettingPage">
                            <button>Account Settings</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardHeader


