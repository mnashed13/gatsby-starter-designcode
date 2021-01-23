import React from 'react'

import '../layouts/Courses.css'
import Footer from '../components/footer'
// import HeroStageLearningCard from '../components/HeroLearningCard'
// import HeroStageCard from '../components/StageCard'
import LearningCard from '../components/LearningCard'
import LargeTitleCard from '../components/LargeTitleBox'
import Header from '../components/header'
// import BGLearningImg from '../components/BgLearningHeroImg'

const CoursesPage = () => (
  <div>
    <div className="CoursesPage1">
      <div className="CourseBG1">
        <Header></Header>
        <div className="CoursesHero">
          <div className="CoursesHeroGroup">
            <h1>Learning pathways </h1>
            <h2> Learning never stops, Get start on your journey here</h2>
          </div>
          <br />

          <div className="PricingSectionHeader">
            <h2> Featured Courses</h2>
          </div>
          <div className="PricingSection">
            <LearningCard
              title="Film Development Funding"
              image="https://p50.f0.n0.cdn.getcloudapp.com/items/5zudRjAm/9bd788dd-d57c-41bb-99cb-049549f4f26a.png?source=viewer&v=5d1035aab597d5d3a10c1bf7e6b83457"
              text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
              link="./Home"
            />
            <LearningCard
              title="Start Up Investing"
              image="https://p50.f0.n0.cdn.getcloudapp.com/items/9Zu06K8x/6c312eaf-50bb-4aa0-85f4-37b352d1d8e8.png?source=viewer&v=cd1aa910744781e39bf075aaf688c3b7"
              text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
              link="./Home"
            />
            <LearningCard
              title="Equipment Financing "
              image="https://p50.f0.n0.cdn.getcloudapp.com/items/rRu0dgkN/e18fb492-7dd8-46db-82c5-e8e90843a7b2.png?source=viewer&v=3a89e69a3b6e1f7415bc59b9d2934401"
              text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
              link="./Home"
            />
          </div>
          <div className="LearningheroSection">
            <h2> Featured Topics </h2>
            <LargeTitleCard
              title="Housing Market "
              image=" https://p50.f0.n0.cdn.getcloudapp.com/items/mXu5NDZp/0bba4748-2bb0-4814-bbcf-2fb969ba6fc3.png?source=viewer&v=8fe80bc0e547c2daff92dbd6e3259c57"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odioLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio."
            />

          </div>
          <div className="Categories">
            <h2>Categories</h2>
            <div className="CategorySection">
              <LearningCard
                title="Film Development Funding"
                image="https://p50.f0.n0.cdn.getcloudapp.com/items/5zudRjAm/9bd788dd-d57c-41bb-99cb-049549f4f26a.png?source=viewer&v=5d1035aab597d5d3a10c1bf7e6b83457"
                text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                link="./Home"
              />
              <LearningCard
                title="Start Up Investing"
                image="https://p50.f0.n0.cdn.getcloudapp.com/items/9Zu06K8x/6c312eaf-50bb-4aa0-85f4-37b352d1d8e8.png?source=viewer&v=cd1aa910744781e39bf075aaf688c3b7"
                text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                link="./Home"
              />
              <LearningCard
                title="Equipment Financing "
                image="https://p50.f0.n0.cdn.getcloudapp.com/items/rRu0dgkN/e18fb492-7dd8-46db-82c5-e8e90843a7b2.png?source=viewer&v=3a89e69a3b6e1f7415bc59b9d2934401"
                text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                link="./Home"
              />
              <LearningCard
                title="Equipment Financing "
                image="https://p50.f0.n0.cdn.getcloudapp.com/items/rRu0dgkN/e18fb492-7dd8-46db-82c5-e8e90843a7b2.png?source=viewer&v=3a89e69a3b6e1f7415bc59b9d2934401"
                text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                link="./Home"
              />
            </div>
            <div className="CategorySection">
              <LearningCard
                title="Film Development Funding"
                image="https://p50.f0.n0.cdn.getcloudapp.com/items/5zudRjAm/9bd788dd-d57c-41bb-99cb-049549f4f26a.png?source=viewer&v=5d1035aab597d5d3a10c1bf7e6b83457"
                text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                link="./Home"
              />
              <LearningCard
                title="Start Up Investing"
                image="https://p50.f0.n0.cdn.getcloudapp.com/items/9Zu06K8x/6c312eaf-50bb-4aa0-85f4-37b352d1d8e8.png?source=viewer&v=cd1aa910744781e39bf075aaf688c3b7"
                text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                link="./Home"
              />
              <LearningCard
                title="Equipment Financing "
                image="https://p50.f0.n0.cdn.getcloudapp.com/items/rRu0dgkN/e18fb492-7dd8-46db-82c5-e8e90843a7b2.png?source=viewer&v=3a89e69a3b6e1f7415bc59b9d2934401"
                text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                link="./Home"
              />
              <LearningCard
                title="Equipment Financing "
                image="https://p50.f0.n0.cdn.getcloudapp.com/items/rRu0dgkN/e18fb492-7dd8-46db-82c5-e8e90843a7b2.png?source=viewer&v=3a89e69a3b6e1f7415bc59b9d2934401"
                text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                link="./Home"
              />
            </div>
            <div class="">

            </div>


          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  </div>

)

export default CoursesPage
