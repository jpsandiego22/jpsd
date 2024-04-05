import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import Skills from './Skills'

function About() {
  return (
        <div className="row scroll">
            <div className="col-12 pr-0">
                <div className="container pt-3">
                
                    <h3 className='section-title-h2 poppin mt-3'>ABOUT</h3>
                    <h2 className='text-white poppin'><b>LEARN MORE ABOUT ME</b></h2>
                </div>
            </div>
            <div className="col-12 ">
                <div className="container pt-3">
                    <div className="row pt-5">
                        <div className="col-md-4 mb-2">
                            <img src="jpsd-icon.jpg"  className="img-fluid "/>
                        </div>
                        <div className="col-md-8">
                            <h3 className='text-success'>FULLSTACK WEB DEVELOPER</h3>
                            <p className="fst-italic text-light">
                            “Life would be much easier if I had the source code. 😂😂”
                            </p>
                            <span> ― JPSD</span>
                            <div className="row mt-4 text-white fst-italic ">
                            <div className="col-lg-6">
                                <ul>
                                <li><Icon.ChevronRight className='text-success mr-2'/> <strong>Website:</strong> <span>www.jpsd.com</span></li>
                                <li><Icon.ChevronRight className='text-success mr-2'/> <strong>Phone:</strong> <span>+63 930 *** 5240</span></li>
                                <li><Icon.ChevronRight className='text-success mr-2'/> <strong>City:</strong> <span>Rodriguez, Rizal, PH</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                <li><Icon.ChevronRight className='text-success mr-2'/> <strong>Degree:</strong> <span>BS Information Techonlogy</span></li>
                                <li><Icon.ChevronRight className='text-success mr-2'/> <strong>Gmail:</strong> <span>jpsd@gmail.com</span></li>
                                <li><Icon.ChevronRight className='text-success mr-2'/> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Skills /> 
            </div>
        </div>
    </div>
  )
}

export default About