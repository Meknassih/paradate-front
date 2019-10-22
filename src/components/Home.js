import React from 'react';
import Grid from '@material-ui/core/Grid';
import DatePicker from './DatePicker';
import InputWithIcon from './SearchInput';
import SimpleCard from './Card';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

export default function Home() {
  const classes = useStyles();

  return (
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
  );
}