import './App.css'
import FormComponent from './components/FormComponent'
import Home from './components/Home'
import TutorialComponent from './components/TutorialComponent'

function App() {

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <Home/>
          <FormComponent/>
          <TutorialComponent/>
        </div>
      </div>
    </div>
  )
}

export default App
