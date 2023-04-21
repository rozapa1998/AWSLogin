import React, { useEffect, useState } from 'react'

const AdminComponent = () => {
  
    const [Data, setData] = useState([])

    //Datos Firebase
    async function getUsuarios(db) {
        const usuarioCol = collection(db, 'usuarios');
        const usuarioSnapshot = await getDocs(usuarioCol);
        const usuarioList = usuarioSnapshot.docs.map(doc => doc.data());
        return setData(usuarioList)
      }


      
      
  
    return (
    <>
    
    <h1>Fecilitando Emails</h1>

    
    
    </>
  )
}

export default AdminComponent