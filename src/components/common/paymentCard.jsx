import "./commonComp.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

const PaymentCard = ({ data }) => {
  const navigate = useNavigate();
  const { subscription_plan, billing, name,checkList, textvalue, description } = data;

  // console.log("textvalue", textvalue);

  const handlePayment = () => {
    sessionStorage.setItem('ur',0)
    navigate("/stripepayment");
  };

  return (
    <>
      {/* {textvalue ? (
        <div className="paymenttextcontainer">
          <div className="paymenttexthead">
            <p style={{ fontWeight: "800", fontSize: "28px" }}>{name}</p>
            <p>{textvalue}</p>
          </div>
          <div className="paymentextcontent">
            <div style={{ height: "80%", overflowY: "scroll" }}>
              {description}
            </div>
            <button className="paymentbutton" onClick={handlePayment}>
              Contact Us
            </button>
          </div>
        </div>
      ) : (
        <div className="paymentcardcontainer">
          <div className="paymentcardpricing">
            <p style={{ fontWeight: 600 }}> {subscription_plan}</p>
            <p>{textvalue ? textvalue : billing}</p>
          </div>
          <div className="paymentcardchecklist">
            {checkList?.map((name, i) => (
              <div key={i}>
                <CheckBoxIcon sx={{ color: "#00E785" }} />
                <span>{name}</span>
              </div>
            ))}
          </div>
          <button className="paymentbutton" onClick={handlePayment}>
            Get Started
          </button>
        </div>
      )} */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {textvalue ? (
            <div className="paymenttextcontainer">
              <div className="paymenttexthead">
                <p style={{ fontWeight: "800", fontSize: "28px" }}>{name}</p>
                <p>{textvalue}</p>
              </div>
              <div className="paymentextcontent">
                <div style={{ height: "80%", overflowY: "scroll" }}>
                  {description}
                </div>
                <button className="paymentbutton" onClick={handlePayment}>
                  Contact Us
                </button>
              </div>
            </div>
          ) : (
            <div className="paymentcardcontainer">
              <div className="paymentcardpricing">
                <p style={{ fontWeight: 600 }}> {name}</p>
                <p>{textvalue ? textvalue : value}</p>
              </div>
              <div className="paymentcardchecklist">
                {checkList?.map((name, i) => (
                  <div key={i}>
                    <CheckBoxIcon sx={{ color: "#00E785" }} />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
              <button className="paymentbutton" onClick={handlePayment}>
                Get Started
              </button>
            </div>
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default PaymentCard;
