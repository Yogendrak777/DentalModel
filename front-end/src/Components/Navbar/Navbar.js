import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src="https://easyshiksha.com/institutes_informations/logo/252207.jpg" alt="Logo" width="100" height="30" className="d-inline-block align-text-top"/>
     &nbsp; Orthodontic Malocclusion Detection
    </Link>
  </div>
</nav>
    </div>
  )
}
