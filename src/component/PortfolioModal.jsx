import React, {useState, useEffect} from 'react'
import * as Icon from 'react-bootstrap-icons';
import { Button, Modal } from 'react-bootstrap';
import {details} from './PortfolioJson'


const PortfolioModal = ( { show, handleCloseModal, targetId }) => {

    const [foundItem, setFoundItem] = useState(null);
    const [itemDetails, setitemDetails] = useState(null);
    useEffect(() => {
        if(targetId){
            const item = details.find(item => item.id == targetId);
            setFoundItem(item)
          
            setitemDetails(()=>{
                return(
                  <div dangerouslySetInnerHTML={ {__html: item.details} } />
                )});
            console.log(item.details)
        }
      }, [details, targetId]);

    
    return  (  
       
        <Modal show={show} onHide={handleCloseModal}  dialogClassName="modal-lg" >
            
            <Modal.Body>
                <a href='#' className="float-right text-white rounded p-2" onClick={handleCloseModal}>
                    <Icon.BoxArrowRight size={20} />
                </a>
               

                <div className="container-fluid mt-5 p-5">
                    <div className="row">
                        <div className="col-md-6">
                        <img src={foundItem ? foundItem.img: null} className="img-fluid" alt=""/>
                    </div>
                        <div className="col-md-6"> 
                            <div className="container pt-3">
                                <div className="row">
                                    <div className="col-lg-12 ">
                                        <div className="mod-item">
                                            <h3><b>Project information</b></h3>
                                            <h5>Catergory : {foundItem ? foundItem.category: null}</h5>
                                            <h5>Project URL : <a href={foundItem ? foundItem.url: null} target="_blank" className='text-primary'>{foundItem ? foundItem.url: null}</a></h5>
                                            <h5>Date Hired : {foundItem ? foundItem.dateHired: null}</h5>
                                             <p><em>{itemDetails}</em></p>
                                             
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Modal.Body>
        </Modal>
    )
};

export default PortfolioModal;