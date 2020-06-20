/* eslint-disable no-undef */
import React, { Suspense } from 'react'
import { render, cleanup, waitForElement } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

afterEach(() => {
  cleanup()
})

/**
 * test the routes with a real call too the API
 */
test('render app home and quiz', async () => {
  const { getByRole, getByText } = render(
    <Suspense fallback={<span>Loading...</span>}>
      <MemoryRouter initialEntries={['/test']}>
        <App />
      </MemoryRouter>
    </Suspense>
  )
  const lazyNotFound = await waitForElement(() => getByRole('button'))
  expect(lazyNotFound).toHaveTextContent('Back to Home')

  lazyNotFound.dispatchEvent(new MouseEvent('click', { bubbles: true }))

  const lazyHome = await waitForElement(() => getByText(/BEGIN/i))
  expect(lazyHome).toBeInTheDocument()

  lazyHome.dispatchEvent(new MouseEvent('click', { bubbles: true }))

  const lazyQuiz = await waitForElement(() => getByText(/TRUE/i))
  expect(lazyQuiz).toBeInTheDocument()
})
