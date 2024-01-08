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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function CustomizedTables(props) {
  const {
    rows,
    columns,
    page,
    size,
    rowsPerPageOptions,
    handleChangePage,
    handleChangeRowsPerPage,
    paginationStatus,
  } = props;

  const prevCountRef = React.useRef();

  React.useEffect(() => {
    prevCountRef.current = rows;
  }, []);

  const startIndex = size * page + 1;
  const endIndex = (size * (page + 1), rows?.length);
  const totalEntries = rows?.length;

  return (
    <Paper elevation={0}>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <StyledTableCell key={i} align={column.align}>
                  {" "}
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
                  There are no records to display
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {rows?.slice(size * page, size * page + page).map((row, i) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns?.map((column) => {
                      const value =
                        column.id === "Action" ||
                        column.id === "Status" ||
                        column.id === "checkbox" ||
                        column.id === "Delete"
                          ? column.id
                          : row[column.id];
                      console.log(value, "value");
                      return (
                        <Fragment key={column.id}>
                          <StyledTableCell>
                            {value === "Action" ? (
                              <DriveFileRenameOutlineIcon className="edit-icon" />
                            ) : value === "Status" ? (
                              <Button
                                className="activeBtn"
                                sx={{
                                  backgroundColor:
                                    row[column.id] === "Active"
                                      ? "#00E785"
                                      : "#FF3939",
                                  color:
                                    row[column.id] === "Active"
                                      ? "black"
                                      : "white",
                                  "&:hover": {
                                    backgroundColor:
                                      row[column.id] === "Active"
                                        ? "#00e785 !important"
                                        : "#FF3939 !important",
                                  },
                                }}
                              >
                                {row[column.id]}
                              </Button>
                            ) : value === "checkbox" ? (
                              <Checkbox />
                            ) : value === "Delete" ? (
                              <Checkbox />
                            ) : (
                              value
                            )}
                          </StyledTableCell>
                        </Fragment>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {/* ## For Pagination ## */}
      {paginationStatus && (
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="pagination-info"
        >
          <div>
            <p style={{ paddingTop: "10px", fontSize: "14px" }}>
              Showing {startIndex} to {endIndex} of {totalEntries} entries
            </p>
          </div>
          <div>
            <TablePagination
              rowsPerPageOptions={rowsPerPageOptions}
              component="div"
              count={rows?.length || 0}
              rowsPerPage={page}
              page={size}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              className="pagination-text"
            />
          </div>
        </div>
      )}
    </Paper>
  );
}

export default CustomizedTables;
