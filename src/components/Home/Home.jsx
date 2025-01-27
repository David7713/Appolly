import React from 'react'
import './Home.css'

import NavigationBar from '../NavigationBar/NavigationBar'
import backgroundImage from '../../assets/general-assets/backgroundImage.png'
import mobileMockup from '../../assets/general-assets/mobileUiMockUp.png'
import googlePlay from '../../assets/general-assets/googlePlay.png'
import appStore from '../../assets/general-assets/appStore.png'


const Home = () => {
  return (
    <div className='home-section' id='home'>
      <NavigationBar></NavigationBar>


      <img className='backgroundImage' src={backgroundImage}></img>
      <div className='hero-section'>
        <div className='hero-section-border'>
          <div className='hero-section-text-part'>
            <h2>A GREAT APP MAKES YOUR LIFE BETTER</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.</p>
            <label> DOWNLOAD APP NOW</label>

            <div className='download-image-part'>
              <img className="download-image" src={googlePlay} alt="Download on Google Play" title="Download on Google Play" />
              <img className="download-image" src={appStore} alt="Download on the App Store" title="Download on the App Store" />

            </div>

          </div>

        </div>
        <img
          className="hero-mockup-image"
          src={mobileMockup}
          alt="Mobile mockup showing the app interface"
          title="View the app interface on a mobile device"
        />

      </div>
    </div>
  )
}

export default Home