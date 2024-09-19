import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const homeImageUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
          const themeStyle = isDarkTheme ? 'dark' : 'light'
          return (
            <>
              <Navbar />
              <div className={`home-container-${themeStyle}`}>
                <img
                  src={homeImageUrl}
                  alt="home"
                  className="home-image-style"
                />
                <h1 className={`home-page-text-${themeStyle}`}>Home</h1>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
