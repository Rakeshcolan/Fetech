import React from "react";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import CommonTextFields from "../common/Field/CommonTextFIelds";

const EditProfile = () => {
  const navigate = useNavigate();
  const handleRedirect = (test) => {
    console.log("test",test)
    navigate("/dashboard/subadmin");
  }
  return (
    <div>
      <h4>Edit Profile</h4>
      <div className="row">
        <div className="col-lg-6">
          <CommonTextFields label="UserName" id="UserName" />
        </div>
        <div className="col-lg-6">
          <CommonTextFields label="Email" id="Email" />
        </div>
        <div className="col-lg-6">
          <CommonTextFields label="PhoneNumber" id="PhoneNumber" />
        </div>
        <div className="col-lg-6">
          <CommonTextFields label="Address" id="Address" />
        </div>
        <div className="col-lg-6">
          <CommonTextFields label="Country" id="Country" />
        </div>
        <div className="col-lg-6">
          <CommonTextFields label="ZipCode" id="ZipCode" />
        </div>
      </div>
      <div className="contentCenter">
        <Button className="cancelBtn" onClick={handleRedirect}>
          Cancel
        </Button>
        <Button className="submitBtn">Save</Button>
      </div>
    </div>
  );
};

export default EditProfile;
