import React from 'react'
import './Footer.css'
import { Link as ScrollLink } from 'react-scroll';


const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-main-part'>
        <div>
          <span>LOGO</span>
          <p>Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit. Viverra nunc ante velit vitae.<br></br>Est tellus vitae, nullam lobortis enim.</p>
          <ul id='footer-social-media-part'>

            <a href='#'>  <li><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z" fill="#5956E9" />
            </svg>
            </li></a>
            <a href='#'>    <li>

              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_611_498)">
                  <path d="M9 1.5C11.0378 1.5 11.292 1.5075 12.0915 1.545C12.8903 1.5825 13.434 1.70775 13.9125 1.89375C14.4075 2.08425 14.8245 2.34225 15.2415 2.7585C15.6229 3.13342 15.918 3.58694 16.1063 4.0875C16.2915 4.56525 16.4175 5.10975 16.455 5.9085C16.4903 6.708 16.5 6.96225 16.5 9C16.5 11.0378 16.4925 11.292 16.455 12.0915C16.4175 12.8903 16.2915 13.434 16.1063 13.9125C15.9185 14.4133 15.6233 14.867 15.2415 15.2415C14.8665 15.6227 14.413 15.9178 13.9125 16.1063C13.4347 16.2915 12.8903 16.4175 12.0915 16.455C11.292 16.4903 11.0378 16.5 9 16.5C6.96225 16.5 6.708 16.4925 5.9085 16.455C5.10975 16.4175 4.566 16.2915 4.0875 16.1063C3.58674 15.9184 3.13315 15.6232 2.7585 15.2415C2.37705 14.8666 2.08195 14.4131 1.89375 13.9125C1.70775 13.4347 1.5825 12.8903 1.545 12.0915C1.50975 11.292 1.5 11.0378 1.5 9C1.5 6.96225 1.5075 6.708 1.545 5.9085C1.5825 5.109 1.70775 4.566 1.89375 4.0875C2.08143 3.58663 2.3766 3.13299 2.7585 2.7585C3.13325 2.37692 3.58682 2.0818 4.0875 1.89375C4.566 1.70775 5.109 1.5825 5.9085 1.545C6.708 1.50975 6.96225 1.5 9 1.5ZM9 5.25C8.00544 5.25 7.05161 5.64509 6.34835 6.34835C5.64509 7.05161 5.25 8.00544 5.25 9C5.25 9.99456 5.64509 10.9484 6.34835 11.6517C7.05161 12.3549 8.00544 12.75 9 12.75C9.99456 12.75 10.9484 12.3549 11.6517 11.6517C12.3549 10.9484 12.75 9.99456 12.75 9C12.75 8.00544 12.3549 7.05161 11.6517 6.34835C10.9484 5.64509 9.99456 5.25 9 5.25ZM13.875 5.0625C13.875 4.81386 13.7762 4.5754 13.6004 4.39959C13.4246 4.22377 13.1861 4.125 12.9375 4.125C12.6889 4.125 12.4504 4.22377 12.2746 4.39959C12.0988 4.5754 12 4.81386 12 5.0625C12 5.31114 12.0988 5.5496 12.2746 5.72541C12.4504 5.90123 12.6889 6 12.9375 6C13.1861 6 13.4246 5.90123 13.6004 5.72541C13.7762 5.5496 13.875 5.31114 13.875 5.0625ZM9 6.75C9.59674 6.75 10.169 6.98705 10.591 7.40901C11.0129 7.83097 11.25 8.40326 11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25C8.40326 11.25 7.83097 11.0129 7.40901 10.591C6.98705 10.169 6.75 9.59674 6.75 9C6.75 8.40326 6.98705 7.83097 7.40901 7.40901C7.83097 6.98705 8.40326 6.75 9 6.75Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_611_498">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </li></a>
            <a href='#'><li>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1007_96)">
                  <path d="M16.6215 4.24201C16.0489 4.49528 15.4417 4.66161 14.82 4.73551C15.4753 4.34358 15.9658 3.72677 16.2 3.00001C15.585 3.36601 14.9107 3.62251 14.208 3.76126C13.7359 3.25619 13.1102 2.92123 12.4282 2.80844C11.7461 2.69566 11.0459 2.81137 10.4364 3.1376C9.82692 3.46382 9.34227 3.98227 9.05781 4.61235C8.77336 5.24243 8.70504 5.94884 8.86348 6.62176C7.61631 6.55925 6.39623 6.23515 5.28244 5.6705C4.16866 5.10586 3.18607 4.31329 2.39848 3.34426C2.1197 3.82309 1.97319 4.36743 1.97398 4.92151C1.97398 6.00901 2.52748 6.96976 3.36898 7.53226C2.87099 7.51658 2.38395 7.38209 1.94848 7.14001V7.17901C1.94863 7.90328 2.19926 8.60522 2.65786 9.1658C3.11647 9.72638 3.75484 10.1111 4.46473 10.2548C4.00244 10.38 3.51771 10.3985 3.04723 10.3088C3.24738 10.9322 3.63748 11.4774 4.16292 11.8681C4.68836 12.2588 5.32282 12.4754 5.97748 12.4875C5.32684 12.9985 4.58186 13.3762 3.78514 13.5991C2.98842 13.822 2.15557 13.8857 1.33423 13.7865C2.768 14.7086 4.43705 15.1981 6.14173 15.1965C11.9115 15.1965 15.0667 10.4168 15.0667 6.27151C15.0667 6.13651 15.063 6.00001 15.057 5.86651C15.6711 5.42263 16.2012 4.87277 16.6222 4.24276L16.6215 4.24201Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1007_96">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>


            </li></a>
            <a href='#'>     <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1007_226)">
                <path d="M16.1572 4.8735C16.5 6.21 16.5 9 16.5 9C16.5 9 16.5 11.79 16.1572 13.1265C15.9667 13.8653 15.4095 14.4465 14.7037 14.643C13.422 15 9 15 9 15C9 15 4.58025 15 3.29625 14.643C2.5875 14.4435 2.031 13.863 1.84275 13.1265C1.5 11.79 1.5 9 1.5 9C1.5 9 1.5 6.21 1.84275 4.8735C2.03325 4.13475 2.5905 3.5535 3.29625 3.357C4.58025 3 9 3 9 3C9 3 13.422 3 14.7037 3.357C15.4125 3.5565 15.969 4.137 16.1572 4.8735ZM7.5 11.625L12 9L7.5 6.375V11.625Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1007_226">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            </li></a>

          </ul>
        </div>


        <div>
          <span>QUICK LINKS</span>
          <ul id='footer-nav-link'>
            <ScrollLink to="about" smooth={true} duration={500}><li>About</li></ScrollLink>
            <ScrollLink to="feature" smooth={true} duration={500}> <li>Feature</li></ScrollLink>
            <ScrollLink to="screenshot" smooth={true} duration={500}><li>Screenshot</li></ScrollLink>
            <ScrollLink to="blog" smooth={true} duration={500}><li>Blog</li></ScrollLink>
          </ul>
        </div>


        <div className='subscribe-part'>
          <span>NEWS LETTER</span>
          <p>Subscribe our newsletter to get our latest<br></br>
            update & news</p>

          <div className="subscribe-container">
            <input type="text" placeholder="Your email address" />
            <button onClick={() => {
              alert("Thank you)")
            }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_611_757)">
                  <path
                    d="M3 13.0001H9V11.0001H3V1.84611C3.00001 1.75922 3.02267 1.67384 3.06573 1.59838C3.1088 1.52291 3.17078 1.45997 3.24558 1.41576C3.32037 1.37155 3.4054 1.34759 3.49227 1.34625C3.57915 1.34491 3.66487 1.36623 3.741 1.40811L22.203 11.5621C22.2814 11.6053 22.3468 11.6687 22.3923 11.7457C22.4378 11.8228 22.4618 11.9106 22.4618 12.0001C22.4618 12.0896 22.4378 12.1774 22.3923 12.2545C22.3468 12.3315 22.2814 12.3949 22.203 12.4381L3.741 22.5921C3.66487 22.634 3.57915 22.6553 3.49227 22.654C3.4054 22.6526 3.32037 22.6287 3.24558 22.5844C3.17078 22.5402 3.1088 22.4773 3.06573 22.4018C3.02267 22.3264 3.00001 22.241 3 22.1541V13.0001Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_611_757">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>

        </div>
      </div>
      <div className='footer-rights-section'>
        <div className='rights-divider'></div>
        <p > <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM12 7C13.82 7 15.413 7.973 16.288 9.428L14.574 10.457C14.3043 10.0072 13.9213 9.63605 13.4634 9.38045C13.0055 9.12484 12.4885 8.99374 11.9641 9.00023C11.4397 9.00672 10.9262 9.15056 10.4747 9.41742C10.0232 9.68428 9.6496 10.0648 9.39107 10.5211C9.13254 10.9774 8.99815 11.4935 9.00128 12.0179C9.00442 12.5424 9.14498 13.0568 9.40895 13.51C9.67292 13.9632 10.0511 14.3392 10.5057 14.6007C10.9603 14.8621 11.4756 14.9998 12 15C12.5181 15.0003 13.0275 14.8664 13.4785 14.6112C13.9294 14.356 14.3065 13.9883 14.573 13.544L16.288 14.572C15.726 15.5106 14.8716 16.239 13.8559 16.6453C12.8402 17.0517 11.7192 17.1137 10.6649 16.8217C9.61058 16.5298 8.68114 15.9 8.01914 15.029C7.35713 14.1581 6.99912 13.094 7 12C7 9.24 9.24 7 12 7Z" fill="white" />
        </svg>
          Copyright 2021 .Ojjomedia. All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer