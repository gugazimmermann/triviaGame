import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Correct } from '../images/correct.svg'
import { ReactComponent as Incorrect } from '../images/incorrect.svg'

const QuestionResult = ({ question }) => {
  return (
    <div className="result">
      <div className="row">
        <div className="svg">
          {question.user_answer === question.correct_answer ? (
            <Correct data-testid="correct" className="correct" />
          ) : (
            <Incorrect data-testid="incorrect" className="incorrect" />
          )}
        </div>
        <div data-testid="question">{question.question}</div>
      </div>
    </div>
  )
}

QuestionResult.propTypes = {
  question: PropTypes.object.isRequired
}

export default QuestionResult
