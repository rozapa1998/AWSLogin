import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const FormComponent = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 pt-5'>
                <Card style={{backgroundColor:"white", color: "black", borderRadius:"10px"}}>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><strong>Nombre completo</strong></Form.Label>
                        <Form.Control type="password" placeholder="Ej: Carlos Suarez" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><strong>Correo Electronico</strong></Form.Label>
                        <Form.Control type="email" placeholder="Ej: algo@gmail.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Confirmacion correo electronico</Form.Label>
                        <Form.Control type="email" placeholder="Ej: algo@gmail.com" />
                        <Form.Text className="text-muted">
                        <Form.Text className="text-muted">
                        A este mail te va a llegar la activacion de tu cuenta.
                        </Form.Text>
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    </Form>
                </Card>
            </div>
        </div>
    </div>
    
  )
}

export default FormComponent