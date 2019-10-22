import React from 'react';
import Grid from '@material-ui/core/Grid';
import DatePicker from './DatePicker';
import SearchInputWithIcon from './SearchInput';
import EventCard from './Card';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh'
  },
  grid: {
    padding: theme.spacing(4)
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.grid}>
      <Grid item xs={12} md={6}>
        <Box>
          <DatePicker></DatePicker>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>
          <SearchInputWithIcon></SearchInputWithIcon>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <EventCard clickableTitle={true}></EventCard>
      </Grid>
    </Grid>
  );
}