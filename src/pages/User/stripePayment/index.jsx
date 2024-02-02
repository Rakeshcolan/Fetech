import "./stripepayment.css";
import {
  AccountCardHead,
  AccountCardInputData,
  BankAccountCardData,
  GpayCardData,
} from "../../../utils/constants/cardItem";
import { useState } from "react";
import { AccountInputCard } from "../../../components/stripePaymentComp/accountInputCard";

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
