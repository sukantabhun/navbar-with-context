import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const themeStyle = isDarkTheme ? 'dark' : 'light'
          return (
            <>
              <Navbar />
              <div className={`not-found-container-${themeStyle}`}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-found-image-style"
                />
                <h1 className={`not-found-page-text-${themeStyle}`}>
                  Lost Your Way ?
                </h1>
                <p className={`not-found-page-para-text-${themeStyle}`}>
                  We cannot seem to find the page your are looking for.
                </p>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFound
