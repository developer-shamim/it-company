import React from 'react';
import ImageUploading from "react-images-uploading";
import './Images.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AddImage = () => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
   
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
   
    return (
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
                <button
                        style={isDragging ? { color: 'red' } : undefined}
                        className="btn mt-5 mb-3 btn-danger w-50"
                        onClick={onImageUpload}
                        {...dragProps}
                    >
                        Upload Multiple Images
                </button>
                 &nbsp;
               <br/>
                <button className="btn btn-success mb-5 w-50" onClick={onImageRemoveAll}>Remove all images</button>

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
    );
  }

  export default AddImage;