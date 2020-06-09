import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import './style.css';
const useStyles = makeStyles({
    root: {
       width:"550px",
       marginTop:"142px",
       marginLeft:"50px",
       position:"fixed",
       top:"10px",
       transform: "matrix(-1, 0, 0, -1, 0, 0)",
background: "#FFFFFF 0% 0% no-repeat padding-box",
boxShadow: "0px 0px 28px #00000029",
borderRadius: "20px",
opacity: 0.53,

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

    column0:
    {
        height: "100vh !important",
    },
    column:
    {

    },
    column1:
    {
        top: "0px",
        left: "258px",
        width: "1182px",
        height: "auto",
        background: "#EEF3F9 0% 0% no-repeat padding-box",
        boxShadow: "-2px 3px 6px #00000029",
        borderRadius: "33px 0px 0px 33px",
        opacity: 1,

    },
    div1:
    {
        marginTop: 50,
        marginLeft: 50,
        fontSize: 18,
        fontWeight: "bold",
    },
    div2:
    {

        marginLeft: 50,
        fontSize: 14,

    },
    column2:
    {

        paddingLeft: 25,
    },
    column3:
    {

      
    },
    column4:
    {
        top: "0px",
        left: "0px",
        width: "308px",
        height: "auto",
        background: "#3D4690 0% 0% no-repeat padding-box",
        opacity: 1,
    },
    root1:
    {
      width:"470px", 
      paddingLeft:"30px",
      transform: "matrix(-1, 0, 0, -1, 0, 0)",
      background: "#FFFFFF 0% 0% no-repeat padding-box",
boxShadow:" 0px 0px 28px #00000029",
borderRadius: "20px",
opacity: 0.45,
      
    },
    root2:
   {
        width:"400px",
        paddingLeft:"40px",
      
   },
    column5:
    {
      
       
        
       
    },
});
export default function Cards() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        card_index: 0,
        card_data: [
            {
                content: "“First, the sprint forces your team to focus on the most pressing questions. Second, the sprint allows you to learn from just the surface of a finished product.”",
                page: 1
            },
            {
                content: "life is a journey that every day. However, that doesn’t mean you always wake up ready to seize the day, and sometimes need a reminder that life is a great gift.",
                page: 2
            },
            {
                content: "“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” – Steve Jobs",
                page: 3
            },
            {
                content: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” – Steve Jobs",
                page: 4
            },
            {
                content: "“Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.” – (Attributed to various sources)",
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
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Grid container lg={12} md={12} sm={12} xs={12} className={classes.column0} spacing={0}>
            <Grid item lg={2} md={2} sm={12} xs={12} className={classes.column4}>

            </Grid>
            <Grid item lg={10} md={10} sm={12} xs={12} className={classes.column1}>
                <Grid container lg={10} md={10} sm={12} xs={12} className={classes.column}>
                    <Grid item lg={2} md={8} sm={12} xs={12} className={classes.column5}>
                    <button className="button_style1"  onClick={() => card_moving('left')}></button>
                    </Grid>

                    <Grid item lg={8} md={8} sm={12} xs={12} className={classes.column}>
                    <Card className={classes.root}>
                        <Grid item lg={8} md={8} sm={12} xs={12} className={classes.column2} >
                            <Card className={classes.root1}>
                                <Grid item lg={8} md={8} sm={12} xs={12} className={classes.column3} >
                                    <Card className={classes.root2}>
                                        <div className="card-content">
                                            <span>{state?.card_data[state?.card_index]?.content}</span>
                                        </div>
                                        <div style={{ textAlign: "center", marginTop: "60px" }}>
                                            <span>{state?.card_data[state?.card_index]?.page}/{state.card_data.length}</span>
                                        </div>
                                    </Card>
                                </Grid>
                            </Card>
                        </Grid>
                   
                </Card>
              </Grid>
                    <Grid item lg={2} md={2} sm={12} xs={12} className={classes.column}>
                    <button className="button_style2" onClick={() => card_moving('right')}></button>

              </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
} 