import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import EditOutlined from '@material-ui/icons/EditOutlined';
import ShareOutlined from '@material-ui/icons/ShareOutlined';
import { Link, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    maxWidth: 780,
    margin: '0 auto'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    margin: theme.spacing(1),
  },
  eventTitle: {
    fontSize: '1.5em'
  }
}));

export default function EventCard(props) {
  const classes = useStyles();
  let actionButtons;

  if (props.actionButtons)
    actionButtons = CardActionButtons();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          RDV
        </Typography>
        <CardTitle clickable={props.clickableTitle}></CardTitle>
        <Typography className={classes.pos} color="textSecondary">
          10/10/2019 10:15 - 10/10/2019 11:15
        </Typography>
        <Typography variant="body2" component="p">
          Ne pas oublier de ramener de l'espèce, impossible de payer par CB.
          <br />
          {'"8374ED"'}
        </Typography>
      </CardContent>
      {actionButtons}
    </Card>
  );
}


function CardActionButtons() {
  const classes = useStyles();

  return (
    <CardActions>
      <Button
        color="primary"
        className={classes.button}
        startIcon={<EditOutlined />}
        size="small"
      >Modifier</Button>
      <Button
        color="primary"
        className={classes.button}
        startIcon={<ShareOutlined />}
        size="small"
      >Partager</Button>
      <Button
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        size="small"
      >Supprimer</Button>
    </CardActions>
  );
}

function CardTitle(props) {
  const classes = useStyles();

  if (props.clickable) {
    return (
      <Link className={classes.eventTitle} href="/event/1">
        Dr. Touati
      </Link>
    );
  } else {
    return (
      <Box className={classes.eventTitle}>
        Dr. Touati
        </Box>
    );
  }
}