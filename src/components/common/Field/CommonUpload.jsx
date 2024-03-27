import React, { forwardRef, useEffect } from "react";
import { useState } from "react";
import "../commonComp.css";

const CommonUpload = (props) => {
  const { label, onFileChange, id,filename ="Choose files"} = props
  const [images, setImages] = useState("Choose files");
  useEffect(()=>{
    setImages(filename)
  },[filename])
  return (
    <div className="row ">
      <div className="col-lg-4">
        <div>
          <label style={{ fontSize: "14px", fontWeight: "600" }}>{label}</label>
        </div>
        <div >
          <div className="input-group uploadbtn">
            <div className="custom-file ">
              <input
                type="file"
              
                className="custom-file-input "
                id={id}
                onChange={(e) => onFileChange(e)}
               
                // multiple
                style={{ width: "150px" }}
              />
              <label className="custom-file-label" htmlFor={id} >
                {images}
              </label>
            </div>
            {/* Uncomment this button if you want to add an upload button */}
            {/* <div className="input-group-append">
              <button className="uploadBtn" type="button" onClick={handleUploadButtonClick}>
                Upload
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonUpload;
