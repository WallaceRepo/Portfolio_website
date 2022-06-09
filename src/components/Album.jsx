  
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    
  },
  containerAlbum: {
    padding: theme.spacing(1, 0, 8),
     [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1,2,2),   
      },
  },
  cardGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0,0,0),   
      },
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
     //boxShadow: "0 1px 2px rgba(91,17,203,.05), 0 2px 15px rgba(91,17,203,.2)",
    '&:hover': {
      boxShadow: "0 1px 5px rgba(36,226,255,.05), 0 5px 15px rgba(36,226,255,.2)",
       transition: 'boxShadow 0.8s ease-in-out',
        cursor: 'pointer',
      }
  },
  cardMedia: {
    paddingTop: '60.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    fontFamily: 'Roboto',
    color: '#5b5e5e',
    lineHeight: '1.5rem',
    fontSize: '1rem',
    paddingTop:'0px'
  },
  cardHeader: {
  fontFamily: 'Lora',
  color: '#0084d6',
  fontSize:'1.2rem',
  paddingBottom: '0px',
  //textTransform:'Uppercase',
  fontWeight:'500'
  }
}));

export default function Album(props) {

  const classes = useStyles();
  const { cards } = props;
  
  return (
    <React.Fragment>
       <div className={classes.containerAlbum}>
          <Typography variant="h2" align="center" color = "secondary">
              Coding Playground Projects
          </Typography>
          <Typography variant="body1" align="center">
          Here are several mini-projects and experiments I have created to test ideas and creative ambition.
          </Typography>
        </div>
     <Container className={classes.cardGrid}>
          {/* End hero unit */}
           <Grid container spacing={3}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={3}>
               <a href = {card.link} target="_blank" style={{ textDecoration:'none'}} rel="noopener noreferrer" >
                <Card className={classes.card} >
                  <CardMedia
                    className={classes.cardMedia}
                    image= {card.image }
                    title="Youtube"
                    alt = 'Playground projects'/>   
                <CardHeader className={classes.cardHeader}
                   action = {
                      <IconButton aria-label="go to github">
                        <GitHubIcon style = {{color: '#88d1ff'}} />
                      </IconButton>
                     }
                     title = {card.title }
                     disableTypography = {true}
                     //subheader="September 14, 2016"
                  />
                  <CardContent >
                    <Typography className={classes.cardContent}>
                        {card.content}
                    </Typography>
                  </CardContent>  
                </Card>
               </a>
             </Grid>
            ))}
          </Grid>
        </Container>     
 </React.Fragment>
  );
}

Album.propTypes = {
  cards: PropTypes.array,
};