import React from "react";
import {
    Typography,
    makeStyles,
    Grid,
    Button,
    IconButton,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
    cardRoot: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#EEF3F9",
        [theme.breakpoints.down("md")]: {
            paddingTop: "10% !important",
          },
    },

    desktopView:
    {
        paddingTop: "20%",
        [theme.breakpoints.down("sm")]: {
            display: "none !important",
          },
          [theme.breakpoints.down("lg")]: {
            
          },
        
    },
    mobileView: {
        [theme.breakpoints.up("md")]: {
          display: "none !important",
        },
      },
    leftArrowRoot: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    RightArrowRoot: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    ArrowIcon: {
        color: "#fff",
    },
    ArrowSpan: {
        transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
    ButtonStyle: {
        padding: "20px 23px",
        borderRadius: "50%",
        border: "0px solid !important",
        backgroundColor: "#E1E8F2",
    },
    cardContainer: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    contentText: {
        fontSize: "28px",
        fontWeight: 700,
        color: "#444",
        

    },
    mobileViewContainer: {
        margin: "auto",
        height: "650px",
        maxWidth: "700px",
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: "20px",
      },
      mobileCardContainer: {
        position: "relative",
        width: "100%",
        height: "100%",
      
      },
      MobileTextContent: {
        fontSize: "24px",
        fontWeight: 700,
        color: "#444",
        [theme.breakpoints.down("sm")]: {
            paddingTop:"20% !important",
        },
      },
      mobilecardcontainer1:
      {
        [theme.breakpoints.down("sm")]: {
            width: "70vw",
            height: "70vh",  
        },
      },
      mobilecardcontainer2:
      {
        [theme.breakpoints.down("sm")]: {
            width: "70vw",
            height: "70vh",  
        },
      },
      mobilecardcontainer3:
      {
        [theme.breakpoints.down("sm")]: {
            width: "70vw",
            height: "70vh",  
        },
      },
      iconvalue1:
      {
        [theme.breakpoints.down("sm")]: {
            marginTop:"20%"
        },
      },
      iconvalue2:
      {
        [theme.breakpoints.down("sm","md")]: {
            display: "flex",
    justifyContent: "center",
    marginTop: "10%",
        },
      },

}));
function Cards() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        card_index: 0,
        card_data: [
            {
                content: "“First, the sprint forces your team to focus on the most pressing questions. Second, the sprint allows you to learn from just the surface of a finished product.”- Crayond",
                page: 1
            },
            {
                content: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell.”",
                page: 2
            },
            {
                content: "“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” – Steve Jobs",
                page: 3
            },
            {
                content: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell.”",
                page: 4
            },
            {
                content: "“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” – Steve Jobs",
                page: 5
            }
        ]
    })
    const card_moving = (direction) => {
        if (direction === "right") {
            if (state.card_index === state.card_data.length - 1) {
                setState({
                    ...state,
                    card_index: 0
                });
            } else {
                let card_index = Number(state.card_index) + 1;
                setState({
                    ...state,
                    card_index
                });
            }
        }
        if (direction === "left") {
            if (state.card_index === 0) {
                let card_length = state.card_data.length;
                setState({
                    ...state,
                    card_index: card_length - 1
                });
            } else {
                let card_index = Number(state.card_index) - 1;
                setState({
                    ...state,
                    card_index
                });
            }
        }
    }
    return (
        <div className={classes.cardRoot}>
            <Grid container className={classes.desktopView}>
           
                <Grid  md={2} lg={2} xl={2}  className={classes.left} > </Grid>
              
                <Grid  sm={1}  md={1} lg={2} xl={2} container className={classes.leftArrowRoot}>
                    <Button className={classes.ButtonStyle}>
                        <span className={classes.ArrowSpan}>
                            <ArrowBackIosIcon
                                className={classes.ArrowIcon}
                                onClick={() => card_moving('left')} />
                        </span>
                        
                    </Button>
                </Grid>
                <Grid  sm={8} md={7} lg={5} xl={5} container style={{ position: "relative" }}>
                    <Grid container className={classes.cardContainer}>
                        <div
                            classes={classes.cardOne}
                            style={{
                                position: "absolute",
                                width: "70%",
                                backgroundColor: "#FFFFFF",
                                boxShadow: "0px 0px 28px #00000029",
                                borderRadius: "20px",
                                opacity: "0.3",
                                left: "7%",
                                height: "400px",
                            }}
                        >
                            <div style={{ padding: "50px" }}></div>
                        </div>
                        <div
                            classes={classes.cardTwo}
                            style={{
                                position: "absolute",
                                width: "70%",
                                backgroundColor: "#FFFFFF",
                                boxShadow: "0px 0px 28px #00000029",
                                borderRadius: "20px",
                                opacity: "0.5",
                                left: "11%",
                                height: "450px",
                            }}
                        >
                            {" "}
                            <div style={{ padding: "50px" }}></div>
                        </div>
                        <div
                            classes={classes.cardFour}
                            style={{
                                position: "absolute",
                                width: "70%",
                                backgroundColor: "#FFFFFF",
                                boxShadow: "0px 0px 28px #00000029",
                                borderRadius: "20px",
                                opacity: "0.5",
                                right: "11%",
                                height: "450px",
                            }}
                        >
                            <div style={{ padding: "50px" }}></div>
                        </div>
                        <div
                            classes={classes.cardFive}
                            style={{
                                position: "absolute",
                                width: "70%",
                                backgroundColor: "#FFFFFF",
                                boxShadow: "0px 0px 28px #00000029",
                                borderRadius: "20px",
                                opacity: "0.3",
                                right: "7%",
                                height: "400px",
                            }}
                        >
                            {" "}
                            <div style={{ padding: "50px" }}></div>
                        </div>
                        <div
                            classes={classes.cardThree}
                            style={{
                                position: "absolute",
                                width: "70%",
                                backgroundColor: "#FFFFFF",
                                boxShadow: " 0px 0px 28px #00000029",
                                borderRadius: "20px",
                                height: "500px",


                                opacity: 1,
                            }}
                        >
                            <div class={classes.content1} style={{
                                padding: "50px", textAlign: "left",
                                fontFamily: " Neutra Text",
                                fontWeight: "bold",
                                fontSize:"45px",
                                letterSpacing: "0px",
                                color: "#444444",
                                opacity: 1
                            }}>
                                <div>
                                    <Typography className={classes.contentText}>
                                        {state?.card_data[state?.card_index]?.content}
                                    </Typography>
                                </div>
                            </div>
                            <Grid class={classes.contentFooter} direction="row" container>
                                <Grid
                                sm={2}
                                    md={7}
                                    lg={5}
                                    xl={5}
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        position:"relative",
  
                                        font: "Regular 16px/19px Montserrat",
                                        letterSpacing: "0.27px",
                                        color: "#B7B7B7",
                                        opacity: 1,
                                    }}
                                >
                                    <Typography>{state?.card_data[state?.card_index]?.page}/{state.card_data.length}</Typography>
                                </Grid>
                                <Grid
                                sm={2}
                                    md={4}
                                    lg={5}
                                    xl={5}
                                    style={{ display: "flex", justifyContent: "flex-end" }}
                                >
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon className={classes.favourite} />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
                <Grid  sm={1} md={1} lg={2} xl={2} container className={classes.RightArrowRoot}>
                    <Button className={classes.ButtonStyle}>
                        <span className={classes.ArrowSpan}>
                            <ArrowForwardIosIcon className={classes.ArrowIcon} onClick={() => card_moving('right')} />
                        </span>
                    </Button>
                </Grid>
            </Grid>
            <Grid container className={classes.mobileView}>
        <Grid
          container
          className={classes.mobileViewContainer}
          onMouseDown={() => card_moving("left")}
          onMouseUp={() => card_moving("right")}
        >
          <div className={classes.mobileCardContainer}>
            <div className={classes.mobilecardcontainer1}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: "0.3",
                boxShadow: "0px 0px 28px #00000029",
                borderRadius: "20px",
                top: "6%",
              }}
            ></div>
            <div className={classes.mobilecardcontainer2}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: "0.5",
                boxShadow: "0px 0px 28px #00000029",
                borderRadius: "20px",
                top: "3%",
              }}
            ></div>
            <div className={classes.mobilecardcontainer3}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                boxShadow: "0px 0px 28px #00000029",
                borderRadius: "20px",
              }}
            >
              {" "}
              <div  className={classes.contentmobile}style={{ padding: "30px" }}>
                <Typography className={classes.MobileTextContent}>
                  {" "}
                  {state?.card_data[state?.card_index]?.content}
                </Typography>
              </div>
              <div>
                <Grid
                  class={classes.MobilecontentFooter}
                  direction="row"
                  container
                >
                  <Grid
                    xs={6}
                    sm={6}
                   
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Typography  className={classes.iconvalue1}>
                      {state?.card_data[state?.card_index]?.page}/
                      {state.card_data.length}
                    </Typography>
                  </Grid>
                  <Grid
                    xs={6}
                    sm={6}
                   
                     className={classes.iconvalue2}style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
        </div>
    );
}
export default Cards;