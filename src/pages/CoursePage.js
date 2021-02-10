import React from 'react'

import '../layouts/CoursePage.css'
import Footer from '../components/footer'
// import HeroStageLearningCard from '../components/HeroLearningCard'
// import HeroStageCard from '../components/StageCard'
import LearningCard from '../components/LearningCard'
import LargeTitleCard from '../components/LargeTitleBox'
import DashboardHeader from '../components/DashboardHeader'
import ResumeCourseCard from '../components/ResumeCourseCard'
// import BGLearningImg from '../components/BgLearningHeroImg'

const CoursesContentPage = () => (
    <div>
        <div className="CoursesPage1">

            <DashboardHeader />
            <div className="CoursePageHero">
                <div className="CoursePageHeroGroup">
                    <h1>Your Courses</h1>
                    <input type="text" placeholder="Search Courses" />
                </div>
                <div className="LearningHistory">
                    <h2>Resume Courses</h2>
                    <ResumeCourseCard

                        coursetitle="Banking 101"
                        tutor="Sue Zinc"
                    />
                </div>
                <br />
                <div class="CourseViewSection">
                    <LearningCard
                        title="Film Development Funding"
                        image="https://p50.f0.n0.cdn.getcloudapp.com/items/5zudRjAm/9bd788dd-d57c-41bb-99cb-049549f4f26a.png?source=viewer&v=5d1035aab597d5d3a10c1bf7e6b83457"
                        text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                        link="./Home"
                    />
                    <LearningCard
                        title="Film Development Funding"
                        image="https://p50.f0.n0.cdn.getcloudapp.com/items/5zudRjAm/9bd788dd-d57c-41bb-99cb-049549f4f26a.png?source=viewer&v=5d1035aab597d5d3a10c1bf7e6b83457"
                        text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                        link="./Home"
                    />       <LearningCard
                        title="Film Development Funding"
                        image="https://p50.f0.n0.cdn.getcloudapp.com/items/5zudRjAm/9bd788dd-d57c-41bb-99cb-049549f4f26a.png?source=viewer&v=5d1035aab597d5d3a10c1bf7e6b83457"
                        text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                        link="./Home"
                    />
                    <LearningCard
                        title="Film Development Funding"
                        image="https://p50.f0.n0.cdn.getcloudapp.com/items/5zudRjAm/9bd788dd-d57c-41bb-99cb-049549f4f26a.png?source=viewer&v=5d1035aab597d5d3a10c1bf7e6b83457"
                        text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                        link="./Home"
                    />
                    <LearningCard
                        title="Film Development Funding"
                        image="https://p50.f0.n0.cdn.getcloudapp.com/items/5zudRjAm/9bd788dd-d57c-41bb-99cb-049549f4f26a.png?source=viewer&v=5d1035aab597d5d3a10c1bf7e6b83457"
                        text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                        link="./Home"
                    />
                    <LearningCard
                        title="Film Development Funding"
                        image="https://p50.f0.n0.cdn.getcloudapp.com/items/5zudRjAm/9bd788dd-d57c-41bb-99cb-049549f4f26a.png?source=viewer&v=5d1035aab597d5d3a10c1bf7e6b83457"
                        text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                        link="./Home"
                    />       <LearningCard
                        title="Film Development Funding"
                        image="https://p50.f0.n0.cdn.getcloudapp.com/items/5zudRjAm/9bd788dd-d57c-41bb-99cb-049549f4f26a.png?source=viewer&v=5d1035aab597d5d3a10c1bf7e6b83457"
                        text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                        link="./Home"
                    />
                    <LearningCard
                        title="Film Development Funding"
                        image="https://p50.f0.n0.cdn.getcloudapp.com/items/5zudRjAm/9bd788dd-d57c-41bb-99cb-049549f4f26a.png?source=viewer&v=5d1035aab597d5d3a10c1bf7e6b83457"
                        text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                        link="./Home"
                    />
                    <LearningCard
                        title="Film Development Funding"
                        image="https://p50.f0.n0.cdn.getcloudapp.com/items/5zudRjAm/9bd788dd-d57c-41bb-99cb-049549f4f26a.png?source=viewer&v=5d1035aab597d5d3a10c1bf7e6b83457"
                        text="Lorem ips¸um dolor sit amet, consectetur adipiscing elit. Sed sed lacus eu dui feugiat semper. Nunc eu tortor sed est ullamcorper sodales ac sed nisl. Proin ut lorem ut erat tempor scelerisque vel sed tellus. Suspendisse potenti. Donec ex turpis, viverra sit amet dolor ut, placerat laoreet odio"
                        link="./Home"
                    />
                </div>
            </div>


        </div>
    </div>

)

export default CoursesContentPage




