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
const useStyles = makeStyles({
    root: {
    width:550,
    height:'500px',
    marginTop:'100px',
    marginLeft:300,
    position:"relative",
    top:-10,
    
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
        height:"100vh",
        position:'relative',
     background:'#FAFAFA',
     
    },
    div1:
{
   marginTop:50,
   marginLeft:50,
   fontSize:18,
   fontWeight:"bold",
},
div2:
{
   
   marginLeft:50,
   fontSize:14,
  
},
    column2:
    {
        
        paddingLeft:25,
    },
    column3:
    {
        
        paddingLeft:25,
    },
    root1:
    {
        height:'550px !important',
        width:500,
        position: 'fixed',
    top: 158,
    bottom:10,
    },
    root2:
    {
        height:'600px !important',
        width:446,
        position: 'fixed',
    top: 131
    }
  });
export default function Cards() {
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return(
        <Grid container lg={12} md={12} sm={12} xs={12}spacing={0}>
          <Grid item  lg={2}  md={4} sm={12} xs={12} ></Grid>
          
          <Grid item  lg={10}  md={10} sm={12} xs={12} className={classes.column1} >
              <div>
                 <div className={classes.div1}>Design Sprint</div>
                  <div className={classes.div2}>Categories/Design</div>
              </div>
    <Card className={classes.root}>
    <Grid item  lg={10}  md={10} sm={12} xs={12} className={classes.column2} >
    <Card className={classes.root1}>
    <Grid item  lg={10}  md={10} sm={12} xs={12} className={classes.column3} >
    <Card className={classes.root2}>
        </Card>
        </Grid>
    </Card>
        </Grid>

    </Card>
     
    </Grid>
   
</Grid>
    );
};