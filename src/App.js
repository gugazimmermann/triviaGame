import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import QuestionsContext from './context/QuestionsStore'
import { ENTRY_ROUTE, HOME, QUIZ } from './constants'

const Home = lazy(() => import('./pages/home/Home'))
const Quiz = lazy(() => import('./pages/quiz/Quiz'))
const NotFound = lazy(() => import('./pages/notfound/NotFound'))

/**
 * Add the questions context to be used in the Quiz Routes
 */
function App () {
  return (
    <QuestionsContext>
      <Switch>
        <Route exact path={ENTRY_ROUTE} component={Home} />
        <Route exact path={HOME} component={Home} />
        <Route exact path={QUIZ} component={Quiz} />
        <Route component={NotFound} />
      </Switch>
    </QuestionsContext>
  )
}

export default App
