import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Usability Specialist</title>
        <meta property="og:title" content="Principal Usability Specialist" />
      </Helmet>
    </div>
  )
}

export default Home
