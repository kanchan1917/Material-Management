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
      {/* <Header />
    <Sidebar />
    <MainContent/>
    <Footer /> */}
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
