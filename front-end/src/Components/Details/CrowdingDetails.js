import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import Crowding from "../images/Crowding.jpg"


export default function CrowdingDetails() {
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
      Crowding
      </h1>
      <p>
      Crowding of teeth is a common dental problem that occurs when there is insufficient space in the dental arch to accommodate all the teeth properly. This can lead to teeth that are misaligned, rotated, or overlapping. Crowding can affect both the upper and lower teeth and can occur in any part of the dental arch.
      </p>
      <p>
There are several causes of crowding, including genetics, abnormal jaw growth, early loss of primary teeth, and habits such as thumb sucking or tongue thrusting. Crowding can also be caused by periodontal disease or trauma to the teeth or jaw.
</p>
<p>
Orthodontic treatment can help correct crowding of teeth by using braces, clear aligners, or other orthodontic appliances to gradually move the teeth into their proper positions. In some cases, tooth extraction may be necessary to create enough space in the dental arch.
      </p>

      <img src={Crowding} alt="Crowding Image" className= "mx-5 my-4" height={300} width={400} />
    </div>
    </>
  )
}
