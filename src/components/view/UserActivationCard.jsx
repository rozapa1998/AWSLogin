import React from 'react'
import { Card , Col , Container , Row , Button} from 'react-bootstrap'
import db from '../firebase'
import { deleteDoc , doc, setDoc } from 'firebase/firestore/lite'

const UserActivationCard = ({name,email,activated,id}) => {
  let variant = "Danger"
  let variantSuccess = "Success"

  async function HandleDelete (id) {
      await deleteDoc(doc(db,"usuarios", id))
      location.reload();
  }

  async function HandleIngresado (id) {
    await setDoc(doc(db, "usuarios", id), {
      ingresado: "true",
      nombre:name,
      email:email,
    })
    location.reload();
  }


    return (
    <>
    <Container>
        <Row>
        <Col xs={12}>
            <Card
                bg={activated?variantSuccess.toLowerCase():variant.toLowerCase()}
                key={activated?variantSuccess:variant}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '70rem', height:"17rem" }}
                className="mb-2"
                >
            <Card.Header>{activated?"Activado":"Pendiente"}</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text style={{fontStyle:"italic", color:"yellow"}}>ID: 
                    {id}
                    </Card.Text>
                    <Card.Text>
                    {email}
                    </Card.Text>
                    <Button onClick={()=>HandleIngresado(id)}>Ingresado</Button>

                    <Button className='ms-5' variant='warning' onClick={()=> HandleDelete(id)}>Eliminar</Button>
                </Card.Body>
                </Card>
        </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default UserActivationCard