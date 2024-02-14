import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CommonTextFields from "../common/Field/CommonTextFIelds";
import "../modal/modal.css";
import CancelIcon from "@mui/icons-material/Cancel";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addSubAmdinsApi, getRolesApi } from "../../redux/action/adminAction";
import CommonDropDown from "../common/Field/CommonDropDown";
import { adminSelector } from "../../redux/slice/adminSlice";
import { useEffect } from "react";

export default function AddSubAdminModal(props) {
  const { openModal, setOpenModal } = props;
  const dispatch = useDispatch();
  const {designationData} = useSelector(adminSelector)
  const handleClose = () => {
    setOpenModal(false);
    formik.resetForm();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: "",
      last_name: "",
      email_id: "",
      mobile_no: "",
      status: "",
      designation: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .required("First Name Is Required")
        .matches(
          /^[a-zA-Z\s]+$/,
          "FirstName Can Only Contain Alphabet Characters"
        ),
      last_name: Yup.string()
        .required("Last Name is required")
        .matches(
          /^[a-zA-Z\s]+$/,
          "LastName Can Only Contain Alphabet Characters"
        ),
      email_id: Yup.string()
        .required("Email Is Required")
        .email("Invalid Email Format"),
      mobile_no: Yup.string()
        .matches(/^[0-9]{10}$/, "Invalid Phone Number") // Check for 10-digit numeric phone number
        .required("Phone Number Is Required"),
      status: Yup.string().required("Status Is Required"),
      designation: Yup.string().required("Designation Is Required"),
    }),
    onSubmit: (values) => {
      let val = {
        first_name: values.first_name,
        last_name: values.last_name,
        email_id: values.email_id,
        mobile_no: values.mobile_no,
        status: values.status,
        designation: values.designation,
      };
      dispatch(addSubAmdinsApi(val));
      handleClose();
      formik.resetForm();
    },
  });

  useEffect(()=>{
    dispatch(getRolesApi())
  },[])

  return (
    <React.Fragment>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="dialogPad">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <DialogTitle
                id="alert-dialog-title"
                sx={{ paddingLeft: "0px !important" }}
              >
                Add Sub Admin
              </DialogTitle>
            </div>
            <div>
              <CancelIcon
                sx={{ cursor: "pointer", color: "red" }}
                onClick={handleClose}
              />
            </div>
          </div>
          <div>
            <CommonTextFields
              label="First Name"
              id="first_name"
              formik={formik}
              placeholder=""
            />
          </div>
          <br />
          <div>
            <CommonTextFields
              label="Last Name"
              id="last_name"
              formik={formik}
              placeholder=""
            />
          </div>
          <br />
          <div>
            <CommonTextFields
              label="Email"
              id="email_id"
              formik={formik}
              placeholder=""
            />
          </div>
          <br />
          <div>
            <CommonTextFields
              label="Phone Number"
              id="mobile_no"
              formik={formik}
              placeholder=""
            />
          </div>
          <br />
          <div>
            <CommonDropDown
              id="status"
              label="Status"
              placeholder="Select an status"
              formik={formik}
              options={[
                { value: "True", label: "Active" },
                { value: "False", label: "InActive" },
              ]}
            />
          </div>
          <br />
          <div>
            <CommonDropDown
              id="designation"
              label="Designation"
              placeholder="Select an Designation"
              formik={formik}
              options={designationData}
            />
          </div>
          <br />
          <div className="contentCenter">
            <Button className="submitBtn" onClick={formik.handleSubmit}>
              Save
            </Button>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
