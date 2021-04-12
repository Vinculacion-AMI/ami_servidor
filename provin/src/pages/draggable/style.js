import { makeStyles } from "@material-ui/core/styles";
let colors = [
  "#FFC300",
  "#2ECC71",
  "#DAF7A6",
  "#FF5733",
  "#884EA0",
  "#3498DB",
  "#2980B9",
];
let titleColor = colors[Math.floor(Math.random() * colors.length)];
let color1 = colors[Math.floor(Math.random() * colors.length)];
let color2 = colors[Math.floor(Math.random() * colors.length)];
export const useStyles = makeStyles((theme) => ({
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  root: {
    margin: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  rootEmptyCard: {
    margin: theme.spacing(2),
    maxWidth: "90%",
    maxHeight: "90%",
    minHeight: "90%",
    minWidth: "90%",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rootCard: {
    marginTop: theme.spacing(3),
    margin: theme.spacing(1),
    maxWidth: "90%",
    maxHeight: "90%",
    minHeight: "90%",
    minWidth: "90%",
    background: `linear-gradient(45deg, ${color1} 70%, ${color2} 30%)`,
    boxShadow: "0 3px 5px 2px rgba(130, 255, 105, .3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 80,
    color: "#FFFFFF",
  },
  titleWord: {
    color: titleColor,
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
  rootGrid: {
    flexGrow: 1,
  },

  control: {
    padding: theme.spacing(2),
  },
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
}));
