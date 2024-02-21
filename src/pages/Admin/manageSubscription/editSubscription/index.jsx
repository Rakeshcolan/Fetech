import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import CommonTextFields from "../../../../components/common/Field/CommonTextFIelds";
import CommonSwitch from "../../../../components/common/switch/commonswitch";
import { editSubscriptionApi } from "../../../../redux/action/adminAction";
import { useDispatch } from "react-redux";

const EditSubscription = () => {
  const [editData, setEditData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRedirect = () => {
    navigate("/dashboard/subscription");
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
      plan: editData?.subscription_plan || "",
      subscription_amount: editData?.billing || "",
      description: editData?.description || "No Data Available",
      status: editData?.status || "",
    },
    // validationSchema: Yup.object({
    //   plan: Yup.string().required("plan is required"),
    //   subscription_amount: Yup.string().required(
    //     "subscription_amount is required"
    //   ),
    //   description: Yup.string().required("description is required"),
    //   status: Yup.string().required("status is required"),
    // }),
    onSubmit: (values) => {
      let val = {
        subscription_plan: values.plan,
        billing: values.subscription_amount,
        description: values.description,
        status: values.status[0] === "on" ? true : false,
      };
      dispatch(editSubscriptionApi(val, editData?.subscription_id));
      navigate("/dashboard/subscription");
    },
  });

  return (
    <div className="commonbox">
      <h4>Edit Subscription</h4>
      <br />
      <div className="row">
        <div className="col-lg-6">
          <CommonTextFields label="Tier" id="plan" formik={formik} />
          <br />
          <CommonTextFields
            label="Subscription Amount "
            id="subscription_amount"
            formik={formik}
          />
        </div>
        <div className="col-lg-6">
          <CommonTextFields
            label="Description"
            id="description"
            formik={formik}
          />
          <br />
          <CommonSwitch label="Status" id="status" formik={formik} />
        </div>
      </div>
      <br />
      <br />
      <div className="contentCenter">
        <Button className="cancelBtn" onClick={handleRedirect}>
          Cancel
        </Button>
        <Button className="submitBtn" onClick={formik.handleSubmit}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditSubscription;
