import React, { useEffect }  from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import projectPic from '../assets/fv.jpg'; // Import using relative path
import projectPic2 from '../assets/tbc600.jpg';
import projectPic3 from '../assets/cb.jpg';
import { useLocation } from 'react-router-dom';
import './Header.css';

const useStyles = makeStyles((theme) => ({
  projectContent: {
    padding: theme.spacing(6, 0, 1),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3,0,1),   }
   },
  imageContent : {
    background: "#eaf7ff",
    borderRadius: '6px',
    padding: theme.spacing(5),
    marginBottom: "80px",
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),   },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),   }
    },
  textContent: {
    padding: theme.spacing(4),
       [theme.breakpoints.down('sm')]: {
           padding: theme.spacing(0,3,0),   
     },
      [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0,0,1),  
     },

    },
  img: {
   boxShadow: "0 1px 5px rgba(91,17,203,.05), 0 5px 30px rgba(91,17,203,.2)",
   borderRadius: "3px",
   marginBottom: "-80px",
   maxWidth:'100%',
   maxHeight:'100%',
   '&:hover': {
    boxShadow: "0 1px 5px rgba(36,226,255,.05), 0 5px 60px rgba(36,226,255,.2)",
     transition: 'boxShadow 0.8s ease-in-out',
      cursor: 'pointer',
    }
   },
 
}));

export default function Project(props) {
  const classes = useStyles();
  const { post } = props;
  const location = useLocation();
  useEffect(()=> {
    if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1))
        if (elem) {
            elem.scrollIntoView({behavior: "smooth"})
        }
    } else {
    window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
}, [location,])
return (
 <div id='Project'>
   <Typography variant="h2" align="center" color = "secondary">
         Some Projects I've Built
   </Typography>
   <Grid container className={ classes.projectContent }> 
      <Grid item xs ={12} sm ={6} md = {7} className = { classes.imageContent }>
         <a href="https://crownbargo.herokuapp.com/" target = '_blank' rel="noopener noreferrer">
            <div>
              <img src={projectPic3} className={classes.img} alt='project'/>
            </div>
         </a>
      </Grid>
      <Grid item xs={12} sm ={6} md = {5} className={classes.textContent} >
         <Typography variant="body2" align="left">
            Featured Project 
         </Typography>
       <a className = 'projectLink' href="https://crownbargo.herokuapp.com/" target = '_blank' rel="noopener noreferrer">
        <Typography variant="h4" align="left" color="secondary"
         >
            { post.project1.title}
         </Typography> 
        <Typography variant="body1" align="left"> 
              {post.project1.content}
         </Typography>   
       </a>  
      </Grid>
    </Grid>
    <Grid container className={ classes.projectContent }> 
     <Grid item xs={12} sm ={6} md = {5} className={classes.textContent} >
      <Typography variant="body2" align="left">
            Featured Project
         </Typography>
         <Typography variant="h4" align="left" color="secondary"
          className={ classes.myTextStyle}
         >
           { post.project2.title} 
         </Typography>     
         <Typography variant="body1" align="left"> 
           {post.project2.content}  
         </Typography>
      </Grid>
      <Grid item xs ={12} sm ={6} md = {7} className = { classes.imageContent }>
         <div >
            <img src={projectPic } className={classes.img} alt='project'/>
         </div>
      </Grid> 
   </Grid>
   <Grid container className={ classes.projectContent }> 
     <Grid item xs={12} sm ={6} md = {5} className={classes.textContent} >
         <Typography variant="body2" align="left">
            Featured Project
         </Typography>
         <a className = 'projectLink' href="http://texasbuildingcontrols.com/" target = '_blank' rel="noopener noreferrer">
            <Typography variant="h4" align="left" color="secondary"
             >
              { post.project3.title}
            </Typography> 
          <Typography variant="body1" align="left"> 
              {post.project3.content}  
          </Typography> 
         </a> 
    </Grid>
      <Grid item xs ={12} sm ={6} md = {7} className = { classes.imageContent }>
      <a href="http://texasbuildingcontrols.com/" target = '_blank' rel="noopener noreferrer">
          <div >
            <img src={projectPic2} className={classes.img} alt='project'/>
          </div>
      </a>
      </Grid>
   </Grid>
</div>
 );
}

Project.propTypes = {
  post: PropTypes.object,
};