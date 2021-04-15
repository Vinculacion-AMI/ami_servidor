import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useGridStyles } from "./style";
import { useStyles } from "./style";
import { Button } from "@material-ui/core";
import dataJson from "./data.js";
import useForceUpdate from "use-force-update";
import getDataUser from "../../util/get";
import postDataUser from "../../util/post";
const nameLvls = ['Monosílabas', 'Bísilabas']
export const Syllables = React.memo(function SolidGameCard() {
  const [data, setData] = useState(false),
  [dataId, setDataId] = useState(false),
    [level, setLevel] = useState(false),
    [subLevel, setSubLevel] = useState(false),
    [stage, setStage] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    getData();

    // setLevel("nivel2");
  }, [!data, !level, !stage, !subLevel]);
  const forceUpdate = useForceUpdate();
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: "#203f52" });
  const styles2 = useStyles({ color: "#4d137f" });
  const styles3 = useStyles({ color: "#ff9900" });
  const styles4 = useStyles({ color: "#34241e" });
  const getData = async () => {
    const url =
      "http://localhost:4000/stage/6077083499b25a0c64418012/silabas";
    await getDataUser(url).then((response) => {
      const currentSubLvl = response[0] .sub_nivel;
      const currentLvl = response[0].nivel
      console.log(response)
      setDataId(response[0]._id)
      setSubLevel(currentSubLvl);
      setStage('silabas')
      setLevel(currentLvl);
      getContentLvlData(currentSubLvl, currentLvl);
    })

  };
  const getContentLvlData = (lvl, stageCate) => {
    console.log(`recuperando ${dataJson[stageCate][lvl]}`);
    setData(dataJson[stageCate][lvl]);
  
  };
  const nextLevel = async() => {
    const url =
    "http://localhost:4000/stage";
    setData(false);
    let arr = Object.keys(dataJson[level])
    let lastItem =   Object.keys(dataJson[level]).length-1
    const nxt = subLevel===arr[lastItem]?1:parseInt(subLevel.split("nivel")[1]) + 1;
    const nxtStage = level===nameLvls[nameLvls.length-1]?level:nameLvls[nameLvls.indexOf(level)+1]
    const dataNxtLvl = JSON.stringify({
      _id: dataId,
      nivel: nxt===1?nxtStage:level,
      sub_nivel: `nivel${nxt}`
    })
    await postDataUser(url,dataNxtLvl).then(response =>{
      if(response){
        getData()
      }
    })
  
    // setTimeout(() => {
    //   getContentLvlData(nxt, stage);
    // }, 500);

    // console.log(nxt);
    // forceUpdate()
  };
  const CustomCard = ({ classes, image, title }) => {
    const mediaStyles = useFourThreeCardMediaStyles();
    if (!data || data === undefined) {
      return <Typography>Cargando...</Typography>;
    } else {
      return (
        <CardActionArea className={classes.actionArea}>
          <Card
            className={data.length < 3 ? classes.card : classes.cardMinSize}
          >
            <CardMedia classes={mediaStyles} image={image} />
            <CardContent className={classes.content}>
              <Typography className={classes.titleCard} variant={"h2"}>
                {title}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      );
    }
  };
  if (!data) {
    return <Typography>Cargando...</Typography>;
  } else {
    return (
      <>
        <Typography>TITULO</Typography>
        <Grid classes={gridStyles} container spacing={4}>
          {data.map((content) => {
            return (
              <Grid item>
                <CustomCard
                  classes={styles3}
                  title={content.title}
                  image={
                    "https://www.itp.net/public/styles/full_img_sml/public/images/2019/05/27/44485-pubg_base1.jpg?itok=EF911Xan"
                  }
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <Button
              // disabled={!puzzleSolve[0]}
              onClick={nextLevel}
              variant="contained"
              size="large"
              className={classes.buttonCheck}
            >
              Siguiente
            </Button>
          </Grid>
          <Grid item>
            <Button
              disabled={subLevel === "nivel1"}
              // onClick={previousLevel}
              variant="contained"
              size="large"
              className={classes.buttonCheck}
            >
              Anterior
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }
});
export default Syllables;
