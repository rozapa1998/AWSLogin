import './App.css'
import FormComponent from './components/FormComponent'
import Home from './components/Home'

function App() {

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <Home/>
          <FormComponent/>
        </div>
      </div>
    </div>
  )
}

export default App
