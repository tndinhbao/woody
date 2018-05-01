import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import withTheme from './config/theme'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const Woody = withTheme(App)

const rootEle = document.getElementById('root')

ReactDOM.render(<Woody />, rootEle)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    const NextWoody = withTheme(NextApp)

    ReactDOM.render(<NextWoody />, rootEle)
  })
}

registerServiceWorker()
