import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaymentCard from "../../components/common/paymentCard";
import { getSubscriptionApi } from "../../redux/action/adminAction";
import { adminSelector } from "../../redux/slice/adminSlice";
import { SubscriptionData } from "../../utils/constants/cardItem";
import "./payment.Style.css";
function Switch() {
  const [switchvalue, setSwitchValue] = useState(false);
  
  const handleSwitch = () => {
    setSwitchValue(!switchvalue);
  };
  return (
    <div className="swichlayout">
      <span
        className="switchchild"
        onClick={handleSwitch}
        style={{ background: switchvalue ? "#00E785" : "" }}
      >
        Monthly
      </span>
      <span
        className="switchchild"
        onClick={handleSwitch}
        style={{ background: switchvalue ? "" : "#00E785" }}
      >
        Yearly
      </span>
    </div>
  );
}



const Payment = () => {
  const {getSubscriptionDetail} = useSelector(adminSelector);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getSubscriptionApi())
  },[])

  return (
    <>
      {/* <h1>Payments</h1> */}
      <div className="paymentcontainer">
        <span>
          <h1 style={{ color: "white" }}>Subscription Plans</h1>
          <p style={{ color: "white" }}>
            {" "}
            choose the Subscription plan that suits your needs
          </p>
        </span>
        <Switch />
        <div
          style={{
            display: "flex",
            // justifyContent: "space-around ",
            // width: "100%",
          }}
        >
          {SubscriptionData.map((subscription,i) => (
            <PaymentCard key={i} data={subscription} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Payment;
