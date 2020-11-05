import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#root')

const TextForm = ({addText, modalIsOpen, afterOpenModal, closeModal}) => {
    const [text, setText] = useState('');

    const { register, errors } = useForm();
    
    const handleSubmit = (e) => {
      e.preventDefault();
      addText(text)
    }

  
    return (
        <div className="modal">
            
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 className="text-brand text-center text-success">Add text on T-shirt</h2>
            <br/>
            <form onSubmit={handleSubmit}>
         
            <input type="text" name="mainText" className="form-control" placeholder="Write your text here" value={text} ref={register({ required: true })} onChange ={(e) => setText(e.target.value)} />
            {errors.age && <span className="text-danger">This field is required</span>}
            <br/>
    
            <input className="btn btn-success w-100" type="submit" value="Submut"/>
            <br/>
            </form>
            <br/>
            <button className="btn btn-danger text-center w-100"onClick={closeModal}>close</button>
        </Modal>
            
        </div>
    );
};

export default TextForm;