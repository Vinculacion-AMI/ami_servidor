import Color from 'color';
import GoogleFont from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
export const useGridStyles = makeStyles(( theme ) => ({
    root: {
        margin: theme.spacing(0.5),
        width: "99%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
  }));
  console.log(window.screen.width)
export  const useStyles = makeStyles((theme) => ({
    actionArea: {
      borderRadius: 14,
      transition: '0.3s',
      
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
    card: ({ color }) => ({

      
      borderRadius: 14,
      boxShadow: 'none',
      
      '&:hover': {
        boxShadow: `0 6px 12px 0 ${Color(color)
          .rotate(-12)
          .darken(0.2)
          .fade(0.5)}`,
      },
   
        [theme.breakpoints.down("sm")]: {
          minWidth: window.screen.width/3,
        },
        [theme.breakpoints.up("md")]: {
          minWidth: window.screen.width/3,
         
        },
        [theme.breakpoints.up("lg")]: {
          minWidth: window.screen.width/3,
          maxWidth: "100%",
        },

   
    }),
    buttonCheck: {
      // color:'#ffffff' ,
      margin: theme.spacing(2),
      backgroundColor: "#2ECC71 ",
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      color: "white",
      boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
      [theme.breakpoints.down("sm")]: {
        fontSize: 20,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 30,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 40,
      },
    },
    cardMinSize: ({ color }) => ({

      
      borderRadius: 14,
      boxShadow: 'none',
      
      '&:hover': {
        boxShadow: `0 6px 12px 0 ${Color(color)
          .rotate(-12)
          .darken(0.2)
          .fade(0.5)}`,
      },
    
        [theme.breakpoints.down("sm")]: {
          minWidth: window.screen.width/3,
        },
        [theme.breakpoints.up("md")]: {
          minWidth: window.screen.width/2.5,
         
        },
        [theme.breakpoints.up("lg")]: {
          minWidth: window.screen.width/4,
          maxWidth: "100%",
        },

   
    }),
    content: ({ color }) => {
      return {
        backgroundColor: color,
   
        padding: '1rem 1.5rem 1.5rem',
      };
    },
    titleCard: {
      fontFamily: 'Keania One',
      fontSize: '2rem',
      color: '#fff',
      textTransform: 'uppercase',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontFamily: 'Keania One',
      color: '#fff',
      textTransform: 'uppercase',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  }));