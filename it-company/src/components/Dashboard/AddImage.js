import React from 'react';
import ImageUploading from "react-images-uploading";
import './Images.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const AddImage = () => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
   
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
   
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
          <Link to="/home">
              <img src="/images/logo.png" className="navbar-brand" ></img>
          </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/home" className="nav-link active">Home <span class="sr-only">(current)</span></Link>
           
          </div>
        </div>
      </nav>
      
      
      <div className="image-area row ">

        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div>
              <div className="w-100">
                <button
                          style={isDragging ? { color: 'red' } : undefined}
                          className="btn mt-5 mb-3 btn-danger w-50"
                          onClick={onImageUpload}
                          {...dragProps}
                      >
                          Upload Multiple Images
                  </button>
              </div>
                
                 &nbsp;
               <br/>
               <div className="w-100">
               <button className="btn btn-success mb-5 w-50" onClick={onImageRemoveAll}>Remove all images</button>
               </div>
                

              {imageList.map((image, index) => (
                <div divclassName="row">
                    <div key={index} className="image-item col-sm-8">
                        <img src={image['data_url']} alt="" className="ml-5 w-25 h-25" />
                
                        <div className="image-item__btn-wrapper">
                            <button className="btn btn-success mb-2" onClick={() => onImageUpdate(index)}>Update</button>
                            <button className="button btn btn-danger" onClick={() => onImageRemove(index)}>Remove</button>
                        </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
      </div>
    );
  }

  export default AddImage;