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
                            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.157928" y="0.157906" width="7.40741" height="7.40741" rx="1.4" fill="#5D6291" />
                                <rect x="0.157928" y="11.269" width="7.40741" height="7.40741" rx="1.4" fill="#5D6291" />
                                <rect x="11.269" y="0.157906" width="7.40741" height="7.40741" rx="1.4" fill="#5D6291" />
                                <rect x="11.269" y="11.269" width="12.963" height="12.963" rx="1.4" fill="#5D6291" />
                            </svg>

                            <button>Dashboard</button>
                        </Link>

                        <Link to="/CoursePage">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.96297 0.962967C1.8584 0.962967 0.962967 1.8584 0.962967 2.96296V23.037C0.962967 24.1416 1.8584 25.037 2.96296 25.037H23.037C24.1416 25.037 25.037 24.1416 25.037 23.037V2.96297C25.037 1.8584 24.1416 0.962967 23.037 0.962967H2.96297ZM13.5741 10.2222C12.7456 10.2222 12.0741 10.8938 12.0741 11.7222V14.2778C12.0741 15.1062 12.7456 15.7778 13.5741 15.7778H19.8333C20.6618 15.7778 21.3333 15.1062 21.3333 14.2778V11.7222C21.3333 10.8938 20.6618 10.2222 19.8333 10.2222H13.5741Z" fill="#6F6C99" />
                            </svg>


                            <button>Courses</button>
                        </Link>
                        <Link to="/ChatApp">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4391 1.18888C24.6482 0.561673 24.0515 -0.0350286 23.4243 0.17404L1.52263 7.47458C0.956824 7.66318 0.787303 8.38129 1.20903 8.80302L6.64172 14.2357L14.4866 10.1265L10.3774 17.9714L15.8101 23.4041C16.2318 23.8258 16.9499 23.6563 17.1385 23.0905L24.4391 1.18888Z" fill="#6F6C99" />
                                <circle cx="3.74074" cy="20.8237" r="2.77778" fill="#6F6C99" />
                            </svg>

                            <button>Messages</button>
                        </Link>

                        <Link to="/DocumentsPage">
                            <svg width="25" height="25" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.84615 2.88462C3.84615 2.11957 4.15007 1.38585 4.69104 0.844884C5.23201 0.303914 5.96572 0 6.73077 0L18.5596 0L25 4.29231V22.1154C25 22.8804 24.6961 23.6141 24.1551 24.1551C23.6141 24.6961 22.8804 25 22.1154 25H21.1538V25.9615C21.1538 26.7266 20.8499 27.4603 20.309 28.0013C19.768 28.5422 19.0343 28.8462 18.2692 28.8462H2.88462C2.11957 28.8462 1.38585 28.5422 0.844884 28.0013C0.303914 27.4603 0 26.7266 0 25.9615V6.73077C0 5.96572 0.303914 5.23201 0.844884 4.69104C1.38585 4.15007 2.11957 3.84615 2.88462 3.84615H3.84615V2.88462ZM3.84615 5.76923H2.88462C2.6296 5.76923 2.38503 5.87054 2.20471 6.05086C2.02438 6.23118 1.92308 6.47575 1.92308 6.73077V25.9615C1.92308 26.2166 2.02438 26.4611 2.20471 26.6414C2.38503 26.8218 2.6296 26.9231 2.88462 26.9231H18.2692C18.5242 26.9231 18.7688 26.8218 18.9491 26.6414C19.1295 26.4611 19.2308 26.2166 19.2308 25.9615V25H6.73077C5.96572 25 5.23201 24.6961 4.69104 24.1551C4.15007 23.6141 3.84615 22.8804 3.84615 22.1154V5.76923Z" fill="#6F6C99" />
                            </svg>

                            <button>Saved Documents</button>
                        </Link>
                        <Link to="/DashboardSettingPage">
                            <svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5659 31.8427C8.9368 32.571 9.9773 32.571 10.3482 31.8427L18.3804 16.0692C18.6508 15.5382 18.3998 14.8902 17.8424 14.6798L10.785 12.0162C10.1222 11.766 9.3923 11.7585 8.7245 11.9949L1.1017 14.6936C0.532297 14.8952 0.270198 15.5518 0.544298 16.0901L8.5659 31.8427Z" fill="#6F6C99" />
                                <path d="M10 9.51853C12.5569 9.51853 14.6296 7.44577 14.6296 4.8889C14.6296 2.33203 12.5569 0.25927 10 0.25927C7.44312 0.25927 5.37037 2.33203 5.37037 4.8889C5.37037 7.44577 7.44312 9.51853 10 9.51853Z" fill="#6F6C99" />
                            </svg>


                            <button>Account Settings</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardHeader


