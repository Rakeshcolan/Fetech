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

export default function AddClientModal(props) {
  const { openModal, setOpenModal } = props;
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpenModal(false);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email_id: "",
      mobile_no: "",
      billing: "",
      subscription_plan: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("FirstName is required"),
      email_id: Yup.string().required("Email is required"),
      mobile_no: Yup.string().required("PhoneNumber is required"),
      billing: Yup.string().required("Billing is required"),
      subscription_plan: Yup.string().required("subscription plan is required"),
    }),
    onSubmit: (values) => {
      let val = {
        name: values.name,
        email_id: values.email_id,
        mobile_no: values.mobile_no,
        billing: values.billing,
        subscription_plan: values.subscription_plan,
      };
    //   dispatch(addSubAmdinsApi(val));
    },
  });

//   const handleSubadmins = () => {
//   };

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
              label="Username"
              id="name"
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
            <CommonTextFields
              label="Billing"
              id="billing"
              formik={formik}
              placeholder=""
            />
          </div>
          <br />
          <div>
            <CommonTextFields
              label="Subscriptions Plan"
              id="subscription_plan"
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
