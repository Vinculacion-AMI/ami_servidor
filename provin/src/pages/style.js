import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    collapseCard: {
        [theme.breakpoints.down("sm")]: {
          backgroundColor: "#42C3E5",
          minHeight: 200,
        },
        [theme.breakpoints.up("md")]: {
            backgroundColor: "#43E84B",
            minHeight: 400,
        },
        [theme.breakpoints.up("lg")]: {
          backgroundColor: "#E84391",
          minHeight: 600,
        },
      }
}))