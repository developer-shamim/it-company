import React from 'react';
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

const TextForm = ({modalIsOpen, afterOpenModal, closeModal}) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
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
            <form onSubmit={handleSubmit(onSubmit)}>
         
            <input name="exampleRequired"  className="form-control" placeholder="Write your text here" ref={register({ required: true })} />
            {errors.age && <span className="text-danger">This field is required</span>}
            <br/>

            <input name="example" className="form-control"  ref={register} placeholder="Optional sub-text"/>
            <br/>
    
            <input className="btn btn-success w-100" type="submit" />
            <br/>
            </form>
            <br/>
            <button className="btn btn-danger text-center w-100"onClick={closeModal}>close</button>
        </Modal>
            
        </div>
    );
};

export default TextForm;