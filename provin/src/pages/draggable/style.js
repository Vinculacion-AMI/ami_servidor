import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  root: {
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
    background: "#42C3E5",
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
    background: "#42C3E5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 80,
    color: "#FFFFFF",
  },
  rootGrid: {
    flexGrow: 1,
  },

  control: {
    padding: theme.spacing(2),
  },
}));
