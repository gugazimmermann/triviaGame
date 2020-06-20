/* eslint-disable no-undef */
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../../pages/home/Home'

afterEach(() => {
  cleanup()
})

test('renders Home with Welcome text, link to quiz and button to begin', () => {
  const { getByText, getByTestId, getByRole } = render(
    <BrowserRouter><Home /></BrowserRouter>
  )
  expect(getByText(/Welcome to the Trivia Challenge/i)).toBeInTheDocument()
  expect(getByTestId('link').getAttribute('href')).toEqual('/quiz')
  expect(getByRole('button')).toHaveTextContent('BEGIN')
})
