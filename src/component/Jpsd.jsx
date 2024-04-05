import React from 'react'
import * as Icon from 'react-bootstrap-icons';
function Jpsd() {
  return (
    <div className="row">
        <div className="col-12">
            <div className="container pt-3">
                <h1 className='consolas'><a href="/" className='text-success'><b>JPSD</b></a></h1>
                <h3 className='text-white'>
                    <em>" Sometimes, passion blooms as you dive deeper.<br/>Imagine learning <b className='text-success'>“ Web Development ”</b>, then suddenly understanding <br/>how websites work "</em> <br/><em className='text-primary'>– it's like opening a treasure chest of digital secrets!</em></h3>
                <div className="social-links">
                    <a href="mailto:jomersan0619@gmail.com" className="rounded m-2"><Icon.Google size={50} className='text-primary rounded bg-light p-1 m-2 mb-3'/></a>
                    <a href="https://www.facebook.com/jpsandiego22" target='_blank' className="facebook"><Icon.Facebook size={50} className='text-primary rounded bg-light p-1  m-2 mb-3'/></a>
                    <a href="https://www.linkedin.com/in/jomer-san-diego-jr-322392165/"  target='_blank' className="linkedin  text-primary"><Icon.Linkedin size={50} className='rounded bg-light p-1  m-2 mb-3'/></a>
                    <a href="https://github.com/jpsandiego22"  target='_blank' className="github text-dark"><Icon.Github size={50} className='rounded bg-light p-1  m-2 mb-3'/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Jpsd