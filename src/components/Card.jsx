import { useState } from 'react'
import '../materialize.min.css'
import { Outlet } from 'react-router-dom'

function Card(props) {
  return (
    <div>
      <div className="row">
          <div className="col s12 m6">
              <div className="card">
                <p>{props.try.toUpperCase()}</p>
                  <div className="card-image">
                      <img src="../../public/sample-1.jpg"/>{/*image here has a close /> */}
                          <span className="card-title">Title</span>
                          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                  </div>
                  <div className="card-content">
                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                  </div>
              </div>
          </div>
      </div>
      <Outlet/>
      </div>
  )
}

export default Card
