import { useNavigate } from "react-router-dom";
import cards from "../../assests/images/creditCardBrands .png";
import AddButton from "../common/Button/addButton";
import "./stripepaymentcomp.css";

export const AccountInputCard = ({ cardInput ,buttonText}) => {
  const navigate = useNavigate()
  const handleStripepay = ()=>{
    navigate('/')
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-between",
        padding: "5px",
        alignItems:"center"
    }}
    >
      {cardInput.map((inputdata) => {
        const { label, includeImg, fullwidth, placeholderText } = inputdata;
        return (
          <div style={{ width: fullwidth == "true" ? "100%" : "40%" }}>
            <label>{label}</label>
            <div className="cardinputimage">
              <input
                className="carddatainput"
                placeholder={placeholderText}
                style={{ width: "100%" }}
              />
              {includeImg == "true" && (
                <img
                  width="170"
                  height="20"
                  style={{
                    position: "absolute",
                    right: "0px",
                    objectFit: "contain",
                  }}
                  src={cards}
                />
              )}
            </div>

          </div>
        );
      })}
    <div className="cardpaybutton">

      <AddButton buttonText={buttonText} handleClick={handleStripepay}/>
    </div>
     
    </div>
  );
};
