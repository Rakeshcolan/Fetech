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
import { showToast } from "../../../components/commonToast/toastService";
import { useEffect, useState } from "react";
import { AccountInputCard } from "../../../components/stripePaymentComp/accountInputCard";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const AccountCard = (props) => {
  const [higlightcard, setHighlightCard] = useState("");
  const { showCard } = props;
  const changeCard = (value) => {
    showCard(value);
    setHighlightCard(value);
  };
  return (
    <>
      {AccountCardHead.map((carddetail) => {
        const { icon, label } = carddetail;
        return (
          <div
            className="accountcardcontainer"
            onClick={() => changeCard(label)}
            style={{
              borderColor: higlightcard === label ? "#00E785" : "inherit",
            }}
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
  const navigate = useNavigate();
  const [formikConfig, setFormikConfig] = useState(null);
  const [checknum, setChecknum] = useState({
    cardNumber: "",
    expirationDate: "",
    ccv: "",
    upiId: "",
    accountNumber: "",
    ifsc: "",
  });
  const [indexvalue, setIndexvalue] = useState(0);
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
  const handleChange = (e) => {
    // formik.handleChange(e);
    checkCardFormat(e);
  };

  const checkCardFormat = (e) => {
    let { value, name } = e.target;
    if (name === "cardNumber") {
      value = value.replace(/[^0-9 @ / .]/, "");
      let checkvalue = value?.split(" ");
      if (checknum?.cardNumber.length < value.length) {
        if (checknum?.cardNumber.length > 19) return;
        if (checkvalue[indexvalue].length === 4) {
          setChecknum({ ...checknum, [name]: value + " " });
          setIndexvalue(indexvalue + 1);
        } else {
          if (checkvalue[indexvalue].length < 4)
            setChecknum({ ...checknum, [name]: value });
          else {
            setChecknum({
              ...checknum,
              [name]: checknum.cardNumber  + " ",
            });
            // setChecknum((prevstate) => prevstate + " " + value[value.length - 1]);
            setIndexvalue(indexvalue + 1);
          }
        }
      } else {
        setIndexvalue(checkvalue.length - 1);
        setChecknum({ ...checknum, [name]: value });
      }
    } else if (name === "expirationDate") {
      value = value.replace(/[^0-9 /]/, "");
      if (value.length > 5) return;
      // setChecknum({...checknum,[name]:value})
      if (checknum.expirationDate.length < value.length) {
        if (value.length === 2) {
          setChecknum({ ...checknum, [name]: value + "/" });
        } else {
          setChecknum({ ...checknum, [name]: value });
        }
      } else {
        setChecknum({ ...checknum, [name]: value });
      }
    } else if (name === "ccv") {
      value = value.replace(/[^0-9]/, "");
      if (value.length > 3) return;
      setChecknum({ ...checknum, [name]: value });
    } else {
      value = value.replace(/[^0-9 @ / .]/, "");
      setChecknum({ ...checknum, [name]: value });
    }
  };

  const handleRoutes = () => {
    showToast("Payment Sucess", "sucess");
    navigate("/");
  };

  const handleCardSubmit = (values) => {
    // Handle card submission
    handleRoutes();
  };

  const handleUPISubmit = (values) => {
    // Handle UPI submission
    handleRoutes();
  };

  const handleBankAccountSubmit = (values) => {
    // Handle bank account submission
    handleRoutes();
  };

  const formik = useFormik(
    formikConfig || {
      enableReinitialize: true,
      initialValues: {},
      validationSchema: {},
      onSubmit: () => {},
    }
  );

  useEffect(() => {
    const { cardNumber, ccv, expirationDate, upiId, accountNumber, ifsc } =
      checknum;

    switch (showcard) {
      case "Card":
        setFormikConfig({
          enableReinitialize: true,
          initialValues: {
            cardNumber: cardNumber,
            expirationDate: expirationDate,
            ccv: ccv,
            country: "",
          },

          validationSchema: cardValidationSchema,

          onSubmit: handleCardSubmit,
        });
        break;

      case "UPI":
        setFormikConfig({
          enableReinitialize: true,
          initialValues: { upiId: upiId },
          validationSchema: upiValidationSchema,
          onSubmit: handleUPISubmit,
        });
        break;
      case "Bank Account":
        setFormikConfig({
          enableReinitialize: true,
          initialValues: { accountNumber: accountNumber, ifsc: ifsc },
          validationSchema: bankAccountValidationSchema,
          onSubmit: handleUPISubmit,
        });
        break;

      default:
        setFormikConfig({
          enableReinitialize: true,
          initialValues: {
            cardNumber: cardNumber,
            expirationDate: expirationDate,
            ccv: ccv,
            country: "",
          },

          validationSchema: cardValidationSchema,

          onSubmit: handleCardSubmit,
        });
        break;
    }
  }, [showcard, checknum]);

  const inputDetails = (method) => {
    switch (method) {
      case "Card":
        return (
          <AccountInputCard
            formik={formik}
            cardInput={AccountCardInputData}
            onchange={handleChange}
            buttonText={"Paynow"}
            method={"card"}
          />
        );

      case "UPI":
        return (
          <AccountInputCard
            formik={formik}
            cardInput={GpayCardData}
            onchange={handleChange}
            buttonText={"verify"}
            method={"upi"}
          />
        );

      case "Bank Account":
        return (
          <AccountInputCard
            formik={formik}
            cardInput={BankAccountCardData}
            onchange={handleChange}
            buttonText={"Paynow"}
            method={"bankaccount"}
          />
        );

      default:
        return (
          <AccountInputCard
            formik={formik}
            cardInput={AccountCardInputData}
            onchange={handleChange}
            buttonText={"Paynow"}
            method={"card"}
          />
        );
    }
  };
  return (
    <div className="stripecontainer">
      <h1 style={{ color: "#6772E5" }}>Stripe</h1>
      <p style={{ fontSize: "20px" }}>Payment Details</p>
      <div style={{ width: "45%" }} className="stripepaymentcontainer">
        <div className="accountcard">
          <AccountCard showCard={setShowcard} />
        </div>
        {inputDetails(showcard)}
      </div>
    </div>
  );
};

export default StripePayment;
