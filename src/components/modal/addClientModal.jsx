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
import {
  addClientApi,
  getSubscriptionApi,
} from "../../redux/action/adminAction";
import { useNavigate } from "react-router-dom";
import CommonDropDown from "../common/Field/CommonDropDown";
import { adminSelector } from "../../redux/slice/adminSlice";
import { useEffect } from "react";

export default function AddClientModal(props) {
  const { openModal, setOpenModal } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getSubscriptionDetail, subscriptionDetail } =
    useSelector(adminSelector);
  console.log("getclientdetail", getSubscriptionDetail);

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    dispatch(getSubscriptionApi());
  }, [subscriptionDetail]);

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
      name: Yup.string()
        .required("Name is required")
        .matches(/^[a-zA-Z\s]+$/, "Name can only contain alphabet characters"),
      email_id: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
      mobile_no: Yup.string()
        .matches(/^[0-9]{10}$/, "Invalid phone number") // Check for 10-digit numeric phone number
        .required("PhoneNumber is required"),
      billing: Yup.string().required("Billing is required"),
      subscription_plan: Yup.string().required("subscription plan is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      let val = {
        name: values.name,
        email_id: values.email_id,
        mobile_no: values.mobile_no,
        billing: values.billing,
        subscription_plan: values.subscription_plan,
      };
      dispatch(addClientApi(val));
      resetForm();
      setOpenModal(false);
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
                Add Clients
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
            {/* <CommonTextFields
              label="Subscriptions Plan"
              id="subscription_plan"
              formik={formik}
              placeholder=""
            /> */}

            <CommonDropDown
              id="subscription_plan"
              label="Subscriptions Plan"
              formik={formik}
              options={getSubscriptionDetail}
            />
          </div>
          <br />
          <div>
            <CommonDropDown
              label="Billing"
              id="billing"
              formik={formik}
              options={getSubscriptionDetail}
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
