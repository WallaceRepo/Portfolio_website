import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://web-saga.com/">
//         Web-Saga
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  footer: {
    //background:'#6a11cb',
   // backgroundImage: 'linear-gradient(180deg, #6a11cb 35%, #0084d6 82%)',
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0,0,2),  
     },
   },
  heart: {
    color:'#dda0dd',
       }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">

        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Designed &amp; Built with <span className={classes.heart}>&#10084;</span> by Sophia Wallace 
        </Typography>
        {/* <Copyright /> */}
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  //title: PropTypes.string,
};