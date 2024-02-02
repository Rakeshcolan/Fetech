import "./commonComp.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useNavigate } from "react-router-dom";

const PaymentCard = ({ data }) => {
  const navigate = useNavigate();
  const { value, name, checkList } = data;

  const handlePayment = ()=>{
    navigate('/stripepayment')
  }
  return (
    <>
      <div className="paymentcardcontainer">
        <div className="paymentcardpricing">
          <p>{name}</p>
          <p>{value}</p>
        </div>
        <div className="paymentcardchecklist">
          {checkList.map((name, i) => (
            <div key={i}>
              <CheckBoxIcon sx={{ color: "#00E785" }} />
              <span>{name}</span>
            </div>
          ))}
        </div>
        <button className="paymentbutton" onClick={handlePayment}>Get Started</button>
      </div>
    </>
  );
};
export default PaymentCard;
