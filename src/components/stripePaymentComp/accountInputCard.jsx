import { useFormikContext } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cards from "../../assests/images/creditCardBrands .png";
import AddButton from "../common/Button/addButton";
import "./stripepaymentcomp.css";

export const AccountInputCard = (props) => {
  const { cardInput, buttonText,formik } = props;
console.log("formik",formik);
  const [checknum, setChecknum] = useState("");
  const [indexvalue, setIndexvalue] = useState(0);
  const navigate = useNavigate();
  const handleStripepay = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    let { value } = e.target;
   value = checkCardFormat(value)
   console.log("this changessss");
   
  };

  const checkCardFormat = (value)=>{
    // let {value} = e.target
    let checkvalue = value?.split(" ");
    if (checknum.length < value.length) {
      if (checknum.length > 19) return;
      if (checkvalue[indexvalue].length === 4) {
        setChecknum(value + " ");
       
        setIndexvalue(indexvalue + 1);
      } else {
        if (checkvalue[indexvalue].length < 4) setChecknum(value);
        else {
          setChecknum((prevstate) => prevstate + " " + value[value.length - 1]);
          setIndexvalue(indexvalue + 1);
        }
      }
    } else {
      setIndexvalue(checkvalue.length - 1);
      setChecknum(value);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-between",
        padding: "5px",
        alignItems: "center",
      }}
    
    >
      {cardInput.map((inputdata) => {
        const { label, includeImg, fullwidth, placeholderText,id } = inputdata;
        return (
          <div style={{ width: fullwidth == "true" ? "100%" : "40%" }}>
            <label>{label}</label>
            <div className="cardinputimage">
              <input
                value={formik?.values[id]}
                className="carddatainput"
                onChange={(e) => handleChange(e)}
                placeholder={placeholderText}
                style={{ width: "100%" }}
              />
              <br/>
              <div style={{ color: "red", margin: "0px" }}>
                {formik?.touched[id] && formik?.errors[id]
                  ? formik?.touched[id] && formik?.errors[id]
                  : " "}
              </div>
              {includeImg == "true" && (
                <img
                  width="170"
                  height="20"
                  style={{
                    position: "absolute",
                    right: "0px",
                    objectFit: "contain",
                    top:"18px"
                  }}
                  src={cards}
                />
              )}
            </div>
          </div>
        );
      })}
      <div className="cardpaybutton">
        <AddButton buttonText={buttonText} handleClick={formik?.handleSubmit} />
      </div>
    </div>
  );
};
