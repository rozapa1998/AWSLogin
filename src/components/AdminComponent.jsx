import React, { useState , useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import db from './firebase';
import { collection , getDocs } from 'firebase/firestore/lite';
import UserActivationCard from './view/UserActivationCard';

const AdminComponent = () => {
  
    const [Data, setData] = useState([])

    //Datos Firebase
    async function getUsuarios(db) {
        const usuarioCol = collection(db, 'usuarios');
        const usuarioSnapshot = await getDocs(usuarioCol);
        const usuarioList = usuarioSnapshot.docs.map(doc => doc.data());
        return setData(usuarioList)
      }

      useEffect(() => {
        getUsuarios(db)
        return () => {
          console.log("cargando data")
        }
      }, [])
      

    return (
    <>
    <Container>
      <Row>
        <Col xs={12}>
          <h1 style={{color:"white"}}>Fecilitando Emails</h1>
        </Col>
        <Col xs={12}>
          {Data.map(item=>{
            return(
              <UserActivationCard
              key={item.id}
              name={item.nombre}
              email={item.email}
              activated={item.ingresado}
              />
            )
          })}

        </Col>
      </Row>
    </Container>
    </>
  )
}

export default AdminComponent