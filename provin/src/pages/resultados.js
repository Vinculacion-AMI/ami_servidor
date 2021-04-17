// import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import { Table, Thead, Tbody,th,  Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Paper from '@material-ui/core/Paper';

import { withStyles, makeStyles } from '@material-ui/core/styles';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';


// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     maxWidth: 875,
//     height: '100%',
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignContent: 'center',
//     display: 'block',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     borderRadius: 5,
//     margin: '25px',
    
//   },
//   table: {
//     margin: '5px 0px',
//     minWidth: 875,
    
//   }
// });

function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs};
  }
  
  const rows = [
    createData('Frozen','Tabares', 15),
    createData('sandwich','Gonzales', 23),
    createData('Eclair','Castro', 22),
    createData('Cupcake','Malquin', 305),
    createData('Gingerbread','Quispe', 356),
  ];

// export default function Resultados() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
      
//        <TableContainer component={Paper}>
//         <Table className={classes.table} size="small" aria-label="a dense table">
//             <TableHead>
//             <TableRow>
//                 <TableCell align="center">Nombre</TableCell>
//                 <TableCell align="center">Apellido</TableCell>
//                 <TableCell align="center">Edad</TableCell>
//                 <TableCell align="center">Puntuacion Total</TableCell>
//             </TableRow>
//             </TableHead>
//             <TableBody>
//             {rows.map((row) => (
//                 <TableRow align="rigth" key={row.name}>
//                 <TableCell align="rigth"  > {row.name} </TableCell>
//                 <TableCell align="rigth">{row.calories}</TableCell>
//                 <TableCell align="center">{row.fat}</TableCell>
//                 <TableCell align="center">{row.carbs}</TableCell>
//                 </TableRow>
//             ))}
//             </TableBody>
//         </Table>
//         </TableContainer>
//     </Card>
//   );
// }






const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight:' 3px',
    fontFamily: 'italic',
  },
  body: {
    padding: 'auto',
    margin: 0,
    fontSize: 16,
    
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.disabledBackground
    },
    
  },
}))(TableRow, StyledTableCell);

const useStyles = makeStyles({
  root:{
    width: "100%",
    maxWidth: 875,
    height: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    padding: 20
  },
  table: {
    minWidth: 100,
    padding: 0,
    textAlign: 'rigth',
    
  },
  subcell:{
    fontFamily: 'italic',
    textAlign: 'left',
  }
  
});


export default function Resultados(props) {

  const classes = useStyles();

  return (

    <Card className={classes.root}>

      <Grid item xs={12}>
          <Paper className={classes.paper}>NOMBRE DEL JUEGO</Paper>
      </Grid>

      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">TOTAL</StyledTableCell>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Apellido</StyledTableCell>
            <StyledTableCell align="center">Puntos</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell className={classes.subcell} >
                PUNTUACIONES
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
  );
}