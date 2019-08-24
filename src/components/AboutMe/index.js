import React from 'react';
import { Paper, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import colorPalette from '../../utils/colorPalette';

const styles = makeStyles({
  section: {
    display: 'flex',
    justifyContent: 'center',
    height: '90%',
    width: '90%',
    borderRadius: 4,
    backgroundColor: colorPalette.SEASHELL,
    top: '60%',
    position: 'fixed'
  },
  avatar: {
    margin: '1rem',
    width: '15rem',
    height: '15rem',
    borderRadius: 10
  }
});


const AboutMe = () => {
  const classes = styles();

  return (
    <Paper className={ classes.section }>
      <div>
        <Avatar src="/assets/selfie.jpg" className={ classes.avatar } />
      </div>
    </Paper>
  );
};

export default AboutMe;
