import React from 'react';
import Grid from '@material-ui/core/Grid';
import EventCard from './Card';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { Button } from '@material-ui/core';


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

export default function EventDetail() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.m2}>
      <Grid item xs={12}>
        <Button
          size="large"
          className={classes.button}
          startIcon={<ArrowBackOutlinedIcon />}
          href="/"
        >
          Retour
      </Button>
      </Grid>
      <Grid item xs={12}>
        <EventCard actionButtons={true}></EventCard>
      </Grid>
    </Grid>
  );
}