import React from 'react'
import { Link } from 'react-router-dom'

/**
 * A simple error page
 */
const NotFound = () => {
  return (
    <div className="container">
      <h1>Trivia Challenge</h1>
      <h2>Sorry, Page Not Found</h2>
      <Link data-testid="link" to="/">
        <button type="button">Back to Home</button>
      </Link>
    </div>
  )
}

export default NotFound
