import React, { useState } from 'react'
import { Form , Card , Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

const LogIn = () => {
  
    const [User, setUser] = useState("")
    const [Pass, setPass] = useState("")
    
    let usuario = "Rozg98"
    let password = "12345"
    const navigate = useNavigate()

    const HandlerLogIn = () => {
        if( usuario === User && password === Pass){
            return navigate("/AdminInterface")
        }
    }

    return (
    <>
        <Container>
            <Row>
                <Col xs={12}>
                    <Card>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" value={User} onChange={e => setUser(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={Pass} onChange={e => setPass(e.target.value)}/>
                            </Form.Group>
                        </Form>
                        <Button onClick={()=>HandlerLogIn()}>Log In</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default LogIn