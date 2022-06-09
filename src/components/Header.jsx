import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import resumePDF from '../assets/Resume.pdf';
import Button from '@material-ui/core/Button';
//import { Link } from "react-scroll";
import './Header.css';
import ListItem from '@material-ui/core/ListItem';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import { NavHashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import avatarPic from '../assets/coder.gif';
import Container from '@material-ui/core/Container';
import {ReactComponent as Logo} from '../assets/logo.svg';
import ReactGA from "react-ga";

function HideOnScroll(props) { 
  const { children} = props;
  const trigger = useScrollTrigger();
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};
const useStyles = makeStyles((theme) => ({
 
  toolbar: {
    fontFamily: 'roboto',
    fontSize:'1.15rem',
    padding: '0px',
    display:'flex',
    justifyContent:'space-between',
    width:'70%',
    margin:'0 auto',
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      justifyContent:'space-around',
    },
   },
   listContainer:{
    display: 'flex',
    flexDirection:'row',
    },
  toolbarLink: {
    color: '#fff',
    fontWeight: '300',
    padding: theme.spacing(1),
   
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
    [theme.breakpoints.down('xs')]: {
      padding: "0px",
      fontSize: '0.9rem',
    },
   },
  button: {
    color: '#fff',
    fontFamily: 'roboto',
    fontWeight: '300',
    textTransform: 'none',
    fontSize: '0.95rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.12rem',
      lineHeight: '1.4',
     },
    border: '1.5px solid #1e90ff'
  },
  mainPost: { 
    position: 'relative',
    backgroundImage: 'linear-gradient(180deg, #6a11cb 35%, #0084d6 82%, #fff 10.5%)',
    paddingBottom: '15px',
    paddingTop:'7rem',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '5rem',
     },

     },
   large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    border: '1rem solid #f9f8f8',
    boxShadow: "0 8px 24px rgba(64,87,109,.07)",
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(18),
      height: theme.spacing(18),
     }
  },
  logoCont: {
    display:'flex',
    alignItems:'center',
  },
  logo: {
    width:'57px',
    height:'57px',
    fill:'#d4bbf9',
    [theme.breakpoints.down('sm')]: {
      width:'50px',
      height:'50px',
    },
    [theme.breakpoints.down('xs')]: {
      width:'40px',
      height:'40px',
    },
  },
  logotitle:{
    fontFamily: 'rubik',
    color: '#d4bbf9',
    fontWeight:'500',
    fontSize:'2.4rem',
    paddingLeft: '5px',
    textShadow: "0 2px 2px rgb(0 0 0 / 50%)",
    whiteSpace:'nowrap',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',

    },
    [theme.breakpoints.down('xs')]: {
      display:'none'
    },
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const Event = (category, action, label) => {
    ReactGA.event({
      category: category,
      action: action,
      label: label
     });
  };
  return (
  <React.Fragment>
   <HideOnScroll {...props}> 
    <div className = "navbar" >
     <Toolbar component="nav" className={classes.toolbar }>
       <div className= {classes.logoCont} >
        <Logo className={classes.logo} />
        <span className = {classes.logotitle}>WEB-SAGA</span>
       </div>
       <div className ={classes.listContainer}>
       <ListItem >
        <Link
          activeclass="active"
          to="/#About"
          spy="true"
          smooth={true}
          offset={-50}
          duration={600}
            key= 'about'
            variant="body2"
            className={classes.toolbarLink}>
           About
         </Link>
        </ListItem>
        <ListItem>
         <Link
          activeclass="active"
          to='/#Project'
          spy='true'
          smooth={true}
          offset={-70}
          duration={600}
            key='project'
            variant="body2"
            className={classes.toolbarLink}>
          Project
          </Link></ListItem>
          <ListItem>
          <Link
          activeclass="active"
          to='/#Contact'
          spy='true'
          smooth={true}
          offset={0}
          duration={600}
            key='contact'
            variant="body2"
            className={classes.toolbarLink}>
           Contact
          </Link>
         </ListItem>
        <a href={resumePDF } rel="noopener noreferrer" target="_blank"
            className={classes.toolbarLink}  style={{ textDecoration: 'none' }}
            to='/Resume'
           >
          <Button label="Resume" variant="outlined" color = "primary"
           className = { classes.button} 
           onClick={()=> 
            Event("Resume", "cliked to view resume", "Resume_PAGE")
          }  
           >
              Resume
          </Button>
        </a> 
      </div>
       </Toolbar>
      </div>
     </HideOnScroll>
   <div className={classes.mainPost} id = "mainPost">
        <Container maxWidth="md">
          <Typography variant="h1" align="center">
            Hi, I am Sophia.
          </Typography>  
          <Typography variant="h1" align="center">
          I build creative websites.
          </Typography>  
          <div id = "About" style={{ justifyContent: "center", display: "flex", paddingTop: '1.5rem' }}>
            <Avatar alt="Web-Saga"  src={avatarPic} className={classes.large}/>
          </div>
        </Container>
      </div>
     </React.Fragment>
  );
}

// MainPost.propTypes = {
//   post: PropTypes.object,
// };

