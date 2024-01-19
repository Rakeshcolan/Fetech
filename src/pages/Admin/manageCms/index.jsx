import CommonUpload from "../../../components/common/Field/CommonUpload";
import "./manageCmsStyle.css";
import "../../../styles/App.css";
import { useDispatch } from "react-redux";
import { addCMSApi } from "../../../redux/action/adminAction";
import { useState } from "react";

const ManageCMS = () => {
  const dispatch = useDispatch();
  const [aboutUsFiles, setAboutUsFiles] = useState([]);
  const [termsAndConditionsFiles, setTermsAndConditionsFiles] = useState([]);

  const handleAboutUsFileChange = (file) => {
    console.log("handleabout",file);
    const files = file;
    if (files && files.length > 0) {
      setAboutUsFiles(Array.from(files));
    }
  };

  const handleTermsAndConditionsFileChange = (file) => {
    const files =file;
    if (files && files.length > 0) {
      setTermsAndConditionsFiles(Array.from(files));
    }
  };


  const handleUploadDocuments = () => {
  
    const formData = new FormData();

    aboutUsFiles.forEach((file, index) => {
      console.log("aboutsfile",file);
      formData.append(`about[${index}]`, file);
    });

    termsAndConditionsFiles.forEach((file, index) => {
      formData.append(`terms_condition[${index}]`, file);
    });

    console.log(formData, "formData");
    dispatch(addCMSApi(formData));
  };

 
  return (
    <>
      <div className="commonbox">
        <h4>Manage CMS Page</h4>
        <div className="cmscontainer">
          <div className="cmsupload">
            <p>About Us</p>
            <CommonUpload
              label={"Upload Your Files"}
              onFileChange={handleAboutUsFileChange}
            />
          </div>
          <div className="cmsupload">
            <p>Term And Condition</p>
            <CommonUpload
              label={"Upload Your Files"}
              onFileChange={handleTermsAndConditionsFileChange}
            />
          </div>
          <button className="cmsbutton" onClick={handleUploadDocuments}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default ManageCMS;
