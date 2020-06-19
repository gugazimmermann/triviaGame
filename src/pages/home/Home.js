import React from 'react'
import { Link } from 'react-router-dom'

/**
 * A static home page fot the app, we can move the
 * useContext to here to show the number of questions
 * that the API return and other things.
 */
const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Trivia Challenge</h1>
      <h2 data-testid="h2-1">
        You will be presented with 10 True or False questions
      </h2>
      <h2 data-testid="h2-2">Can you score 100%?</h2>
      <Link data-testid="link" to="/quiz">
        <button type="button">BEGIN</button>
      </Link>
    </div>
  )
}

export default Home
