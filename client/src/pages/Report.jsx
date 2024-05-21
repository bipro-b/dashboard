import  { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LeftMenu from '../components/LeftMenu';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Report() {
  const [listing, setListing] = useState([]);
  
  

  useEffect(() => {
    fetch("http://localhost:5000/api/listing")
      .then((res) => res.json())
      .then((data) => {
        setListing(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

console.log(listing);

  return (
    <>
    <LeftMenu/>
      <TableContainer component={Paper} >
      <Table sx={{ maxWidth: 1200, display:'flex' , flexDirection:'column', justifyContent:'center' ,alignItems:'center'}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='right'>Serial</StyledTableCell>
            <StyledTableCell align="right">Accounts Head</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Debit</StyledTableCell>
            <StyledTableCell align="right">Credit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listing.map((list) => (
            <StyledTableRow key={list.name}>
              <StyledTableCell align="right">{list.serial}</StyledTableCell>
              <StyledTableCell align="right">{list.account}</StyledTableCell>
              <StyledTableCell align="right">{list.date}</StyledTableCell>
              <StyledTableCell align="right">{list.debit}</StyledTableCell>
              <StyledTableCell align="right">{list.credit}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
