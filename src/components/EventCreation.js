import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { Button, TextField, MenuItem } from '@material-ui/core';
import { BoundaryDatePicker } from './DatePicker';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SaveIcon from '@material-ui/icons/Save';

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
  firstContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  typeFormControl: {
    paddingLeft: 8,
    paddingRight: 8
  },
  submitContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end'
  }
}));

export default function EventCreation() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    type: '',
    name: 'hai',
  });

  const [labelWidth, setLabelWidth] = React.useState(0);
  const inputLabel = React.useRef(labelWidth);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

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
      <Grid item xs={12} className={classes.firstContainer}>
        <TextField
          id="input-with-icon-textfield"
          label="Titre"
          autoFocus={true}
          style={{ width: '50%' }}
        />
        <FormControl className={classes.typeFormControl}>
          <InputLabel htmlFor="type-native-simple">Type</InputLabel>
          <Select
            native
            value={state.type}
            onChange={handleChange('type')}
            inputProps={{
              name: 'type',
              id: 'type-native-simple',
            }}
          >
            <option value={0}>Rappel</option>
            <option value={1}>Rendez-vous</option>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <BoundaryDatePicker dateLabel="Date de début" timeLabel="Heure de début" />
      </Grid>
      <Grid item xs={12} md={6}>
        <BoundaryDatePicker dateLabel="Date de fin" timeLabel="Heure de fin" />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="input-with-icon-textfield"
          label="Description"
          multiline={true}
          fullWidth={true}
          variant="filled"
          rows={3}
        />
      </Grid>
      <Grid item xs={12} className={classes.submitContainer}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
          href="#"
        >
          Enregistrer
      </Button>
      </Grid>
    </Grid>
  );
}