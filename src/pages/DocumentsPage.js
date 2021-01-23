import React from 'react'
import Link from 'gatsby-link'
import '../layouts/Documents.css'
import Footer from '../components/footer'

import StageCard from '../components/StageCard'
import PricingCard from '../components/PricingCard'
import DashboardHeader from '../components/DashboardHeader'
import DocumentsCard from '../components/DocumentsCard'

const DocumentsPage = () => (
    <div>
        <div className="DocumentsPage">
            <div className="DocumentsHero">
                <DashboardHeader />
                <div className="CoursesHeroGroup">
                    <div className="FAHeaderImageDoc">
                        <img src={require('../assets/LogoWhite.png')} />
                        <div className="titleCred">
                            <h1>Dashboard</h1>
                            <h2> Welcome back : Michael Nashed </h2>
                        </div>
                    </div>
                </div>
                <br />
                <div className="SavedDocView">

                    <input type="text" placeholder="Search Documents" />
                    <h2> Saved Documents</h2>
                    <div className=" SavedDocRow">
                        <DocumentsCard
                            image="https://p50.f0.n0.cdn.getcloudapp.com/items/p9ureb4K/62566e05-d68c-4510-8a10-7f2f932e9393.png?source=viewer&v=d25b3635fa50fa847b2c0830ceb1eed1"
                            text="test Folder   "
                            date="13/20/2020"
                        />
                        <DocumentsCard
                            image="https://p50.f0.n0.cdn.getcloudapp.com/items/p9ureb4K/62566e05-d68c-4510-8a10-7f2f932e9393.png?source=viewer&v=d25b3635fa50fa847b2c0830ceb1eed1"
                            text="test Folder   "
                            date="13/20/2020"

                        />
                        <DocumentsCard
                            image="https://p50.f0.n0.cdn.getcloudapp.com/items/p9ureb4K/62566e05-d68c-4510-8a10-7f2f932e9393.png?source=viewer&v=d25b3635fa50fa847b2c0830ceb1eed1"
                            text="test Folder   "
                            date="13/20/2020"

                        />
                    </div>
                </div>
                <div className="SavedDocView">


                    <h2>Documents</h2>
                    <div className="subtitleHeader">
                        <h3> View All Documents</h3>
                    </div>
                    <div className=" SavedDocRow">
                        <DocumentsCard
                            image="https://p50.f0.n0.cdn.getcloudapp.com/items/p9ureb4K/62566e05-d68c-4510-8a10-7f2f932e9393.png?source=viewer&v=d25b3635fa50fa847b2c0830ceb1eed1"
                            text="test Folder   "
                            date="13/20/2020"
                        />
                        <DocumentsCard
                            image="https://p50.f0.n0.cdn.getcloudapp.com/items/p9ureb4K/62566e05-d68c-4510-8a10-7f2f932e9393.png?source=viewer&v=d25b3635fa50fa847b2c0830ceb1eed1"
                            text="test Folder   "
                            date="13/20/2020"

                        />
                        <DocumentsCard
                            image="https://p50.f0.n0.cdn.getcloudapp.com/items/p9ureb4K/62566e05-d68c-4510-8a10-7f2f932e9393.png?source=viewer&v=d25b3635fa50fa847b2c0830ceb1eed1"
                            text="test Folder   "
                            date="13/20/2020"

                        />

                        <DocumentsCard
                            image="https://p50.f0.n0.cdn.getcloudapp.com/items/p9ureb4K/62566e05-d68c-4510-8a10-7f2f932e9393.png?source=viewer&v=d25b3635fa50fa847b2c0830ceb1eed1"
                            text="test Folder   "
                            date="13/20/2020"
                        />
                        <DocumentsCard
                            image="https://p50.f0.n0.cdn.getcloudapp.com/items/p9ureb4K/62566e05-d68c-4510-8a10-7f2f932e9393.png?source=viewer&v=d25b3635fa50fa847b2c0830ceb1eed1"
                            text="test Folder   "
                            date="13/20/2020"

                        />
                        <DocumentsCard
                            image="https://p50.f0.n0.cdn.getcloudapp.com/items/p9ureb4K/62566e05-d68c-4510-8a10-7f2f932e9393.png?source=viewer&v=d25b3635fa50fa847b2c0830ceb1eed1"
                            text="test Folder   "
                            date="13/20/2020"

                        />

                    </div>
                    <div className=" SavedDocRow">
                        <div classname="DocumentsCardImage">
                            <DocumentsCard
                                image="https://p50.f0.n0.cdn.getcloudapp.com/items/z8u4dwl6/17b80326-261b-4182-a81a-adca19fd8896.png?source=viewer&v=5e589d1027530db2498d0dcc176ded51"
                                text="test Folder   "
                                date="13/20/2020"



                            />
                            <DocumentsCard
                                image="https://p50.f0.n0.cdn.getcloudapp.com/items/p9ureb4K/62566e05-d68c-4510-8a10-7f2f932e9393.png?source=viewer&v=d25b3635fa50fa847b2c0830ceb1eed1"
                                text="test Folder   "
                                date="13/20/2020"

                            />
                            <DocumentsCard
                                image="https://p50.f0.n0.cdn.getcloudapp.com/items/p9ureb4K/62566e05-d68c-4510-8a10-7f2f932e9393.png?source=viewer&v=d25b3635fa50fa847b2c0830ceb1eed1"
                                text="test Folder   "
                                date="13/20/2020"

                            />

                            <DocumentsCard
                                image="https://p50.f0.n0.cdn.getcloudapp.com/items/p9ureb4K/62566e05-d68c-4510-8a10-7f2f932e9393.png?source=viewer&v=d25b3635fa50fa847b2c0830ceb1eed1"
                                text="test Folder   "
                                date="13/20/2020"
                            />
                            <DocumentsCard
                                image="https://p50.f0.n0.cdn.getcloudapp.com/items/p9ureb4K/62566e05-d68c-4510-8a10-7f2f932e9393.png?source=viewer&v=d25b3635fa50fa847b2c0830ceb1eed1"
                                text="test Folder   "
                                date="13/20/2020"

                            />
                            <DocumentsCard
                                image="https://p50.f0.n0.cdn.getcloudapp.com/items/p9ureb4K/62566e05-d68c-4510-8a10-7f2f932e9393.png?source=viewer&v=d25b3635fa50fa847b2c0830ceb1eed1"
                                text="test Folder   "
                                date="13/20/2020"

                            />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
)

export default DocumentsPage
