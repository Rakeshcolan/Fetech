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
import {  subscriptionApi } from "../../redux/action/adminAction";

export default function AddSubscriptionModal(props) {
  const { openModal, setOpenModal } = props;
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpenModal(false);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      plan: "",
      subscription_amount: "",
      description: "",
      status: "",
    },
    validationSchema: Yup.object({
      plan: Yup.string().required("Plan is required"),
      subscription_amount: Yup.string().required(
        "subscription amount is required"
      ),
      description: Yup.string().required("Description is required"),
      status: Yup.string().required("status plan is required"),
    }),
    onSubmit: (values) => {
      let val = {
        plan: values.plan,
        subscription_amount: values.subscription_amount,
        description: values.description,
        status: values.status,
      };
      dispatch(subscriptionApi(val));
      setOpenModal(false);
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
                Add Subscription
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
              label="Title"
              id="plan"
              formik={formik}
              placeholder=""
            />
          </div>
          <br />
          <div>
            <CommonTextFields
              label="subscription Amount"
              id="subscription_amount"
              formik={formik}
              placeholder=""
            />
          </div>
          <br />
          <div>
            <CommonTextFields
              label="Description"
              id="description"
              formik={formik}
              placeholder=""
            />
          </div>
          <br />
          <div>
            <CommonTextFields
              label="Status"
              id="status"
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
