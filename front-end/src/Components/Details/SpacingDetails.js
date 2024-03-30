import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import Spacing from "../images/Spacing.jpg"

export default function SpacingDetails() {
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
            Spacing
        </h1>
      <p>
      Spacing in orthodontics refers to the gaps or spaces between teeth. These spaces can occur naturally, or they can be the result of teeth that are too small for the size of the jaw, teeth that are missing, or teeth that have been extracted.
      </p>
      <p>
Spacing can be a cosmetic concern, but it can also affect the bite and the alignment of the teeth. Depending on the cause and severity of the spacing, orthodontic treatment may be recommended to close the gaps and improve the overall appearance and function of the teeth and jaws.


      </p>
      <img src={Spacing} alt="Crowding Image" className= "mx-5 my-4" height={300} width={400} />
    </div>
    </>
  )
}
