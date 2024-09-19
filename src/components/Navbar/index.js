import {Component} from 'react'

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const pageLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
          const themeImage = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

          const themeStyle = isDarkTheme ? 'dark' : 'light'

          const onClickThemeButton = () => {
            toggleTheme(!isDarkTheme)
          }

          return (
            <nav className={`navbar navbar-${themeStyle}`}>
              <img src={pageLogo} alt="website logo" className="image-style" />
              <ul className="link-container">
                <li>
                  <Link to="/" className="link">
                    <p className={`tab-buttons-${themeStyle}`}>Home</p>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="link">
                    <p className={`tab-buttons-${themeStyle}`}>About</p>
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                data-testid="theme"
                onClick={onClickThemeButton}
                className="button"
              >
                <img src={themeImage} alt="theme" className="image-style" />
              </button>
            </nav>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
