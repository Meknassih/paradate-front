import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import ButtonAppBar from './components/TopBar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './components/Home';
import EventDetail from './components/EventDetail';
import LoginCard from './components/Login';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: 99
  },
  m2: {
    padding: theme.spacing(4)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <ButtonAppBar></ButtonAppBar>
      </header>

      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/event'>
            <EventDetail></EventDetail>
          </Route>
          <Route path='/login'>
            <LoginCard ></LoginCard>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
