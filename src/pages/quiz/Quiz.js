import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { QuestionsContext } from '../../context/QuestionsStore'
import { fetchQuestions } from '../../api/Api'
import { formatQuestions } from '../../helpers/helpers'
import {
  SET_QUESTIONS,
  ANSWER_QUESTION,
  RESET_QUESTIONS,
  SET_ERROR,
  HOME
} from '../../constants'
import { Loading, Question } from '../../components'
import QuizResult from './QuizResult'

const Quiz = ({ history }) => {
  const [state, dispatch] = useContext(QuestionsContext)
  const [currentQuestion, setCurrentQuestion] = useState()
  const [totalAnswered, setTotalAnswered] = useState()

  // run just one time
  useEffect(() => {
    fetchQuestionsList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
 * run when the questions state change
 * set the total of questions answered and the current question
 */
  useEffect(() => {
    if (state.questions.length > 0) {
      const totalAnswered = state.questions.reduce(
        (count, question) => (question.user_answer !== null ? ++count : count),
        0
      )
      setTotalAnswered(totalAnswered)
      setCurrentQuestion(state.questions[totalAnswered])
    }
  }, [state.questions])

  // call the api and send the questions to the store
  async function fetchQuestionsList () {
    const getQuestions = await fetchQuestions()
    if (
      !getQuestions?.response_code &&
      getQuestions?.response_code !== 0 &&
      getQuestions?.results?.length <= 0
    ) {
      dispatch({ type: SET_ERROR, payload: getQuestions })
    } else {
      const questions = formatQuestions(getQuestions)
      dispatch({ type: SET_QUESTIONS, payload: questions })
    }
  }

  // send the user answer to the store
  const onHandleAnswer = (question, answer) => {
    dispatch({ type: ANSWER_QUESTION, payload: { question, answer } })
  }

  // reset the questions and send the user to the home page
  const onHandleReset = () => {
    dispatch({ type: RESET_QUESTIONS, payload: [] })
    history.push(HOME)
  }

  return (
    <div className="container">
      {state.error ? (
        <h1>
          Something went wrong:{' '}
          <span className="error">{state.error.toString()}</span>
        </h1>
      ) : state.questions.length <= 0 ? (
        <Loading />
      ) : totalAnswered < 10 ? (
        <Question
          question={currentQuestion}
          current={totalAnswered}
          handleAnswer={onHandleAnswer}
        />
      ) : (
        <QuizResult
          questionsList={state.questions}
          handleReset={onHandleReset}
        />
      )}
    </div>
  )
}

Quiz.propTypes = {
  history: PropTypes.object.isRequired
}

export default Quiz
