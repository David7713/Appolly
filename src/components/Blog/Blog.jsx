import React from 'react'
import './Blog.css'
import blogImage1 from '../../assets/blog-assets/blogImage1.png'
import blogImage2 from '../../assets/blog-assets/blogImage2.png'
import blogImage3 from '../../assets/blog-assets/blogImage3.png'

const Blog = () => {
    return (
        <div className='blog-section' id='blog'>

            <h1>OUR RECENT BLOG</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.<br></br> Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,<br></br> ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>

            <div className='blog-container'>

                <div>
                    <img src={blogImage1} alt="Blog image with mobile mockup" title="Click to read the blog" />
                    <label>THE SNAP PIXE: HOW IT WORKS AND HOW TO INSTALL </label>
                    <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
                    <span>READ MORE</span>
                </div>


                <div>
                    <img src={blogImage2} alt="Blog image with mobile mockup" title="Click to read the blog" />
                    <label>GLOBAL PARTNER SOLUTIONS: A PARTNERSHIP OF INNOVATION</label>

                    <p>Lorem ipsum dolor sit amet, consectetur  elit adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>

                    <span>READ MORE</span>
                </div>


                <div>
                    <img src={blogImage3} alt="Blog image with mobile mockup" title="Click to read the blog" />
                    <label>2021: AN OPPORTUNITY FOR SNAPCHATTERS TO START FRESH </label>

                    <p>Lorem ipsum dolor sit amet, consectetur  elit adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>

                    <span>READ MORE</span>
                </div>

            </div>


            <div className='contact-sectionn'>
                <div className='contact-section-element'>
                    <div className='contact-icon-oval'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1007_416)">
                                <path d="M2.25 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25ZM9.045 8.76225L4.236 4.6785L3.26475 5.8215L9.05475 10.7378L14.7405 5.81775L13.7595 4.683L9.04575 8.76225H9.045Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1007_416">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <span>INFO@YOUREMAIL.COM</span>
                </div>



                <div className="contact-divider"></div>


                <div className='contact-section-element' >
                    <div className='contact-icon-oval'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1007_166)">
                                <path d="M15.75 12.315V14.967C15.7501 15.1569 15.6781 15.3397 15.5487 15.4786C15.4192 15.6176 15.2419 15.7022 15.0525 15.7155C14.7247 15.738 14.457 15.75 14.25 15.75C7.62225 15.75 2.25 10.3778 2.25 3.75C2.25 3.543 2.26125 3.27525 2.2845 2.9475C2.29779 2.75808 2.38244 2.58076 2.52135 2.45131C2.66027 2.32186 2.84312 2.24991 3.033 2.25H5.685C5.77803 2.24991 5.86777 2.28439 5.9368 2.34677C6.00582 2.40914 6.0492 2.49494 6.0585 2.5875C6.07575 2.76 6.0915 2.89725 6.1065 3.0015C6.25555 4.04169 6.561 5.05337 7.0125 6.00225C7.08375 6.15225 7.03725 6.3315 6.90225 6.4275L5.28375 7.584C6.27334 9.88984 8.11091 11.7274 10.4167 12.717L11.5717 11.1015C11.619 11.0355 11.6878 10.9882 11.7664 10.9677C11.8449 10.9473 11.9281 10.9551 12.0015 10.9897C12.9503 11.4404 13.9617 11.7451 15.0015 11.8935C15.1058 11.9085 15.243 11.925 15.414 11.9415C15.5064 11.951 15.592 11.9944 15.6543 12.0634C15.7165 12.1324 15.7509 12.2221 15.7507 12.315H15.75Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1007_166">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <span>+880 321 655 9985</span>
                </div>
            </div>
        </div>
    )
}

export default Blog