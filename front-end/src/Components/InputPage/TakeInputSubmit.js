import React, { useState } from 'react'
import "./Style.css"

export default function TakeInputSubmit() {
  
  return (
    <div className='InputDiv'>
      <div className='my-4'>
      <h4>  please select the image to be analysed </h4>
      </div>
     
      <form action="/analyse" method="post" encType="multipart/form-data">
        <input type="file" name="file" class="form-control" />
        <center>
          <input type="submit" class="form-control btn btn-success" />
        </center>
      </form>
    
      {/* <img src={'static/result.jpg'} /> */}
    </div>
  )
}
