import React from 'react'

import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import Forgotpass from './pages/Forgotpass'
import Dashboard from './pages/Dashboard'
import Stock from './pages/Stock'
import Export from './pages/Export'
import Import from './pages/Import'
import History from './pages/History'
import MerchantUser from './pages/MerchantUser'
import MerchantList from './pages/MerchantList'



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
        <Route exact path='/stock' component={Stock} />
        <Route exact path='/export' component={Export} />
        <Route exact path='/import' component={Import} />
        <Route exact path='/history' component={History} />
        <Route exact path='/merchantuser' component={MerchantUser} />
        <Route exact path='/merchantList' component={MerchantList} />


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
// rebase and git pull origin master(branch name)add 
