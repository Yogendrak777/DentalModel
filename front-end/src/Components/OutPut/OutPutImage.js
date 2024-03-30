import React, { useState, useEffect } from 'react';
import { storage } from './Firebase';
import Navbar from '../Navbar/Navbar';
import './Style.css';
import { useNavigate } from 'react-router-dom'


const OutPutImage = ({ path }) => {
  const [imageUrl, setImageUrl] = useState('');

  const navigate = useNavigate()
  const handelGoHome = () => {
    navigate('/')
  }

  useEffect(() => {
    storage.ref(path).getDownloadURL().then((url) => {
      setImageUrl(url);
    });
   
  }, [path]);

  return (
  <div>
    <Navbar/>
    <button type="button" className="btn btn-warning mx-5 my-4" onClick={handelGoHome}>&lt; &nbsp; Go back</button>
    <div className='header'>
      <h2 className='my-3'>processed output</h2>
    <img src={imageUrl} alt="Firebase Image" height={500} width={700} />
    <h6 className='my-3'>Thank you &#128515;</h6>
    </div>
    
  </div>
  )
 
};

export default OutPutImage;
