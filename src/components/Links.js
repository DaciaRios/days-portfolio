import React from 'react'
import '../styles/comp.css'

const Links = () => {
  return (
    <section id="links">
    <div className="section-header">Links</div>
    <div className="link-cont">
    <div className="contact-info">
          <p>Email: <a href="mailto:riosdacia@gmail.com">riosdacia@gmail.com</a></p>
          <p>Phone: <a href="tel:+19512835358">951-283-5358</a></p>
      </div>
    <div className="links-content">
      
      <a href="https://github.com/DaciaRios"  target="_blank" rel="noopener noreferrer">
            <img className = "med-image"  src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"
            alt = 'Logo of the silhouette of a cat for Github'/>
      </a>

      <a href="https://www.linkedin.com/in/dacia-rios-5aa4a21b7/"  target="_blank" rel="noopener noreferrer">
            <img className = "med-image" src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png"
            alt= "Letters I and N to represent Indeed"/>
      </a>
    </div>
  </div>
  </section>
  )
}

export default Links