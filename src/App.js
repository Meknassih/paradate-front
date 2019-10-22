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
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
  },
  fab: {
    margin: theme.spacing(1),
    position: 'absolute',
    right: 16,
    bottom: 16
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <ButtonAppBar user={{ name: 'mEkNa' }}></ButtonAppBar>
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
      <Fab
        color="primary"
        variant="extended"
        aria-label="create"
        className={classes.fab}
        href="/create"
      >
        <AddIcon className={classes.extendedIcon} />
        Nouveau
      </Fab>
    </div>
  );
}

export default App;
