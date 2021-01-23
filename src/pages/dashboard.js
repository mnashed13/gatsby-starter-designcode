import React from 'react'
import Link from 'gatsby-link'
import '../layouts/FADashboard.css'

// import { useAuth0 } from '@auth0/auth0-react'
import CommsCard from '../components/CommsCard'
import LearningCard from '../components/LearningCard'
import PinMessage from '../components/PinMessage'
// import { Icon, InlineIcon } from '@iconify/react';
// import dotsNineBold from '@iconify/icons-ph/dots-nine-bold';
import DashboardHeader from '../components/DashboardHeader'



const FADashboard = () => {


    // const { user } = useAuth0();
    return (
        <div className="FADashboard">
            <DashboardHeader />
            <div className="FADashboardImg">
                <div className="FADashboardHeading">
                    <div className="FAHeaderImage">
                        <img src={require('../assets/LogoWhite.png')} />
                        <div className="titleCred">
                            <h1>Dashboard</h1>
                            <h2> Welcome back : Michael Nashed </h2>
                            {/* <Icon icon={dotsNineBold} style={{ color: '#5b5a99', fontSize: '25px' }} >
                                <a href="http://example.com/link/">Test</a>
                            </Icon> */}



                        </div>
                    </div>
                    <div className="DashSubHeading">
                        <h2> Important Messages</h2>
                    </div>
                    <div className="MessageRow">
                        <CommsCard />
                        <CommsCard />
                        <CommsCard />
                        <CommsCard />
                        <PinMessage />
                    </div>
                    <div className="DashSubHeading">
                        <h2>Courses</h2>
                    </div>
                    <div className="CourseRow">
                        <LearningCard
                            title="Film Development Funding"
                            image="https://d6pdqlw297isz.cloudfront.net/i/6quPekAn/0x400/p50.f0.n0.cdn.getcloudapp.com/items/6quPekAn/CardImageGroup.png?source=thumbnail&v=c1781e0a8e2d3ce6c25ca961370e3817"
                            text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                            link="./Home"
                        />
                        <LearningCard
                            title="Film Development Funding"
                            image="https://d6pdqlw297isz.cloudfront.net/i/6quPekAn/0x400/p50.f0.n0.cdn.getcloudapp.com/items/6quPekAn/CardImageGroup.png?source=thumbnail&v=c1781e0a8e2d3ce6c25ca961370e3817"
                            text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                            link="./Home"
                        />
                        <LearningCard
                            title="Film Development Funding"
                            image="https://d6pdqlw297isz.cloudfront.net/i/6quPekAn/0x400/p50.f0.n0.cdn.getcloudapp.com/items/6quPekAn/CardImageGroup.png?source=thumbnail&v=c1781e0a8e2d3ce6c25ca961370e3817"
                            text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                            link="./Home"
                        />
                    </div>


                </div>


            </div>

        </div>
    )
}


export default FADashboard




