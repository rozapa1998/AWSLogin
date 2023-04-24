import React, {useState} from 'react'
import { Card , Col , Container , Row , Button} from 'react-bootstrap'

const UserActivationCard = ({name,email,activated,id}) => {
  let variant = "Danger"
  const [Ingresado, setIngresado] = useState(false)
    return (
    <>
    <Container>
        <Row>
        <Col xs={12}>
            <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '70rem', height:"14rem" }}
                className="mb-2"
                >
            <Card.Header>Pendiente</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {email}
                    </Card.Text>
                    <Button>{activated}Ingresado</Button>
                </Card.Body>
                </Card>
        </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default UserActivationCard