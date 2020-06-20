import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import QuestionsReducer from './QuestionsReducer'

/**
 * The store to keep the questions state.
 */
const initialState = {
  questions: [],
  error: null
}

export const QuestionsContext = createContext()

const QuestionsStore = ({ children }) => {
  const [state, dispatch] = useReducer(QuestionsReducer, initialState)

  return (
    <QuestionsContext.Provider value={[state, dispatch]}>
      {children}
    </QuestionsContext.Provider>
  )
}

QuestionsStore.propTypes = {
  children: PropTypes.node.isRequired
}

export default QuestionsStore
