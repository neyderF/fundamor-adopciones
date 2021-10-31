import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import authToken from './config/authToken'
import PrivateRoute from './components/PrivateRoute'

//Components imports
import NavbarComponent from './components/Navbar'

//Styles imports
import './scss/_global.scss'

// Screens Imports
import About from './screens/About'
import Home from './screens/Home'
import Gallery from './screens/Gallery'
import Login from './screens/Login'
import './scss/_global.scss'
import Test from './screens/CssTests'
import PasswordReset from './screens/PasswordReset'
import Employeee from './screens/Employee'
import AuthState from './context/auth/authState'
import EmployeeState from './context/employee/employeeState'

const token = localStorage.getItem("token");
if (token) {
  authToken(token);
}

function App() {
  return (
    <AuthState>
      <EmployeeState>
        <div className="App">
          <Router>
            <NavbarComponent />{' '}
            <div className="main-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <PrivateRoute path="/gallery" component={Gallery} />
              <Route path="/login" component={Login} />
              <Route path="/csstests" component={Test} />
              <PrivateRoute path="/employees" component={Employeee} />
              <Route path="/passwordReset" component={PasswordReset} />
            </Switch>
            </div>
          </Router>
        </div>
      </EmployeeState>
    </AuthState>
  )
}

export default App
