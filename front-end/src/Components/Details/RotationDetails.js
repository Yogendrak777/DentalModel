import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import Rotating from "../images/Rotating.jpg"

export default function RotationDetails() {
  const navigate = useNavigate()
  const handelGoHome = () => {
    navigate('/')
  }
  return (
    <>
    <Navbar/>
    <button type="button" className="btn btn-warning mx-5 my-4" onClick={handelGoHome}>&lt; &nbsp; Go back</button>
    <div className='container'>
    <h1 className='my-4'>
        Rotation
      </h1>
      <p>
      Tooth rotation is a common orthodontic problem where the tooth is not aligned correctly with the adjacent teeth due to its rotation around its own axis. This can lead to aesthetic issues and functional problems such as difficulty in biting and chewing. Orthodontic treatment can correct tooth rotation and improve the overall alignment and function of the teeth.
      </p>
      <p>
One of the most common methods of correcting tooth rotation is through the use of orthodontic braces. Braces apply gentle and continuous pressure to the teeth, which gradually moves them into their desired position. In the case of tooth rotation, the braces will be designed to apply a specific force to the tooth to rotate it around its own axis.

      </p>
      <img src={Rotating} alt="Crowding Image" className= "mx-5 my-4" height={300} width={400} />
    </div>
    </>
  )
}
