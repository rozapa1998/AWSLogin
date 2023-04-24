import React, { useState , useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import db from './firebase';
import { collection , getDocs } from 'firebase/firestore/lite';
import UserActivationCard from './view/UserActivationCard';

const AdminComponent = () => {
  
    const [Data, setData] = useState([])

    //Datos Firebase
    async function getUsuarios(db) {
      let dbNew=[]
        const usuarioCol = collection(db, 'usuarios');
        const usuarioSnapshot = await getDocs(usuarioCol);
        const usuarioList = usuarioSnapshot.docs.forEach( doc => {
          dbNew.push({"id":doc.id,...doc.data()})
          setData(dbNew)
        })
      }

      useEffect(() => {
        getUsuarios(db)
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
              id={item.id}
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