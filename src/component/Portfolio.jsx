import React, {useState} from 'react'
import * as Icon from 'react-bootstrap-icons';
import PortfolioModal from './PortfolioModal';
import {projects} from './PortfolioJson';
function Portfolio() {
    const [modalShow, setModalShow] = useState(false);
    const [targetId, settargetId] = useState(0);
    const projectList = 
        projects.map(item => (
            <li key={item.id} className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div   className="portfolio-wrap rounded p-2">
                    {/* <div> */}
                        <img src={item.img} className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>{item.projectName}</h4>
                            <p>{item.title}</p>
                            <div className="portfolio-links">
                                <a href='#' onClick={() => {setModalShow(true); settargetId(item.keys)}} data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Details"><Icon.PlusCircle size={40} className='text-primary rounded p-1 mb-3'/></a>
                                {item.keys==5 ? (<a href={item.url} target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Link"><Icon.Github size={40} className='text-primary rounded p-1 mb-3'/></a>)
                                :(<a href={item.url} target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Link"><Icon.Link45deg size={50} className='text-primary rounded p-1 mb-3'/></a>)}
                                
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </li>));
    return (
    <>
    
        <div className="row scroll portfolio p-5">
            <div className="col-12">
                <h3 className='section-title-h2 poppin mt-3'>Portfolio</h3>
                <h2 className='text-white poppin'><b>MY WORKS</b></h2>
            </div>
            <div className="col-12 pl-5">
                <div className="row portfolio-container">
                    <ul className="row portfolio-container">{projectList}</ul>
                    
                    {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap rounded p-2">
                            <img src="/chsi.jpg" className="img-fluid" alt=""/>
                            <div className="portfolio-info">
                                <h4>CARITAS HEALTH SHIELD WEBSITE</h4>
                                <p>LARAVEL</p>
                                <div className="portfolio-links">
                                    <a href='#' onClick={() => {setModalShow(true); settargetId(1)}} data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Details"><Icon.PlusCircle size={40} className='text-primary rounded p-1 mb-3'/></a>
                                    <a href='https://caritashealthshield.com.ph/' target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Link"><Icon.Link45deg size={50} className='text-primary rounded p-1 mb-3'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap rounded p-2">
                            <img src="/chsi-mis.jpg" className="img-fluid" alt=""/>
                            <div className="portfolio-info">
                                <h4>CHSI MEMBER INFORMATION SYSTEM</h4>
                                <p>LARAVEL</p>
                                <div className="portfolio-links">
                                    <a href='#' onClick={() => {setModalShow(true); settargetId(2)}} data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Details"><Icon.PlusCircle size={40} className='text-primary rounded p-1 mb-3'/></a>
                                    <a href='https://caritashealthshield.com.ph/caritas_mis/' target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Link"><Icon.Link45deg size={50} className='text-primary rounded p-1 mb-3'/></a>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap rounded p-2">
                            <img src="/chsi-proposal.jpg" className="img-fluid" alt=""/>
                            <div className="portfolio-info">
                                <h4>CHSI PROPOSAL SYSTEM</h4>
                                <p>LARAVEL</p>
                                <div className="portfolio-links">
                                    <a href='#' onClick={() => {setModalShow(true); settargetId(3)}}data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Details"><Icon.PlusCircle size={40} className='text-primary rounded p-1 mb-3'/></a>
                                    <a href='https://caritashealthshield.com.ph/new_proposal/' target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Link"><Icon.Link45deg size={50} className='text-primary rounded p-1 mb-3'/></a>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap rounded p-2">
                            <img src="/issabelPBX.jpg" className="img-fluid" alt=""/>
                            <div className="portfolio-info">
                                <h4>Issabel PBX</h4>
                                <p>Aeon - Vietnam</p>
                                <div className="portfolio-links">
                                    <a href='#' onClick={() => {setModalShow(true); settargetId(4)}} data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Details"><Icon.PlusCircle size={40} className='text-primary rounded p-1 mb-3'/></a>
                                    <a href='https://www.issabel.org/get-issabel/' target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Link"><Icon.Link45deg size={50} className='text-primary rounded p-1 mb-3'/></a>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                   
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap rounded p-2">
                            <img src="/nodejs-expressjs.jpg" className="img-fluid" alt=""/>
                            <div className="portfolio-info">
                                <h4>ExpressJS-Crud-JWT-BasicAuth-RestApi</h4>
                                <p>NodeJS</p>
                                <div className="portfolio-links">
                                    <a href='#' onClick={() => {setModalShow(true); settargetId(5)}} data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Details"><Icon.PlusCircle size={40} className='text-primary rounded p-1 mb-3'/></a>
                                    <a href='https://github.com/jpsandiego22/nodeJS-Crud-Jwt-BasicAuth-RestApi' target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Link"><Icon.Github size={40} className='text-primary rounded p-1 mb-3'/></a>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap rounded p-2">
                            <img src="/react-works.jpg"  alt=""/>
                            <div className="portfolio-info">
                                <h4>MySite</h4>
                                <p>ReactJS</p>
                                <div className="portfolio-links">
                                    <a href='#' onClick={() => setModalShow(true)} data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Details"><Icon.PlusCircle size={40} className='text-primary rounded p-1 mb-3'/></a>
                                    <a href='/' target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Link"><Icon.Link45deg size={50} className='text-primary rounded p-1 mb-3'/></a>
                                </div>
                            </div>
                        </div>
                       
                    </div> */}
                    <div className="col-lg-12 portfolio-item filter-app">
                        <h3 className='section-title-h2 poppin mt-3'>Other Internal Projects </h3>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap rounded p-2">
                            <img src="/aeon-webadmin.jpg" className="img-fluid rounded" alt=""/>
                            <div className="portfolio-info">
                                <h4>WEB ADMIN (VISA CARD)</h4>
                                <p>AEON Specialized Bank (Cambodia) Plc</p>
                                <div className="portfolio-links">
                                    <a href='#' onClick={() => {setModalShow(true); settargetId(7)}}  data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Details"><Icon.PlusCircle size={40} className='text-primary rounded p-1 mb-3'/></a>
                                    {/* <a href='/' target='_blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Project Link"><Icon.Link45deg size={50} className='text-primary rounded p-1 mb-3'/></a> */}
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
           
        </div>
         <PortfolioModal show={modalShow} handleCloseModal={() =>setModalShow(false)} targetId={targetId}/>
    </>
    )
}

export default Portfolio