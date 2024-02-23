import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Checkbox, TablePagination } from "@mui/material";
import { Fragment } from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import "./commonComp.css";
import { useLocation, useNavigate } from "react-router";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#030028",
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(even)": {
//     backgroundColor: "#C4CDD5",
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },

//   "&:.css-1affrt6-MuiTableCell-root.MuiTableCell-body": {
//     width: "50px !important",
//   },
//   "&: ..css-1h7km8s": {
//     maxWidth: "50px !important",
//   },
// }));

// let roleObj = {
//   1: "Employee",
//   2: "Manager",
//   3: "Accountant",
// };

// function CustomizedTables(props) {
//   //Moved pagination to the component up to avoid reusing. if needed we can send it in props in future. Moved the state up
//   const [size, setSize] = useState(0);
//   const [page, setPage] = useState(5);
//   const paginationRowsOptions = [5, 10, 20, 50, 100];

//   // const { getallSubAdminDetail, subAdminDetail } = useSelector(adminSelector);
//   const handlePerRowsChange = async (event) => {
//     setPage(+event.target.value);
//     setSize(0);
//   };

//   const handlePageChange = async (event, newPage) => {
//     setSize(newPage);
//   };

//   const {
//     rows = [],
//     columns,
//     onDelete,
//     navigatepath,
//     dataLoading = false,
//     paginationStatus,
//     handleChange,
//   } = props;

//   const navigate = useNavigate();
//   const location = useLocation();

//   let pathname = location.pathname.split("/")[2];

//   const prevCountRef = React.useRef();

//   React.useEffect(() => {
//     prevCountRef.current = rows;
//   }, []);

//   const startIndex = size * page + 1;
//   const endIndex = Math.min((size + 1) * page, rows?.length);
//   const totalEntries = rows?.length;

//   const handleEdit = (data) => {
//     if (navigatepath) {
//       let id = data.chatbot_id;
//       navigate(`/dashboard/${navigatepath}`, {
//         state: { action: "Edit", arrayIndex: id, data },
//       });
//     } else {
//       navigate(`/dashboard/edit${pathname}`, { state: { data } });
//     }
//   };

//   const renderedRows = [...Array(columns.length)].map((e, i) => (
//     <div>
//       <div className="skeleton"></div>
//       <div className="skeleton"></div>
//       <div className="skeleton"></div>
//     </div>
//   ));
//   return (
//     <Paper elevation={0}>
//       <TableContainer component={Paper}>
//         <Table aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, i) => (
//                 <StyledTableCell
//                   sx={{ textAlign: "center", margin: "auto" }}
//                   key={i}
//                   align={column.align}
//                 >
//                   {" "}
//                   {column.label}
//                 </StyledTableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           {/* ## table has empty data ## */}
//           {rows == "" ||
//           rows == undefined ||
//           rows == null ||
//           rows?.content?.length === 0 ? (
//             <TableBody>
//               <TableRow>
//                 <TableCell colSpan={columns?.length}>
//                   {dataLoading ? (
//                     <div>
//                       {Array.from(Array(3).keys()).map((val, i) => (
//                         <div
//                           key={i}
//                           style={{ margin: "2px" }}
//                           className="skeleton"
//                         ></div>
//                       ))}
//                     </div>
//                   ) : (
//                     " There are no records to display"
//                   )}
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           ) : (
//             <TableBody>
//               {rows?.slice(size * page, size * page + page).map((row, i) => {
//                 return (
//                   <StyledTableRow hover role="checkbox" tabIndex={-1} key={i}>
//                     {columns?.map((column) => {
//                       const value =
//                         column.id === "id" ||
//                         column.id === "Action" ||
//                         column.id === "status" ||
//                         column.id === "View" ||
//                         column.id === "designation" ||
//                         column.id === "Delete" ||
//                         column.id === "Edit" ||
//                         column.id === "plan"
//                           ? column.id
//                           : row[column.id];

//                       return (
//                         <Fragment key={column.id}>
//                           <StyledTableCell
//                             className="tablecontainer"
//                             sx={{ textAlign: "center", margin: "auto" }}
//                           >
//                             {value === "Action" ? (
//                               <>
//                                 <DriveFileRenameOutlineIcon
//                                   onClick={() => handleEdit(row)}
//                                   className="edit-icon"
//                                 />
//                                 <DeleteIcon
//                                   className="edit-icon"
//                                   onClick={() => onDelete(row.id)}
//                                 />
//                               </>
//                             ) : value === "plan" ? (
//                               <div className="planbutton">
//                               Tier {row[value]}
//                               </div>
//                             ) : value === "status" ? (
//                               <Button
//                                 className="activeBtn"
//                                 sx={{
//                                   backgroundColor:
//                                     row[column.id] === 1
//                                       ? "#00E785"
//                                       : "#FF3939",
//                                   color: row[column.id] ? "black" : "white",
//                                   fontSize: "12px",
//                                   width: "80px",
//                                   "&:hover": {
//                                     backgroundColor:
//                                       row[column.id] === false
//                                         ? "#FF3939 !important"
//                                         : "#00e785 !important",
//                                   },
//                                 }}
//                               >
//                                 {row[column.id] === 1 ? "Active" : "InActive"}
//                               </Button>
//                             ) : value === "View" ||
//                               value === "Delete" ||
//                               value === "Edit" ? (
//                               <Checkbox
//                                 name={value}
//                                 onChange={(e) => handleChange(e, row)}
//                               />
//                             ) : value === "designation" ? (
//                               roleObj[row["designation"]]
//                             ) : value === "id" ? (
//                               i + 1
//                             ) : (
//                               value
//                             )}
//                           </StyledTableCell>
//                         </Fragment>
//                       );
//                     })}
//                   </StyledTableRow>
//                 );
//               })}
//             </TableBody>
//           )}
//         </Table>
//       </TableContainer>
//       {/* ## For Pagination ## */}
//       {paginationStatus && (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//           className="pagination-info"
//         >
//           <div>
//             <p style={{ paddingTop: "10px", fontSize: "14px" }}>
//               Showing {startIndex} to {endIndex} of {totalEntries} entries
//             </p>
//           </div>

//           <TablePagination
//             rowsPerPageOptions={paginationRowsOptions}
//             component="div"
//             count={rows?.length || 0}
//             rowsPerPage={page}
//             page={size}
//             onPageChange={handlePageChange}
//             onRowsPerPageChange={handlePerRowsChange}
//             className="pagination-text"
//             style={{ padding: "0px !important", margin: "0px !important" }}
//           />
//         </div>
//       )}
//     </Paper>
//   );
// }

// export default CustomizedTables;

//Above is the old code ====================================> below is updated will delete after integrating all api

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#030028",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#C4CDD5",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function RowActions({ handleEdit="", onDelete, row }) {
  return (
    <>
    { handleEdit? <DriveFileRenameOutlineIcon
        onClick={() => handleEdit(row)}
        className="edit-icon"
      />:""}
      <DeleteIcon className="edit-icon" onClick={() => onDelete(row)} />
    </>
  );
}

function StatusButton({ value }) {
  const backgroundColor = value === 1||value === true ? "#00E785" : "#FF3939";
  const text = value === 1 ||value === true ? "Active" : "InActive";
  const color = value ? "black" : "white";

  return (
    <Button
      className="activeBtn"
      sx={{
        backgroundColor,
        color,
        fontSize: "12px",
        width: "80px",
        "&:hover": {
          backgroundColor:
            value === false ? "#FF3939 !important" : "#00e785 !important",
        },
      }}
    >
      {text}
    </Button>
  );
}

function CustomizedTables({
  rows = [],
  columns,
  onDelete,
  handleChange,
  paginationStatus,
  dataLoading = false,
  ...props
}) {

  const [size, setSize] = useState(0);
  const [page, setPage] = useState(5);
  const paginationRowsOptions = [5, 10, 20, 50, 100];

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];

  const startIndex = size * page + 1;
  const endIndex = Math.min((size + 1) * page, rows?.length);
  const totalEntries = rows?.length;


//   // const { getallSubAdminDetail, subAdminDetail } = useSelector(adminSelector);
  const handlePerRowsChange = async (event) => {
    setPage(+event.target.value);
    setSize(0);
  };

  const handlePageChange = async (event, newPage) => {
    setSize(newPage);
  };

  const handleEdit = (data) => {
    const id = data.chatbot_id;
    navigate(`/dashboard/${props.navigatepath || `edit${pathname}`}`, {
      state: { action: "Edit", arrayIndex: id, data },
    });
  };

  let roleObj = {
    1: "Employee",
    2: "Manager",
    3: "Accountant",
  };

  return (
    <Paper elevation={0}>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <StyledTableCell
                  sx={{ textAlign: "center", margin: "auto" }}
                  key={i}
                  align={column.align}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          {/* ## table has empty data ## */}
          {rows == "" ||
          rows == undefined ||
          rows == null ||
          rows?.content?.length === 0 ? (
            <TableBody>
              <TableRow>
                <TableCell colSpan={columns?.length}>
                  {dataLoading ? (
                    <div>
                      {Array.from(Array(3).keys()).map((val, i) => (
                        <div
                          key={i}
                          style={{ margin: "2px" }}
                          className="skeleton"
                        ></div>
                      ))}
                    </div>
                  ) : (
                    " There are no records to display"
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {rows?.slice(size * page, size * page + page).map((row, i) => (
                <StyledTableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={i}
                  sx={{ textAlign: "center", margin: "auto" }}
                >
                  {columns.map((column) => {
                    const value =
                      column.id === "id" ? (
                        i + 1
                      ) : column.id === "plan" ? (
                        <div className="planbutton">Tier{row[column.id]}</div>
                      ) : column.id === "Action" ? (
                        <RowActions
                          handleEdit={handleEdit}
                          onDelete={onDelete}
                          row={row}
                        />
                      ) : column.id === "status" ? (
                        <StatusButton value={row[column.id]} />
                      ) : column.id === "designation" ? (
                        roleObj[row["designation"]]
                      ) : column.id === "description" || column.id ==="question" ? (
                        <>
                          {row[column.id] ? (
                            row[column.id]
                          ) : (
                            <span style={{ color: "rgb(157 143 143 / 96%)" }}>
                              No Data to Display
                            </span>
                          )}
                        </>
                      ) : column.id === "View" || column.id==="Edit"||column.id === "Delete"?
                            <>
                              <Checkbox  name={column.id}
                              onChange={(e) => handleChange(e, row)} />
                            </>
                      :column.id==="clientAction"?
                      <RowActions
                      onDelete={onDelete}
                      row={row}
                    />:(
                        row[column.id]
                      );

                    return (
                      <Fragment key={column.id}>
                        <StyledTableCell
                        className="tablecontainer"
                          sx={{ textAlign: "center", margin: "auto" }}
                        >
                          {value}
                        </StyledTableCell>
                      </Fragment>
                    );
                  })}
                </StyledTableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {paginationStatus && (
        <div className="pagination-info"   
         style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
          <p style={{ paddingTop: "10px", fontSize: "14px" }}>
            Showing {startIndex} to {endIndex} of {totalEntries} entries
          </p>
          <TablePagination
            rowsPerPageOptions={paginationRowsOptions}
            component="div"
            count={rows?.length || 0}
            rowsPerPage={page}
            page={size}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handlePerRowsChange}
            className="pagination-text"
          />
        </div>
      )}
    </Paper>
  );
}

export default CustomizedTables;
