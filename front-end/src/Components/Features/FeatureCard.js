import React , {useState} from 'react'
import "./Style.css"
import { useNavigate } from 'react-router-dom';

export default function FeatureCard() {

  const navigate = useNavigate();

    const [names, setNames] = useState(["Spacing","Crowding","Rotation"]);

    const handelOnClick = (name) => {
      if (name === "Spacing"){
        navigate("/AboutSpacing");
      }else if (name === "Crowding"){
        navigate("/AboutCrowding");
      }else if (name === "Rotation"){
        navigate("/AboutRotation");
    }
  }


  return (
    <div className='FeatureCardDiv'> 
       <div className='my-4'>
      <h4>  Feature Cards </h4>
      </div>
    <div class="d-flex  justify-content-around">
      
{names.map((name) => (
<div class="card text-center CardDivInFeature" onClick={()=>handelOnClick(name)}>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">know more about {name}</h6>
  </div>
  </div>
))}

    </div>
    </div>
  )
}
