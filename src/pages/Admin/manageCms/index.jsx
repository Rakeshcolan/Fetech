import CommonUpload from "../../../components/common/Field/CommonUpload";
import "./manageCmsStyle.css";
import "../../../styles/App.css";
import { useDispatch } from "react-redux";
import { addCMSApi } from "../../../redux/action/adminAction";
import { useState } from "react";
import { async } from "q";

const ManageCMS = () => {
  const dispatch = useDispatch();
  const [aboutUsFiles, setAboutUsFiles] = useState([]);
  const [termsAndConditionsFiles, setTermsAndConditionsFiles] = useState([]);

  const handleAboutUsFileChange = (e) => {
      setAboutUsFiles(e.target.files[0]);
    
  };

  const handleTermsAndConditionsFileChange = (e) => {
      setTermsAndConditionsFiles(e.target.files[0]);
    
  }


  const handleUploadDocuments = () => {
    try{
      const formData = new FormData();
      formData.append(`about`, aboutUsFiles);
      formData.append(`terms_condition`, termsAndConditionsFiles);
      //  aboutUsFiles.forEach((file, index) => {
      //   formData.append(`about`, file);
      // });
      //  termsAndConditionsFiles.forEach((file, index) => {
        
      // });
      dispatch(addCMSApi(formData));
    }
    catch(err){
      alert(err)
    }
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
              id={"about"}
            />
          </div>
          <div className="cmsupload">
            <p>Term And Condition</p>
            <CommonUpload
              label={"Upload Your Files"}
              onFileChange={handleTermsAndConditionsFileChange}
              id={"terms"}
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
