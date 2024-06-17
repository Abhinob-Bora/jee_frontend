import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';
import discordBackground from '../Images/background.png';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    backgroundImage: `url(${discordBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 20%',
    backgroundRepeat: 'no-repeat',
  },
  content: {
    position: 'absolute',
    top: '50%', // Adjusted to 40%
    left: '49%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: 1,
  },
  discordLink: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    textDecoration: 'none',
    fontSize: '1.5rem',
    display: 'inline-block',
    marginBottom: theme.spacing(2),
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },

}));

const Community = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Link
          href="https://discord.com/invite/FnYukJC3"
          className={classes.discordLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join our Discord Server
        </Link>
      </div>
    </div>
  );
};

export default Community;
