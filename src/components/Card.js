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
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
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

export default function SimpleCard(props) {
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
        <Link
          className={classes.eventTitle}
          href="/event/1">
          Dr. Touati
        </Link>
        <Typography className={classes.pos} color="textSecondary">
          10/10/2019
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