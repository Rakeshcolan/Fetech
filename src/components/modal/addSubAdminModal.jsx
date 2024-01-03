import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CommonTextFields from "../common/Field/CommonTextFIelds";
import "../modal/modal.css";
import CancelIcon from "@mui/icons-material/Cancel";

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
              <CancelIcon sx={{ cursor: "pointer", color: "red" }}  onClick={handleClose}  />
            </div>
          </div>
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
