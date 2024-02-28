import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import CommonTextFields from "../../../components/common/Field/CommonTextFIelds";
import CommonUpload from "../../../components/common/Field/CommonUpload";
import CustomizedTables from "../../../components/common/commonTable";
import {
  manageDataTableData,
  manageDataTableHead,
} from "../../../components/common/tableData";
import DynamicField from "../../../components/common/Field/DynamicField";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addManageDataApi } from "../../../redux/action/adminAction";
import {
  getManualUploadDataApi,
  manualUploadDataApi,
  manualUploadFileApi,
} from "../../../redux/action/userAction";
import { userSelector } from "../../../redux/slice/userSlice";

const ManageData = () => {
  const { getTableData,manualUpload,fileData } = useSelector(userSelector);

  const [size, setSize] = useState(0);
  const [page, setPage] = useState(5);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  const paginationRowsOptions = [5, 10, 20, 50, 100];

  const handlePerRowsChange = async (event) => {
    setPage(+event.target.value);
    setSize(0);
  };

  const handlePageChange = async (event, newPage) => {
    setPage(newPage);
  };
  const storedUId = sessionStorage.getItem("UId");
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: "",
      last_name: "",
      email_id: "",
      mobile_no: "",
      product_name: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First Name is required"),
      last_name: Yup.string().required("Last Name is required"),
      email_id: Yup.string().required("Email is required"),
      mobile_no: Yup.string().required("Mobile Number is required"),
      product_name: Yup.string().required("Product Name is required"),
    }),
    onSubmit: (values) => {
      let val = {
        first_name: values.first_name,
        last_name: values.last_name,
        email_id: values.email_id,
        mobile_no: values.mobile_no,
        product_name: values.product_name,
        client_id: storedUId,
      };
      dispatch(manualUploadDataApi(val));
      formik.resetForm();
      // navigate("/dashboard/subadmin");
    },
  });

  useEffect(() => {
    dispatch(getManualUploadDataApi(storedUId));
  }, [getTableData?.data?.id,manualUpload,fileData]); // getTableData?.data?.id

  const onFileChange = (e) => {
    try {
      const files = e.target.files;

      if (files.length > 0) {
        const selectedFileName = files[0].name;

        setSelectedFile(selectedFileName);

        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("client_id", storedUId);

        dispatch(manualUploadFileApi(formData));
      }
    } catch (error) {
      console.error("Error in onFileChange:", error);
    }
  };
  return (
    <div className="commonbox">
      <h4>Upload Data</h4>
      <div className="row">
        <div className="col-lg-3">
          <input
            type="file"
            className="custom-file-input mt-4"
            name="file"
            defaultValue={selectedFile}
            onChange={(e) => onFileChange(e)}
          />
          <label className="custom-file-label">Choose files</label>
        </div>
      </div>
      <br />
      <div className="contentEnd">
        <h4>Manual Upload Data</h4>
        <Button className="addBtn" onClick={formik.handleSubmit}>
          +Add
        </Button>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <CommonTextFields
            label="First Name"
            id="first_name"
            formik={formik}
          />
          <br />
          <CommonTextFields
            label="Phone Number"
            id="mobile_no"
            formik={formik}
          />
          <br />
          <CommonTextFields
            label="Product Name"
            id="product_name"
            formik={formik}
          />
        </div>
        <div className="col-lg-6">
          <CommonTextFields label="Last Name" id="last_name" formik={formik} />
          <br />
          <CommonTextFields label="Email" id="email_id" formik={formik} />
          <br />
          <DynamicField />
        </div>
      </div>
      <br />
      <div>
        <CustomizedTables
          columns={manageDataTableHead}
          rows={getTableData}
          paginationStatus={true}
          rowsPerPageOptions={paginationRowsOptions}
          // dataLoading = {adminDataLoading}
          page={page}
          size={size}
          handleChangePage={handlePageChange}
          handleChangeRowsPerPage={handlePerRowsChange}
        />
      </div>
      {/* <div className="contentCenter">
        <Button className="submitBtn">Submit</Button>
      </div> */}
    </div>
  );
};

export default ManageData;
