import React from 'react'
import FormComponent from "./FormComponent"


const Home = () => {
    return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1 style={{color:"white"}}>¡Bienvenido/a! Vamos a activar tu cuenta de <strong style={{color:"orange"}}>Amazon Academy</strong></h1>
            </div>
        </div>
        <div className='col-12 text-center pt-5'>
            <h2 style={{color:"white"}}>Primero necesito tus datos...</h2>
        </div>
    </div>
  )
}

export default Home