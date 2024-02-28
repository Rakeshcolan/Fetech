import CommonTextFields from "../../../components/common/Field/CommonTextFIelds";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import CommonSwitch from "../../../components/common/switch/commonswitch";
import { editSubAdminApi } from "../../../redux/action/adminAction";
import { useDispatch } from "react-redux";
import CommonDropDown from "../../../components/common/Field/CommonDropDown";
import { findDesignation } from "../../../utils/findids/designationutils";

const EditSubAdmin = () => {
  const [editData, setEditData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleRedirect = () => {
    navigate("/dashboard/subadmin");
  };
  const dispatch = useDispatch();


  useEffect(() => {
    setEditData(location.state?.data);
    return () => {
      location.state = "";
      setEditData({});
    };
  }, []);

let designationObj={
  1:"Employee",
  2:"Manager",
  3:"Accountant"
}

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: editData?.first_name,
      email_id: editData?.email_id,
      lastname: editData?.last_name,
      designation:editData?.designation,
      status:  editData?.status === 1
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("FirstName is required"),
      email_id: Yup.string().required("Email is required"),
      lastname: Yup.string().required("PhoneNumber is required"),
      designation: Yup.string().required("designation is required"),
      
    }),
    onSubmit: (values) => {
      let val = {
        first_name: values.firstname,
        email_id: values.email_id,
        last_name: values.lastname,
        designation: values.designation,
        status:values.status ? 1:2  
      };
      let EditedValue = {...editData,...val}
      dispatch(editSubAdminApi(editData?.id,EditedValue))
      navigate("/dashboard/subadmin");
    },
  });

  return (
    <div className="commonbox">
      <h4>Edit Sub Admin</h4>
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
          <CommonDropDown
              id="designation"
              label="Designation"
              placeholder="Select an Designation"
              formik={formik}
              // options={designationData}
              defaultValue ={ editData?.designation}
              options={[
                { value: 3, label: "Accountant" },
                { value: 2, label: "Manager" },
                { value: 1, label: "Employee" },
              ]}
            />
        </div>
        
        <div className="col-lg-6" style={{justifyContent:"space-between"}}>
          <br/>
          <CommonSwitch label="Status" id="status" formik={formik}/>
        </div>
      </div>
      <br />
      <br />
      <div className="contentCenter">
        <Button className="cancelBtn" onClick={handleRedirect}>
          Cancel
        </Button>
        <Button className="submitBtn" onClick={formik.handleSubmit}>Save</Button>
      </div>
    </div>
  );
};

export default EditSubAdmin;
