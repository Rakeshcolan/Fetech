import "./stripepayment.css";
import {
  AccountCardHead,
  AccountCardInputData,
  BankAccountCardData,
  GpayCardData,
} from "../../../utils/constants/cardItem";
import { useState } from "react";
import { AccountInputCard } from "../../../components/stripePaymentComp/accountInputCard";
import { useFormik } from "formik";

const AccountCard = (props) => {
    const [higlightcard,setHighlightCard]= useState('')
  const { showCard } = props;
  const changeCard = (value) => {
    showCard(value);
    setHighlightCard(value)
  };
  return (
    <>
      {AccountCardHead.map((carddetail) => {
        const { icon, label } = carddetail;
        return (
          <div
            className="accountcardcontainer"
            onClick={() => changeCard(label)}
            style={{borderColor:higlightcard === label?"#00E785":"inherit"}}
          >
            <img src={icon} id="cardimage" />
            <div>{label}</div>
          </div>
        );
      })}
    </>
  );
};

const StripePayment = () => {
  const [showcard, setShowcard] = useState("");


  // const formik = useFormik({
  //   enableReinitialize: true,
  //   initialValues: {
  //     firstname: editData?.first_name,
  //     email_id: editData?.email_id,
  //     lastname: editData?.last_name,
  //     designation: editData?.designation,
  //     status:editData?.status
  //   },
  //   // validationSchema: Yup.object({
  //   //   firstname: Yup.string().required("FirstName is required"),
  //   //   email_id: Yup.string().required("Email is required"),
  //   //   lastname: Yup.string().required("PhoneNumber is required"),
  //   //   designation: Yup.string().required("designation is required"),
  //   // }),
  //   onSubmit: (values) => {
  //     let val = {
  //       first_name: values.firstname,
  //       email_id: values.email_id,
  //       last_name: values.lastname,
  //       designation: values.designation,
  //       status:values.status
  //     };

  //   },
  // });


  



  const inputDetails = (method) => {
    switch (method) {
      case "Card":
        return <AccountInputCard cardInput={AccountCardInputData} buttonText={"Paynow"}/>;

      case "UPI":
        return <AccountInputCard cardInput={GpayCardData} buttonText={"verify"}/>;

      case "Bank Account":
        return <AccountInputCard cardInput={BankAccountCardData} buttonText={"Paynow"} />;

      default:
        return <AccountInputCard cardInput={AccountCardInputData} buttonText={"Paynow"}/>;
    }
  };
  return (
    <div className="stripecontainer">
      <h1 style={{ color: "#6772E5" }}>Stripe</h1>
      <p style={{ fontSize: "20px" }}>Payment Details</p>
      <div style={{width:"45%"}} className="stripepaymentcontainer">
        <div className="accountcard">
          <AccountCard showCard={setShowcard}  />
        </div>
        {inputDetails(showcard)}
      </div>
    </div>
  );
};

export default StripePayment;
