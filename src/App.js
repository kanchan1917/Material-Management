import React from 'react'

import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import Forgotpass from './pages/Forgotpass'
import Dashboard from './pages/Dashboard'

const App = () =>
{
  return (
    <div className="App">

      <Router>
        <Route exact path="/">
          <Redirect from='/' to='/login' />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgotpass" component={Forgotpass} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Router>

    </div>
  )
}

export default App

// git add . -> Adds all the files which are changed
// git commit -m "apna message likh de" -> commit changes to git
// git push origin master(branch-name) -> push code to github
// git checkout -b alloo(branch-name) -> create new branch
// git checkout master -> suppose tu allo wali branch mai hai and tujhe wapis master wali branch mai jana hai toh yeh likhna
// PR -> pull request for code review 
// rebase and git pull origin master(branch name)
