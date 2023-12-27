import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./commonComp.css";
import eye from "../../assests/images/eye.png";

export default function DashCard({ cardItem }) {
  return (
    <>
      <div className="cardcontainer">
        {cardItem.map((cards, i) => {
          const { value, icon, name } = cards;
          return (
            <Card key={i} className="card">
              <CardContent className="uppercontent">
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  className="cardText"
                >
                  {name}
                </Typography>
                <img src={icon} width="50" height="50" />
              </CardContent>
              <CardContent sx={{ padding: "0px 8px" }}>
                <Typography sx={{ fontSize: "44px", padding: "0px" }}>
                  {value}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
