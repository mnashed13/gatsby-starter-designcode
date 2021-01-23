import React from 'react'
import Modali, { useModali } from 'modali'
import './Modal.css'
// import Form from './form'
import LearnCard from './LeaningTemplate'

const VideoModal = () => {
  const [exampleModal, toggleExampleModal] = useModali()

  return (
    <div className="app">
      <button onClick={toggleExampleModal}>Learn More</button>
      <div className={'Modal'}>
        <Modali.Modal {...exampleModal}>
          <LearnCard
            // This will need to intergrate with a CMS
            title="ETF's 101"
            image={require('../assets/creditCard.png')}
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit hendrerit, vestibulum leo at, posuere ligula. Integer mattis pretium egestas. Phasellus eros risus, blandit ut velit vitae, convallis mollis velit. Aenean placerat vestibulum massa ac sodales. Maecenas tempor venenatis ante, id venenatis justo placerat at. Fusce sapien est, varius eget molestie eget, pretium et mi. Quisque at enim sed magna tincidunt semper sed ac diam. Morbi tristique facilisis velit, sed dictum mi fermentum sit amet. Maecenas facilisis velit elit, eu condimentum nulla aliquam ut. Nunc vitae tortor aliquet, molestie felis nec, tincidunt diam."
            link="https://github.com/mnashed13/Monarch-Web-Version"
          />
        </Modali.Modal>
      </div>
    </div>
  )
}

export default VideoModal
