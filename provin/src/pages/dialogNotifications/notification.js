import React, { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import Dialog from "@material-ui/core/Dialog";
import Grow from "@material-ui/core/Grow";
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

import { useStyles } from "./style";
import { Card } from "@material-ui/core";



function GrowTransition(props) {
  return <Grow {...props} />;
}

const TransitionsSnackbar= forwardRef((props, ref)=> {
  const [state, setState] = useState({
      open: false,
      type: false,
    }),
    [loading, setLoading] = useState(true);
  const classes = useStyles();
  useEffect(() => {
    setLoading(false);
  }, []);
  useImperativeHandle(ref, ()=>({
    handleClick(element){
      setState({
        open: true,
        type: element,
      });
    }
  })
  )
  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };
  if (loading) {
    return <Typography>Cargando...</Typography>;
  } else if (state.type === "success") {
    return (
      <div className={classes.root}>
        <Dialog
          open={state.open}
          onClose={handleClose}
          TransitionComponent={GrowTransition}
          BackdropProps={{
            classes: {
              root: classes.rootDialog,
            },
          }}
          PaperProps={{
            classes: {
              root: classes.paper,
            },
          }}
        >
          <Card className={classes.root}>
            <CardContent>
              <CheckCircleIcon className={classes.iconSuccess} />
            </CardContent>
          </Card>
        </Dialog>
      </div>
    );
  } else if (state.type === "wrong") {
    return (
      <div className={classes.root}>
        <Dialog
          open={state.open}
          onClose={handleClose}
          TransitionComponent={GrowTransition}
          BackdropProps={{
            classes: {
              root: classes.rootDialog,
            },
          }}
          PaperProps={{
            classes: {
              root: classes.paper,
            },
          }}
        >
          <Card className={classes.root}>
            <CardContent>
              <ErrorIcon className={classes.iconWrong} />
            </CardContent>
          </Card>
        </Dialog>
      </div>
    );
  }else{
    return null
  }
})
export default TransitionsSnackbar;