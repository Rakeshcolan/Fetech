import "./commonComp.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const PaymentCard = ({data}) => {
    const{value,name,checkList} =data;
  return (
    <>
      <div className="paymentcardcontainer">
        <div className="paymentcardpricing">
        <p>{name}</p>
        <p>{value}</p>

        </div>
        <div className="paymentcardchecklist">
            {checkList.map((name)=>(
          <div>
            <CheckBoxIcon sx={{ color: "#00E785" }} />
            <span>{name}</span>
          </div>

            ))}

        </div>
        <button className="paymentbutton" >Get Started</button>
      </div>
    </>
  );
};
export default PaymentCard;
