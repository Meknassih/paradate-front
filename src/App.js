import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import './App.css';
import ButtonAppBar from './components/TopBar';
import DatePicker from './components/DatePicker';
import InputWithIcon from './components/SearchInput';
import SimpleCard from './components/Card';
import { Box } from '@material-ui/core';

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

      <Grid container spacing={3} className={classes.m2}>
        <Grid item xs={12} md={6}>
          <Box>
            <DatePicker className={classes.datePickerFilter}></DatePicker>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <InputWithIcon></InputWithIcon>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <SimpleCard></SimpleCard>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
