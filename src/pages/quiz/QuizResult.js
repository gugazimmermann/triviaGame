import React from 'react'
import PropTypes from 'prop-types'
import { QuestionResult } from '../../components'

const QuizResult = ({ questionsList, handleReset }) => {

  // see the user correct answers
  const userScore = () => {
    if (questionsList) {
      const correntAnswered = questionsList.reduce(
        (c, q) =>
          q.user_answer !== null && q.user_answer === q.correct_answer
            ? ++c
            : c,
        0
      )
      const userTotalScore = correntAnswered + ' / ' + questionsList.length
      return userTotalScore
    }
  }

  return (
    <div className="container">
      <h1>You Scored</h1>
      <h2>{userScore()}</h2>
      <div className="card">
        {questionsList &&
          questionsList.map((question, i) => (
            <QuestionResult question={question} key={i} />
          ))}
      </div>
      <div className="button-row">
        <button type="button" onClick={() => handleReset()}>
          Play Again?
        </button>
      </div>
    </div>
  )
}

QuizResult.propTypes = {
  questionsList: PropTypes.array.isRequired,
  handleReset: PropTypes.func.isRequired
}

export default QuizResult
