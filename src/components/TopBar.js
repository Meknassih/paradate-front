import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const username = props.user ? props.user.name : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link color="inherit" href="/" underline="none">
              Paradate
            </Link>
          </Typography>
          <UserButton username={username}></UserButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function UserButton(props) {
  if (props.username)
    return (
      <Button
        color="inherit"
        size="large"
        startIcon={<PersonOutlineOutlinedIcon />}
        href="#"
      >
        {props.username}
      </Button>
    );
  else
    return (<Button color="inherit" href="/login">Login</Button>);
}