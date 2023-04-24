import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import db from './firebase';
import { collection , addDoc } from "firebase/firestore/lite"

const FormComponent = () => {

    //FIREBASE
    async function NuevaEntrada (nombredata, emaildata) {
        
        try{
            //Id random
            let idGen = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            
            const docRef = await addDoc(collection(db, "usuarios"),{
                nombre: nombredata,
                email: emaildata,
                ingresado: false,
                id: idGen
            })
        
            //Success alert
            setAlertS(false)

            setTimeout(() => {
                setAlertS(true)
            }, 3000);
    
        }catch (e){
            
            //Error alert
            setAlertD(false)

            setTimeout(() => {
                setAlertD(true)
            }, 3000);
        }
        
    }
    
    //Inicializando estado
    const [Email, setEmail] = useState("")
    const [Nombre, setNombre] = useState("")
    const [alertS, setAlertS] = useState(true)
    const [alertD, setAlertD] = useState(true)

    
    //Funcion Handler
    const HandlerRegister = (e) => {
        e.preventDefault()
        let NombreUser = document.getElementById("NombreUser").value
        let EmailUser = document.getElementById("EmailUser").value
        let EmailUser2 = document.getElementById("EmailUser2").value

        //Control de ingreso de email
        if(EmailUser === EmailUser2){
            setEmail(EmailUser)
        }
        
        //Seteamos Nombre del usuario
        setNombre(NombreUser)
        
        //Guardamos en BD
        NuevaEntrada(Nombre,Email)
        
    }
    
  
    return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 pt-5'>
                <Card style={{backgroundColor:"white", color: "black", borderRadius:"10px"}}>
                    <Form>
                    <Form.Group className="mb-3" controlId="NombreUser">
                        <Form.Label><strong>Nombre completo</strong></Form.Label>
                        <Form.Control value={Nombre} onChange={e => setNombre(e.target.value)} type="text" placeholder="Ej: Carlos Suarez" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="EmailUser">
                        <Form.Label><strong>Correo Electronico</strong></Form.Label>
                        <Form.Control value={Email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Ej: algo@gmail.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="EmailUser2">
                        <Form.Label>Confirmacion correo electronico</Form.Label>
                        <Form.Control type="email" placeholder="Ej: algo@gmail.com" />
                        <Form.Text className="text-muted">
                        A este mail te va a llegar la activacion de tu cuenta.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={HandlerRegister}>
                        Enviar
                    </Button>
                    </Form>
                </Card>
            </div>
        </div>
        {alertS ? true : <div class="alert alert-success ms-3 me-3 mt-5 fixed-bottom" role="alert">¡Felicitaciones  <strong>dentro de las 24hs</strong> llegara el mail a tu <strong>casilla de correo</strong>!</div>}
        {alertD ? true : <div class="alert alert-danger ms-3 me-3 mt-5 fixed-bottom" role="alert">Algo salio mal...</div>}
    </div>
    
  )
}

export default FormComponent