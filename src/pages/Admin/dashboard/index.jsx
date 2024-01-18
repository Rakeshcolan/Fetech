import { Divider } from "@mui/material";
import { useState } from "react";
import { BarChart } from "../../../components/chart/barChart";
import DashCard from "../../../components/common/card";
import CustomizedTables from "../../../components/common/commonTable";
import { dashboardTableData, dashboardTableHead, subAdminTableData, subAdminTableHead } from "../../../components/common/tableData";
import ResponseList from "../../../components/responseList";
import { CardItem } from "../../../utils/constants/cardItem";
import "./dashboardStyle.css";

const Dashboard = () => {

    const [size, setSize] = useState(0);
    const [page, setPage] = useState(5);
  
    const paginationRowsOptions = [5, 10, 20, 50, 100];
  
    const handlePerRowsChange = async (event) => {
      setPage(+event.target.value);
      setSize(0);
    };
  
    const handlePageChange = async (event, newPage) => {
      setPage(newPage);
    };
  
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
      <CustomizedTables
        columns={dashboardTableHead}
        rows={dashboardTableData}
        paginationStatus={true}
        rowsPerPageOptions={paginationRowsOptions}
        page={page}
        size={size}
        handleChangePage={handlePageChange}
        handleChangeRowsPerPage={handlePerRowsChange}
      />
    </div>
  );
};

export default Dashboard;
