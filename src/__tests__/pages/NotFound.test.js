/* eslint-disable no-undef */
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFound from '../../pages/notfound/NotFound'

afterEach(() => {
  cleanup()
})

test('renders NotFound with Page Not Found text, link to home and button to back', () => {
  const { getByText, getByTestId, getByRole } = render(
    <BrowserRouter><NotFound /></BrowserRouter>
  )
  expect(getByText(/Sorry, Page Not Found/i)).toBeInTheDocument()
  expect(getByTestId('link').getAttribute('href')).toEqual('/')
  expect(getByRole('button')).toHaveTextContent('Back to Home')
})
