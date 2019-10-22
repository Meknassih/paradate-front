import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import { Button, TextField, InputAdornment } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  description: {
    fontSize: '.8em'
  },
  m2: {
    padding: theme.spacing(4)
  },
  button: {
    margin: theme.spacing(1),
  },
  title: {
    fontSize: '1.5em'
  },
  card: {
    minWidth: 275,
    maxWidth: 460,
    margin: '0 auto'
  },
  formRow: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  formSubmit: {
    padding: theme.spacing(2),
    textAlign: 'center'
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.m2}>
      <Grid item xs={12}>
        <LoginCard actionButtons={true}></LoginCard>
      </Grid>
    </Grid>
  );
}

function LoginCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>
          Connexion
        </Typography>
        <Typography className={classes.description} color="textSecondary">
          Utilisez votre nom d'utilisateur et votre mot de passe pour consulter et modifier vos agendas.
        </Typography>
        <Typography variant="body2" component="div">
          <div className={classes.formRow}>
            <TextField
              id="input-with-icon-textfield"
              label="Nom d'utilisateur"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.formRow}>
            <TextField
              id="input-with-icon-textfield"
              label="Mot de passe"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.formSubmit}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<VpnKeyOutlinedIcon />}
              href="#"
            >
              Se connecter
      </Button>
          </div>
        </Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  );
}