/* eslint-disable eol-last */
'use strict'

import App from './app'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import React from 'react'

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default

    renderApp(NextApp)
  })
}