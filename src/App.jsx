import './App.css'
import AdminComponent from './components/AdminComponent'
import Home from './components/Home'
import LogIn from './components/LogIn'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route , Routes as Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
        <NavBar/>
            <Switch>
              <Route path='/AdminLoggin' element={<LogIn/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='/AdminInterface' element={<AdminComponent/>}/>
            </Switch>
    </Router>
    
  )
}

export default App
