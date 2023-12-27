import React from "react";
import { useState } from "react";
import "../commonComp.css";

const CommonUpload = ({ label }) => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const imageArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => [...prevImages, ...imageArray]);
    }
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
            <div className="input-group-append">
              <button className="uploadBtn" type="button">
                Upload
              </button>
            </div>
          </div>

          {images.length > 0 && (
            <div>
              <h2>Uploaded Images</h2>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Uploaded ${index + 1}`}
                  style={{ width: "300px" }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonUpload;
