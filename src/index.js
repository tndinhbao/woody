import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import withTheme from './components/HOCs/theme'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const Woody = withTheme(App)

const rootEle = document.getElementById('root')

ReactDOM.render(<Woody />, rootEle)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default

    const NextWoody = withTheme(NextApp)

    ReactDOM.render(<NextWoody />, rootEle)
  })
}

registerServiceWorker()
