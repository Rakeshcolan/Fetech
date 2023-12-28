import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CommonTextFields from "../common/Field/CommonTextFIelds";
import "../modal/modal.css";

export default function AddSubAdminModal(props) {
  const { openModal, setOpenModal } = props;
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="dialogPad">
          <DialogTitle id="alert-dialog-title">Add Sub Clients</DialogTitle>
          <div>
            <CommonTextFields label="username" id="username" />
          </div>
          <br />
          <div>
            <CommonTextFields label="Email" id="Email" />
          </div>
          <br />
          <div>
            <CommonTextFields label="PhoneNumber" id="PhoneNumber" />
          </div>
          <br />
          <div>
            <CommonTextFields label="Designation" id="Designation" />
          </div>
          <br />
          <div className="contentCenter">
            <Button className="submitBtn">Save</Button>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
