import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import { CssBaseline } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Project from './components/Project';
import About from './components/About';
import Album from './components/Album';
import { withStyles } from "@material-ui/core/styles";
import Footer from './components/Footer';
import Contact from './components/Contact';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import mo from './assets/mo.jpg';
import utube from './assets/utube.jpg';
import fv from './assets/tfvalley.jpg';
import stream from './assets/streaming.jpg';



const about = {
  intro:"Hello! My name is Sophia Wallace, a front-end web developer based in East Texas. I am passionate about building webapps and websites for people, communities and businesses. I have a background in Information Technology with a bachelor's degree; but I have become dedicated to building webpages. I am overly excited to assist others with technological solutions to help them achieve their own goals."
  ,listIntro:"Here are the technologies I've been working with from past to present:"
}
const projectBuilt = {
    project1: {
     title: 'MERN stack Online Shop',
     content: 'This comprehensive e-commerce website project shows the modern toolchain of a React developer. I built a e-commerce application using React, Redux, React Hooks, React Suspense, React Router, GraphQL, Context API, Firebase, Redux-Saga, Stripe + more. This is a full stack app (MERN stack), using Firebase to store all user data.',
     skills:'Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase',
     link: 'github'
      },
    project2: {
    title: 'WordPress Online Shop',
    content: 'This blogging & online shop project that I built, with WordPress in a WooCommerce theme, Shows designing and coding skills. I enjoyed building its beautiful menu, designing its layout, writing its content, deploying to AWS EC2 server, even taking the photos and editing them in photoshop. This webpage displays versatile skillsets.',
    link: 'github'
    },
    project3: {
      title: 'Introductory Website',
      content: 'I built this simple and beautiful website using HTML, CSS, Bootstrap, JS jQuery and deployed it on AWS s3 bucket.',
      link: 'github'
      },
 }
const cards = [
  {  id:1,
     title:'Youtube Videos',
     content:'This tiny application uses React hooks and youtube api to fetch, show in list, and play videos.',
     image: utube,
     link:'https://github.com/WallaceRepo',
    
   },
  { id:3,
    title:'Email sending on website',
    content:' Small experimental project sends email from website. React form component, node.js, express.js and nodemailer were in use.',
    image: stream,
    link:'https://github.com/WallaceRepo',
    
  },
  { id:6,
    title:'Picture Gallery',
    content:'One of my first React project to fetch pictures from cloud, and show in Maison gallery style.',
    image: fv,
    link: 'https://github.com/WallaceRepo'
  },
  { id:5,
    title:'Monster Rolodex',
    content:'Pioneer React project that fetches pictures from cloud, shows in gallery style and cards get displayed depending on search term in input field.',
    image: mo,
    link:'https://wallacerepo.github.io/monstersrolodex/',
   
  },
]
const customTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#5c6bc0',
      main: '#24e2ff',
      dark: '#24e2ff',
      contrastText: '#dfdfdf',
    },
    secondary: {
      light: '#74caff',
      main: '#0084d6',
      dark: '#6a11cb',
      contrastText: '#fff',
    },
    error: {
      main: '#BD0043',
      contrastText: '#fff',
    },
    textPrimary: '#255770',
    textSecondary: '#fff',
    divider: '#D7D6D5',
    background: {

      paper: '#fff',
      default: '#fff'
    },
   
  },
  typography: {
   
    fontFamily: 'Lora',
   
    }
});
customTheme.typography.h1 = {
  fontSize: '4rem',
  lineHeight: '6rem',
  color: '#fff',
  [customTheme.breakpoints.down('md')]: {
     fontSize: '3.3rem',
  }, 
  [customTheme.breakpoints.down('sm')]: {
    fontSize: '3rem',
    lineHeight: '4rem',
  },
  [customTheme.breakpoints.down('xs')]: {
    fontSize: '1.8rem',
    lineHeight: '2.5rem',
    paddingTop:'10px',
  },
  fontWeight: '500',
  fontFamily: "Roboto",
};
customTheme.typography.h2 = {

  fontSize: '3rem',
  lineHeight: '5rem',
  [customTheme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
  [customTheme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    lineHeight: '4.2rem',
    },
  [customTheme.breakpoints.down('xs')]: {
      fontSize: '1.8rem',
      lineHeight: '2.2rem',
      },
  fontWeight: '500',
  fontFamily: "Rubik",
 };
customTheme.typography.h4 = {
  fontSize: '1.4rem',
  [customTheme.breakpoints.up('md')]: {
    fontSize: '1.8rem',
  },
  fontFamily:'roboto',
};

customTheme.typography.body1 = {
   lineHeight: 1.85,
   [customTheme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
   },
};
customTheme.typography.body2 = {
  fontSize: '1rem',
  [customTheme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
    lineHeight: '1.4',
   },
 
  fontWeight: '400',
  fontFamily: 'roboto',
 

};
const StyledContainer = withStyles((props) => {
  return ({
      root: {
          paddingRight: "0px",
          paddingLeft: "0px",
   },
  })
})(Container);
const ContentContainer = withStyles((props) => {
  return ({
      root: {
          paddingRight: "5rem",
          paddingLeft: "5rem",
          paddingTop: "4rem",
          [props.breakpoints.down('sm')]: {
              paddingRight: "1.5rem",
              paddingLeft: "1.5rem",
              paddingTop: "1rem",
          },
          [props.breakpoints.down('xs')]: {
            paddingRight: "1rem",
            paddingLeft: "1rem",
            paddingTop: "1rem",
        },
      },
  })
})(Container);
const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.hash }); // Update the user's current page
  ReactGA.pageview(location.hash); // Record a pageview for the given page
});

const App = ()=> {
         useEffect(() => {
          ReactGA.initialize('UA-144554356-2');
           ReactGA.pageview('/App');
           
          }, [])
  return (
<Router history={history}>
   <ThemeProvider theme = { customTheme }>
    <CssBaseline/>
    
    <Header /> 
    <About post = { about } />
     <StyledContainer >
      <ContentContainer >
        <Project post={projectBuilt}/>
        <Album cards = { cards }/>
        <Contact />
      </ContentContainer> 
    </StyledContainer>
   <Footer/>
  </ThemeProvider>
</Router>
);
}

export default App;
