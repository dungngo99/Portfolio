import React from 'react'
import './style.css'
import { MDBBtn, MDBView, MDBMask } from 'mdbreact'
import { Card } from 'react-bootstrap'

const ProjectCard = ({ imgLink, badges, title, netlify, repo }) => {
  return (
    <Card className='col-md-5 p-1 hoverable' style={{ 'margin': '0px 20px' }}>
      <MDBView className="rounded z-depth-2 mb-lg-0 mb-4 view zoom" hover waves>
        <img src={imgLink} className='netflix-bg' alt="Netflixdb" border="0" />
        <a href="#!"><MDBMask overlay="white-slight" /></a>
      </MDBView>

      <Card.Body className='p-2 d-flex flex-column justify-content-center'>
        <Card.Title>{title}</Card.Title>
        <div>{badges.map((badge) => <span key={`${badge}-${title}`} className="badge badge-pill badge-dark mr-2">{badge}</span>)}</div>
        <div>
          <a href={netlify} target="_blank" rel="noopener noreferrer"><MDBBtn color="amber" size="sm" style={{ 'borderRadius': '20px' }}>Online Demo</MDBBtn></a>
          <a href={repo} target="_blank" rel="noopener noreferrer"><MDBBtn color="amber" size="sm" style={{ 'borderRadius': '20px' }}>Git repos</MDBBtn></a>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard
