/* eslint-disable no-undef */
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import QuizResult from '../../pages/quiz/QuizResult'
import mockQuestions from '../mockQuestions.json'

afterEach(() => {
  cleanup()
})

test('renders QuizResult with You Scored text, link to home and button to back', () => {
  const questionsList = mockQuestions.results
  const handleReset = jest.fn()

  const { getByText, getByRole } = render(
    <BrowserRouter><QuizResult questionsList={questionsList} handleReset={handleReset} /></BrowserRouter>
  )
  expect(getByText(/You Scored/i)).toBeInTheDocument()
  expect(getByRole('button')).toHaveTextContent('Play Again?')
})
