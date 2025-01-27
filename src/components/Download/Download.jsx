import React from 'react'
import './Download.css'

import googlePlay from '../../assets/general-assets/googlePlay.png'
import appStore from '../../assets/general-assets/appStore.png'
import mobileUi from '../../assets/general-assets/mobileUi.png'


const Download = () => {
  return (
    <div className='download-section' id='download'>
      <div
        className='download-section-text-part'>
        <h1>DOWNLOAD APP NOW</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
        <div className='download-section-image-part'>
          <img src={googlePlay} alt="Download on Google Play" title="Download on Google Play"></img>
          <img src={appStore} alt="Download on the App Store" title="Download on the App Store"></img>
        </div>

        <div className='download-section-element-parts'>
          <div>
            <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.83342 23.7083H27.1668V13.5H30.0834V25.1667C30.0834 25.5534 29.9298 25.9244 29.6563 26.1979C29.3828 26.4714 29.0119 26.625 28.6251 26.625H2.37508C1.98831 26.625 1.61737 26.4714 1.34388 26.1979C1.07039 25.9244 0.916748 25.5534 0.916748 25.1667V13.5H3.83342V23.7083ZM18.4167 9.125H25.7084L15.5001 19.3333L5.29175 9.125H12.5834V0.375H18.4167V9.125Z" fill="white" />
            </svg>
            <br></br>
            59865
            <br></br>
            DOWNLOAD
          </div>
          <div>
            <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.91671 12.125H6.29171V29.625H1.91671C1.52993 29.625 1.159 29.4714 0.88551 29.1979C0.612019 28.9244 0.458374 28.5535 0.458374 28.1667V13.5834C0.458374 13.1966 0.612019 12.8257 0.88551 12.5522C1.159 12.2787 1.52993 12.125 1.91671 12.125ZM9.63567 10.2394L18.969 0.906082C19.093 0.781678 19.2578 0.706242 19.4331 0.693649C19.6083 0.681056 19.7822 0.732152 19.9228 0.83754L21.1667 1.77087C21.5122 2.03023 21.7731 2.38608 21.9167 2.79354C22.0602 3.201 22.0798 3.64184 21.9732 4.06046L20.2917 10.6667H29.625C30.3986 10.6667 31.1405 10.974 31.6874 11.521C32.2344 12.068 32.5417 12.8098 32.5417 13.5834V16.6517C32.5421 17.0329 32.4678 17.4104 32.323 17.763L27.8094 28.7223C27.6993 28.9895 27.5123 29.218 27.2721 29.3787C27.032 29.5394 26.7494 29.6252 26.4605 29.625H10.6667C10.2799 29.625 9.909 29.4714 9.63551 29.1979C9.36202 28.9244 9.20837 28.5535 9.20837 28.1667V11.2705C9.20846 10.8837 9.36216 10.5128 9.63567 10.2394Z" fill="white" />
            </svg>
            <br></br>
            29852
            <br></br>
            LIKE
          </div>
          <div>
            <svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 26.6291L7.21441 32.3866L9.51129 20.825L0.856079 12.8216L12.5621 11.4333L17.5 0.729126L22.438 11.4333L34.144 12.8216L25.4888 20.825L27.7857 32.3866L17.5 26.6291Z" fill="white" />
            </svg>
            <br></br>
            1500
            <br></br>
            5 STAR
          </div>
        </div>

      </div>



      <img src={mobileUi}></img>
    </div>
  )
}

export default Download