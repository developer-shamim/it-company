import React, { useState } from 'react';
import './Images.css'
import tshirt from '../../images/tshirt.jpg'
import TextForm from './TextForm';



const DesignTshirt = () => {
    const [modalIsOpen,setIsOpen] = useState(false);
        function openModal() {
            setIsOpen(true);
        }
        
        function afterOpenModal() {
            // references are now sync'd and can be accessed.
            
        }
        
        function closeModal(){
            setIsOpen(false);
        }
    return (
        <div className="container design-area" >
            <img className="t-shart mt-4 mb-2" src={tshirt} alt="" />

            <div className="t-shirt-text">
                <h3 className="text-danger text-center " >Hello</h3>
            </div>
            

            <div className="left-button">
                <button className="btn btn-success "> Move Left</button>
            </div>

            
            <div className="right-button">
                <button className="btn btn-success"> Move Right </button>
            </div>
            
           

            <div className="insert-text">
                <button className="btn btn-warning text-dark mb-4" onClick={openModal} >Add text into the T-Shirt</button>
              
                <TextForm modalIsOpen={modalIsOpen} closeModal={closeModal} afterOpenModal={afterOpenModal}></TextForm>
                
                

            </div>
            
        </div>
    );
};

export default DesignTshirt;