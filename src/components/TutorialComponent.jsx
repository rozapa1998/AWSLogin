import React from 'react'

const TutorialComponent = () => {
  return (
    <div className='container'>
        <div className='row'>
            <p className='col-12 text-center pt-5' style={{color:"white", fontSize: "50px", fontFamily:'sans-serif'}}>Video tutorial</p>
            <div className='mt-5'>
                <iframe className='col-12' width="1280" height="720" src="https://www.youtube.com/embed/wYzLzXVeosw" title="AWS ACTIVACION CUENTAS" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default TutorialComponent