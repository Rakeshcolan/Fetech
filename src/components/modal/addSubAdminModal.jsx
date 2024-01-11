import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CommonTextFields from "../common/Field/CommonTextFIelds";
import "../modal/modal.css";
import CancelIcon from "@mui/icons-material/Cancel";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function AddSubAdminModal(props) {
  const { openModal, setOpenModal } = props;
  const handleClose = () => {
    setOpenModal(false);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: "",
      last_name: "",
      email_id: "",
      mobile_no: "",
      designation: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("FirstName is required"),
      last_name: Yup.string().required("LastName is required"),
      email_id: Yup.string().required("Email is required"),
      mobile_no: Yup.string().required("PhoneNumber is required"),
      designation: Yup.string().required("Designation is required"),
    }),
    onSubmit: (values) => {
      let val = {
        first_name: values.first_name,
        last_name: values.last_name,
        email_id: values.email_id,
        mobile_no: values.mobile_no,
        designation: values.designation,
      };
    },
  });

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
                Add Sub Clients
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
              label="FirstName"
              id="first_name"
              formik={formik}
              placeholder=""
            />
          </div>
          <br />
          <div>
            <CommonTextFields label="LastName" id="last_name" formik={formik} placeholder="" />
          </div>
          <br />
          <div>
            <CommonTextFields label="Email" id="email_id" formik={formik} placeholder="" />
          </div>
          <br />
          <div>
            <CommonTextFields
              label="PhoneNumber"
              id="mobile_no"
              formik={formik}
              placeholder=""
            />
          </div>
          <br />
          <div>
            <CommonTextFields
              label="Designation"
              id="designation"
              formik={formik}
              placeholder=""
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
