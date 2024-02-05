import CommonTextFields from "../../../components/common/Field/CommonTextFIelds";
import * as Yup from "yup";

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const EditSubAdmin = () => {
  const [editData, setEditData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleRedirect = () => {
    navigate("/dashboard/subadmin");
  };

  useEffect(() => {
    setEditData(location.state?.data);
    return () => {
      location.state = "";
      setEditData({});
    };
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: editData?.first_name,
      email_id: editData?.email_id,
      lastname: editData?.last_name,
      designation: editData?.designation,
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("FirstName is required"),
      email_id: Yup.string().required("Email is required"),
      lastname: Yup.string().required("PhoneNumber is required"),
      designation: Yup.string().required("designation is required"),
    }),
    onSubmit: (values) => {
      let val = {
        firstname: values.firstname,
        email_id: values.email_id,
        lastname: values.lastname,
        designation: values.designation,
      };

      navigate("/dashboard/subadmin");
    },
  });

  return (
    <div className="commonbox">
      <h4>Edit SubAdmin</h4>
      <br />
      <div className="row">
        <div className="col-lg-6">
          <CommonTextFields label="First Name" id="firstname" formik={formik} />
          <br />
          <CommonTextFields label="Email" id="email_id" formik={formik} />
        </div>
        <div className="col-lg-6">
          <CommonTextFields label="Last Name" id="lastname" formik={formik} />
          <br />
          <CommonTextFields
            label="Designation"
            id="designation"
            formik={formik}
          />
        </div>
      </div>
      <br />
      <br />
      <div className="contentCenter">
        <Button className="cancelBtn" onClick={handleRedirect}>
          Cancel
        </Button>
        <Button className="submitBtn">Save</Button>
      </div>
    </div>
  );
};

export default EditSubAdmin;
