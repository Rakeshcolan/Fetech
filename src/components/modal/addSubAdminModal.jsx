import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CommonTextFields from "../common/Field/CommonTextFIelds";
import "../modal/modal.css";
import CancelIcon from "@mui/icons-material/Cancel";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addSubAmdinsApi } from "../../redux/action/adminAction";
import { useNavigate } from "react-router";
import CommonDropDown from "../common/Field/CommonDropDown";

export default function AddSubAdminModal(props) {
  const { openModal, setOpenModal } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      status: "",
      designation: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .required("FirstName is required")
        .matches(
          /^[a-zA-Z\s]+$/,
          "FirstName can only contain alphabet characters"
        ),

      last_name: Yup.string()
        .required("LastName is required")
        .matches(
          /^[a-zA-Z\s]+$/,
          "LastName can only contain alphabet characters"
        ),
      email_id: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),

      mobile_no: Yup.string()
        .matches(/^[0-9]{10}$/, "Invalid phone number") // Check for 10-digit numeric phone number
        .required("PhoneNumber is required"),

      status: Yup.string().required("Status is required"),

      designation: Yup.string().required("Designation is required"),
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
                Add Sub Admins
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
            <CommonTextFields
              label="LastName"
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
              label="PhoneNumber"
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
              options={[
                { value: "1", label: "Employer" },
                { value: "2", label: "Manager" },
                { value: "3", label: "Accountant" },
              ]}
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
