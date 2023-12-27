import { Divider } from "@mui/material";
import { BarChart } from "../../../components/chart/barChart";
import DashCard from "../../../components/common/card";
import ResponseList from "../../../components/responseList";
import { CardItem } from "../../../utils/constants/cardItem";
import "./dashboardStyle.css";

const Dashboard = () => {
  return (
    <div className="dashboardcontainer" >
      <DashCard cardItem={CardItem} />
      <div className="statistics">
        <div className="barContainer">
            <div >
                <p className="barheader">Activity</p>
                <p className="barheader">Total Statistics</p>
            </div>
            <Divider/>
          <BarChart />
        </div>
        <div>
            <ResponseList/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
