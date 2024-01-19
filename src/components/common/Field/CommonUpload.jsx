import React from "react";
import { useState } from "react";
import "../commonComp.css";

const CommonUpload = ({ label, onFileChange }) => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    console.log("newfles",files);
    // if (files.length>0) {
      onFileChange(e.target.files);
    // }
  };
  
  return (
    <div className="row">
      <div className="col-lg-4">
        <div>
          <label style={{ fontSize: "14px", fontWeight: "600" }}>{label}</label>
        </div>
        <div>
          <div className="input-group">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                onChange={handleImageChange}
                multiple
                style={{ width: "150px" }}
              />
              <label className="custom-file-label" htmlFor="customFile">
                Choose files
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
