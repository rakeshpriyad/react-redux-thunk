import React, { useState} from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { connect } from 'react-redux';

const columns = [
  { id: 'id', label: 'User ID', minWidth: 50 },
  { id: 'userName', label: 'Name', minWidth: 100 },
  { id: 'emailAddress', label: 'Email', minWidth: 100 },
  { id: 'mobileNo', label: 'Contact #', minWidth: 100 },
  { id: 'address',  label: 'Address', minWidth: 100  },
  {
    id: 'edit',
    label: '',
    minWidth: 70,
    align: 'right'
    
  },
  {
    id: 'delete',
    label: '',
    minWidth: 70,
    align: 'right'
    
  },
  
];


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const UsersStickyHeadTable = (props) =>{
  const {rows, edit} = props;
  
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id} area-checked="true">
                  {columns.map((column) => {
                    if(column.id === 'edit'){
                      return (
                        <TableCell key={column.id} align={column.align}>
                            <button onClick ={ () => edit(true)}>Edit</button>
                        </TableCell>
                      );
                    }if(column.id === 'delete'){
                      return (
                        <TableCell key={column.id} align={column.align}>
                            <button >Delete</button>
                        </TableCell>
                      );
                    }else {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  }
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 5, 10,20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

const mapStateToProps = state => {
  return {
   rows: state.users
  }
};


//   export default connect(mapStateToProps)(UsersStickyHeadTable);
export default connect( mapStateToProps)(UsersStickyHeadTable);
