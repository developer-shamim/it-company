import React, { useRef, useState } from 'react';
import './Images.css'
import tshirt from '../../images/tshirt.jpg'
import TextForm from './TextForm';
import useDraggable from './useDragable';
import { Link } from 'react-router-dom';


const DraggableCard = ({ children }) => {
    const cardRef = useRef(null);
    useDraggable(cardRef);
  
    return (
      <div className="card" ref={cardRef}>
        {children}
      </div>
    );
  };

const DesignTshirt = () => {
    const [type, setType] = useState([]);
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

        const addText = (text) => {
            setType({text});
        }

        function habndleMoveLeft () {
            alert ("Arrow right yet to be activated...Please use drag and drop instead!")
        }

       function habndleMoveRight () {
            alert ("Arrow right yet to be activated...Please use drag and drop instead!")
        }

    return (
        <div className="container design-area" >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <Link to="/" className="navbar-brand" >Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/home" className="nav-link active">Home <span class="sr-only">(current)</span></Link>
           
          </div>
        </div>
      </nav>
            <img className="t-shart mt-4 mb-2" src={tshirt} alt="" />

            <div className="t-shirt-text">
               <DraggableCard key={type.id}>{type.text}</DraggableCard>
                
            </div>

            <div className="left-button">
                <button className="btn btn-success" onClick={habndleMoveLeft} > Move Left</button>
            </div>

            
            <div className="right-button">
                <button className="btn btn-success" onClick={habndleMoveRight}> Move Right </button>
            </div>

            <div className=" ">
                <button className="btn btn-warning text-dark mb-4" onClick={openModal} >Add text into the t-shirt</button>
              
                <TextForm addText={addText} modalIsOpen={modalIsOpen} closeModal={closeModal} afterOpenModal={afterOpenModal}></TextForm>
                
                

            </div>
            
        </div>
    );
};

export default DesignTshirt;