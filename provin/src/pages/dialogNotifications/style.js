import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 500,
        backgroundColor: 'transparent',
          boxShadow: 'none',
        '& > svg': {
            margin: theme.spacing(2),
          },
      },
      media: {
        height: 140,
        background: "#42C3E5",
      },
      svgDialogStyle: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
      iconSuccess: {
         padding: theme.spacing(1),
         color: "#2ECC71",
    [theme.breakpoints.down('sm')]: {
      fontSize: 300
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 400
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 500,
      
    },
      },
      iconWrong: {
        padding: theme.spacing(1),
        color: " #FF5733",
   [theme.breakpoints.down('sm')]: {
     fontSize: 300
   },
   [theme.breakpoints.up('md')]: {
     fontSize: 400
   },
   [theme.breakpoints.up('lg')]: {
     fontSize: 500,
     
   },
     },
     rootDialog: {
      backgroundColor: "transparent"
    },
  
    paper: {
      backgroundColor: "transparent",
      boxShadow: "none",
      overflow: "hidden"
    },

}));