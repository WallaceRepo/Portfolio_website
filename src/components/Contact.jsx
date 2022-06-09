import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(4),
    textTransform:'none',
    fontSize:'1.3rem',
    fontFamily: 'roboto',
    fontWeight: '300',
    marginBottom: theme.spacing(8),
    boxShadow: "0 1px 5px rgba(91,17,203,.05), 0 5px 30px rgba(91,17,203,.2)",
    backgroundColor: "#1e90ff",
    '&:hover': {
      backgroundColor: "#6a11cb",
    }
   },
  contact: {
    marginTop: theme.spacing(4),
    width: '70%',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      marginTop: theme.spacing(0),
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: theme.spacing(3,2,0),
    },
  },
  iconButtonLink:{
    color:"#88d1ff",
    '&:hover': {
      color:'#805dde' ,
    }
  }
  }));

export default function Contact() {
  const classes = useStyles();
  return (
     <div id ="Contact" className={classes.contact}>
        <Typography variant="h2" color = "secondary" align="center" gutterBottom>
           Get in Touch
        </Typography>
        <Typography variant="body1" align="center" >
        I'm actively searching for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </Typography>  
          <Grid container spacing={2} justify="center">
            <Grid item>
             <Link href= 'mailto:sophiwebhub.gmail.com' rel="noopener noreferrer" target="_blank"
             style={{ textDecoration: 'none' }}>
               <Button variant="contained" color="secondary" className={classes.button}>
                 Send Mail
              </Button>
             </Link>
            </Grid>
            <Grid item>
            <Link href= 'https://www.linkedin.com/in/sophia-wallace-3102a5172/' rel="noopener noreferrer" target="_blank"
             style={{ textDecoration: 'none' }}>
               <Button variant="contained" color="secondary" className={classes.button}>
                 <LinkedInIcon fontSize="large" className={classes.iconButtonLink} />
              </Button>
             </Link>
            </Grid>
            <Grid item>
            <Link href= 'https://github.com/WallaceRepo' rel="noopener noreferrer" target="_blank"
             style={{ textDecoration: 'none' }}>
               <Button variant="contained" color="secondary" className={classes.button}>
                 <GitHubIcon fontSize="large" className={classes.iconButtonLink} />
              </Button>
             </Link>
            </Grid>
          </Grid>
    </div>
  );
}

