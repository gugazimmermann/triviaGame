import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'

/**
 * just the entry point. In the future we can
 * change the design or add more stuff to the
 * app easier from here.
 *
 * Suspense and BrowserRouter here to be able to test App.js
 *
 */
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register()
