import { useState } from 'react'
import '../materialize.min.css'
import { useParams } from 'react-router-dom'

function CardNameCom() {
    const cardName= useParams().cardname;
  return (
      <div className="row">
          <div className="col s12 m6">
              <div className="card">
                  <div className="card-image">
                      <img src="../../public/sample-1.jpg"/>{/*image here has a close /> */}
                          <span className="card-title">{cardName}</span>
                          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                  </div>
                  <div className="card-content">
                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CardNameCom
