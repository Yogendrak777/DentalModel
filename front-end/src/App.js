import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouterPage from './Components/MainRouter/RouterPage';
import OutPutImage from './Components/OutPut/OutPutImage';
import SpacingDetails from './Components/Details/SpacingDetails';
import CrowdingDetails from './Components/Details/CrowdingDetails';
import RotationDetails from './Components/Details/RotationDetails';


function Analyse() {
  
  const router = createBrowserRouter([
    {
      path: '/',element:<RouterPage/>
    },
    {
      path: '/analyse',element:<OutPutImage path="result.jpg"/>
    },
    {
      path: '/AboutSpacing',element:<SpacingDetails/>
    },
    {
      path: '/AboutCrowding',element:<CrowdingDetails/>
    },
    {
      path: '/AboutRotation',element:<RotationDetails/>
    },

    
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>

  );
}

export default Analyse;
