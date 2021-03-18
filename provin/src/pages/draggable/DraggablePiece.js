import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Draggable from "react-draggable";
import { useStyles } from "./style";

export default function DraggablePiece(props) {
  const [textContent, setTextContent] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    setText();
  }, []);
  const setText = () => {
    setTextContent(Array.from(props.word));
  };

  if (textContent) {
    return (
      <div>
        <Grid container className={classes.rootGrid}>
          <Grid item xs={12}>
            <Grid container justify="center">
              {textContent.map((content) => {
                return (
                  <Draggable>
                    <Grid key={content} item>
                      <Card className={classes.rootCard}>
                        <CardContent>
                          <Typography className={classes.title}>
                            {content}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Draggable>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Typography>Loading...</Typography>
      </div>
    );
  }
}
