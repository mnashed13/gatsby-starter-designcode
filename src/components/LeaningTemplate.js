import React from 'React'
import './Learning.css'
import VideoModal from '../components/VideoModal'

const LearnCard = props => (
  <div className="learnCard">
    <h1>Learning Topic</h1>
    {/* <video width="755" height="440" controls>
      <source
        href="https://www.youtube.com/watch?v=4eUrrxbp5zw&ab_channel=KhalidVEVO"
        type="video/mp4"
      />
    </video> */}
    <iframe
      width="100%"
      height="500px"
      src="https://www.youtube.com/embed/tgbNymZ7vqY"
    ></iframe>

    <h3>{props.title}</h3>
    <p>{props.text}</p>
    <div className="buttonBackground">
      <a href={props.link}>Learn More</a>
    </div>
  </div>
)

export default LearnCard
