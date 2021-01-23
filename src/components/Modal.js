import React from 'react'
import Modali, { useModali } from 'modali'
import './Modal.css'
import Form from './form'

const AuthModal = () => {
  const [exampleModal, toggleExampleModal] = useModali()

  return (
    <div className="app">
      <button onClick={toggleExampleModal}>Account</button>
      {/* <button>Account</button> */}
      <div className={'Modal'}>
        <Modali.Modal {...exampleModal}>
          <Form />
        </Modali.Modal>
      </div>
    </div>
  )
}

export default AuthModal
