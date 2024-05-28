import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/comp.css'

const Nav = ({sel}) => {
  const handleChange = (sect) =>{ sel(sect);}
  return (
    <nav className="navbar navbar-expand-lg custom-navbar navbar-dark justify-content-center fs-5 fw-bold">
    <button className="navbar-toggler" type="button" data-toggle="collapse" 
    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    </button> 
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#about" onClick={()=> handleChange('about')}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#education" onClick={()=> handleChange('education')}>Education & Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#experience" onClick={()=> handleChange('experience')}>Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#extra" onClick={()=> handleChange('extra')}>Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#links" onClick={()=> handleChange('links')}>Links</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Nav