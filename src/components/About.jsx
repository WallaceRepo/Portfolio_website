import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SpaRoundedIcon from '@material-ui/icons/SpaRounded';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    paddingRight: "5rem",
    paddingLeft: "5rem",
    
    [theme.breakpoints.down('sm')]: {
        paddingRight: "1.5rem",
        paddingLeft: "1.5rem",
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: "1rem",
      paddingLeft: "1rem",
  },
  },
  gridContent: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    //background: '#eaf7ff',
    backgroundImage: 'linear-gradient(180deg, #fff 0%, #eaf7ff 100%)',
    borderRadius:'6px',
    [theme.breakpoints.down('sm')]: {
        paddingTop: "1rem",
        paddingBottom: "1rem",
    }, 
  },
  listItem: {
    paddingTop:'0px',
    paddingBottom: '0px',
    fontSize: '1.1rem',
    fontFamily:'roboto',
   },
  listContent: {
     minWidth: '30px',
   },
  icon: {
    width: '14px',
    color:'#cde3ee'
  }
 }));
  const lists = [
                'JS, ES6' 
               ,'HTML & (S)CSS' 
               ,'JQuery'
               ,'Bootstrap'
               ,'AWS' 
               ,'PHP'
               ,'WordPress' 
               ,'Woocommerce'
               ,'Facebook APIs' 
               ,'MySQL' 
               ,'WAMP, XAMP' 
               ,'GitHub' 
               ,'Google APIs' 
               ,'Heroku' 
               ,'Firestore' 
               ,'Mongo DB '
               ,'Node.js '
               ,'Express.js '
               ,'React'
               ,'Redux' 
               ,'Hooks'
               ,'GraphQL '
               ,'Material UI '
               ,'Typescript'
  ]

export default function About(props) {
  const classes = useStyles();
  const { post } = props;
  return (
        <div className={classes.heroContent}>
           <Typography variant="body1" align="left">
               { post.intro }
            </Typography>
            <Typography variant="body1" align="left">
               {post.listIntro }
            </Typography>
            <Typography>
            </Typography>
            <Grid container className = { classes.gridContent}>
              {lists.map((list) => (
                <Grid key = {list} item xs = {6} sm = {4} md = {3}>
                  <ListItem className = {classes.listItem }>
                   <ListItemIcon className = { classes.listContent}>
                     <SpaRoundedIcon className = { classes.icon} />
                   </ListItemIcon>
                   <ListItemText>{list}</ListItemText>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
         </div>
     );
}

About.propTypes = {
  data: PropTypes.object,
};
