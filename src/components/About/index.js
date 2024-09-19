import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

class About extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const aboutImageUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
          const themeStyle = isDarkTheme ? 'dark' : 'light'
          return (
            <>
              <Navbar />
              <div className={`about-container-${themeStyle}`}>
                <img
                  src={aboutImageUrl}
                  alt="about"
                  className="about-image-style"
                />
                <h1 className={`about-page-text-${themeStyle}`}>About</h1>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default About
