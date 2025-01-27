import React from 'react'
import './About.css'
import mobileMockup from '../../assets/mobileMockup.png'

const About = () => {
  return (
    <div className='about-section' id='about'>

      <h1>ABOUT OUR APP</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit <br></br>
        vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,<br></br>
        ullamcorper velit.  Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
      <div className='about-section-main-part'>
        <img src={mobileMockup} alt="Mobile mockup displaying the app interface" title="Mobile app interface mockup" />
        <div className='about-section-about-detailed-part'>
          <div className='about-section-detailed-part-element'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#5956E9" />
            </svg> <label>CREATIVE DESIGN</label>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra <br></br>nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus<br></br> amet etiam tincidunt rhoncus, ullamcorper velit.</p>

          </div>
          <div className='about-section-detailed-part-element'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#5956E9" />
            </svg> <label>EASY TO USE</label>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra <br></br>nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus<br></br> amet etiam tincidunt rhoncus, ullamcorper velit.</p>

          </div>
          <div className='about-section-detailed-part-element'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#5956E9" />
            </svg> <label>BEST USER EXPERINCE</label>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra <br></br>nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus<br></br> amet etiam tincidunt rhoncus, ullamcorper velit.</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About