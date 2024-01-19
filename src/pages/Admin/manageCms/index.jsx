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

  const handleAboutUsFileChange = (file) => {
    const files = file;
    if (files && files.length > 0) {
      setAboutUsFiles(Array.from(files));
    }
  };

  const handleTermsAndConditionsFileChange = (file) => {
    console.log("filessssssssssss",file);
    const files =file;
    if (files && files.length > 0) {
      setTermsAndConditionsFiles(Array.from(files));
    }
  };


  const handleUploadDocuments = () => {
    console.log("termscondition",termsAndConditionsFiles);
    try{
      const formData = new FormData();
      formData.append(`about`, aboutUsFiles[0]);
      formData.append(`terms_condition`, termsAndConditionsFiles[0]);
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
