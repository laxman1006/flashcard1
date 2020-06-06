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
        width: 550,
        height: '500px',
        marginTop: '100px',
        marginLeft: 300,
        position: "relative",
        top: -10,
        borderRadius: '10px',
        color: 'transparent',

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
    column1:
    {
        height: "100vh",
        position: 'relative',
        background: '#FAFAFA',

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

        paddingLeft: 25,
    },
    root1:
    {
        height: '550px !important',
        width: 500,
        position: 'fixed',
        top: 158,
        bottom: 10,
        borderRadius: '10px',
    },
    root2:
    {
        height: '600px !important',
        width: 446,
        position: 'fixed',
        top: 131,
        borderRadius: '10px',
        marginLeft: '3px',
    }
});
export default function Cards() {
    const classes = useStyles();
    const [ state,setState ] = React.useState({
        card_index:0,
        card_data:[
            {
                content:"“First, the sprint forces your team to focus on the most pressing questions. Second, the sprint allows you to learn from just the surface of a finished product.”",
                page:1
            },
            {
                content:"ife is a journey that every day. However, that doesn’t mean you always wake up ready to seize the day, and sometimes need a reminder that life is a great gift.",
                page:2
            },
            {
                content:"“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” – Steve Jobs",
                page:3
            },
            {
                content:"Money and success don’t change people; they merely amplify what is already there.” — Will Smith",
                page:4
            },
            {
                content:"“Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.” – (Attributed to various sources)",
                page:5
            }
        ]
    })
    const card_moving = (direction)=>{
        if(direction==="right"){
            if(state.card_index===state.card_data.length-1){
                setState({
                    ...state,
                    card_index:0
                });
            }else{
                let card_index = Number(state.card_index) + 1;
                setState({
                    ...state,
                    card_index
                });
            }
        }
        if(direction==="left"){
            if(state.card_index===0){
                let card_length = state.card_data.length;
                setState({
                    ...state,
                    card_index: card_length-1
                });
            }else{
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
        <Grid container lg={12} md={12} sm={12} xs={12} spacing={0}>
            <Grid item lg={2} md={2} sm={12} xs={12} className="move_left_button_parent">
            <button className="button_style" onClick={()=>card_moving('left')}>Left</button>
            </Grid>

            <Grid item lg={8} md={8} sm={12} xs={12} className={classes.column1} >
                <div>
                    <div className={classes.div1}>Design Sprint</div>
                    <div className={classes.div2}>Categories/Design</div>
                </div>
                <Card className={classes.root}>
                    <Grid item lg={10} md={10} sm={12} xs={12} className={classes.column2} >
                        <Card className={classes.root1}>
                            <Grid item lg={10} md={10} sm={12} xs={12} className={classes.column3} >
                                <Card className={classes.root2}>
                                    <div className="card-content">
                                         <span>{state?.card_data[state?.card_index]?.content}</span>
                                    </div>
                                    <div style={{textAlign:"center",marginTop:"60px"}}>
    <span>{state?.card_data[state?.card_index]?.page}/{state.card_data.length}</span>
                                    </div>
                                </Card>
                            </Grid>
                        </Card>
                    </Grid>

                </Card>

            </Grid>
            <Grid item lg={2} md={2} sm={12} xs={12} className="move_right_button_parent">
               <button className="button_style" onClick={()=>card_moving('right')}>Right</button>
            </Grid>

        </Grid>
    );
} 