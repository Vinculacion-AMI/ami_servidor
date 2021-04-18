import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import { Table } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Paper from '@material-ui/core/Paper';

import { withStyles, makeStyles } from '@material-ui/core/styles';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';


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
    createData('Lenin Sebastian','Tabares Gonzales', 1005),
    createData('Juanita Maria','Gonzales Castro', 2300),
    createData('Eclair ALma','luan bees', 2200),
    createData('Jackeline Maria','Malquin Saenz', 3005),
    createData('Gingerbread Joel','Quispe Quispe', 3056),
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
    padding: ' 6px',
    margin: 0,
    fontSize: 18,
    
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.disabledBackground
    },
  // subcell:{
  //     fontFamily: 'italic',
  //     textAlign: 'left',
  //     background: 'rgb(60, 60, 60)',
  //     color: 'white'
  //   },
    
  },
}))(TableRow, StyledTableCell);

const useStyles = makeStyles({
  root:{
    width: "100%",
    maxWidth: 975,
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
    minWidth: 90,
    padding: 0,
    textAlign: 'rigth'
    
  },

  media: {
    height: 140,
  },
  paper: {
    fontFamily: 'italic',
    fontSize: 30,
    fontWeight: 'bold',
    textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF'
  },
  subcell:{
    fontFamily: 'italic',
    fontWeight: 'bold'
  },
  
});


export default function Resultados(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/puntuacion.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Felicitaciones
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button variant="contained"   size="small" color="primary">
          <Avatar alt="Remy Sharp" src="../images/slide_2.jpg" />

          Perfil
        </Button>

        <Button size="small" color="primary">
          Compartir
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Button>
      </CardActions>

      <Grid item xs={12}>
          <Paper className={classes.paper}>GAME ROOM</Paper>
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