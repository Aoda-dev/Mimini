import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../Home/Home'
import Features from '../Features/Features'
import SignUp from '../SignUp/SignUp'
import NotFound from '../NotFound/NotFound'

import { page } from '../../router'

import './Main.css'

const Main = ({ location }) => {
  return (
    <main className="Main">
      <Switch location={location}>
        <Route path={page.home} exact>
          <Home />
        </Route>
        <Route path={page.features} exact>
          <Features />
        </Route>
        <Route path={page.signUp} exact>
          <SignUp />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </main>
  )
}

export default Main
