import "./stripepayment.css";
import {
  AccountCardHead,
  AccountCardInputData,
  BankAccountCardData,
  bankAccountValidationSchema,
  cardValidationSchema,
  GpayCardData,
  upiValidationSchema,
} from "../../../utils/constants/cardItem";
import { useEffect, useState } from "react";
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

  const [formikConfig, setFormikConfig] = useState(null);

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


  
  const handleCardSubmit = (values) => {
    // Handle card submission
  };

  const handleUPISubmit = (values) => {
    // Handle UPI submission
  };

  const handleBankAccountSubmit = (values) => {
    // Handle bank account submission
  };

  const formik = useFormik(formikConfig || {
    enableReinitialize: true,
    initialValues: {},
    validationSchema: {},
    onSubmit: () => {},
  });

  useEffect(()=>{
    switch (showcard) {
      case "Card":
        setFormikConfig({
          enableReinitialize: true,
          initialValues: { cardNumber: "", expirationDate: "", cvv: "" ,country:""},
          validationSchema: cardValidationSchema,
          onSubmit: handleCardSubmit,
        });
        break

      case "UPI":
        setFormikConfig({
          enableReinitialize: true,
          initialValues: { upiId: "" },
          validationSchema: upiValidationSchema,
          onSubmit: handleUPISubmit,
        });
        break
      case "Bank Account":
        setFormikConfig({
          enableReinitialize: true,
          initialValues: { accountNumber: "" ,ifsc:""},
          validationSchema: bankAccountValidationSchema,
          onSubmit: handleUPISubmit,
        });
        break

      default:
        break
      
    }
  },[showcard])


  const inputDetails = (method) => {
    switch (method) {
      case "Card":
      
        return <AccountInputCard formik={formik} cardInput={AccountCardInputData} buttonText={"Paynow"}/>;

      case "UPI":
      
        return <AccountInputCard formik={formik}  cardInput={GpayCardData} buttonText={"verify"}/>;

      case "Bank Account":

        return <AccountInputCard  formik={formik} cardInput={BankAccountCardData} buttonText={"Paynow"} />;

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
        { inputDetails(showcard)}
      </div>
    </div>
  );
};

export default StripePayment;
