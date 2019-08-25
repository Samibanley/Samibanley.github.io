import React from 'react';
import {
  Paper,
  Avatar,
  Typography,
  Grid
} from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/styles';
import colorPalette from '../../utils/colorPalette';

const styles = makeStyles({
  section: {
    display: 'flex',
    justifyContent: 'center',
    height: 'relative',
    width: '90%',
    borderRadius: 4,
    backgroundColor: colorPalette.WHITE,
    position: 'relative',
    margin: 30
  },
  avatar: {
    margin: '1rem',
    width: '15rem',
    height: '15rem',
    borderRadius: 10
  }
});

const StyledGrid = styled(Grid)({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center'
});


const AboutMe = () => {
  const classes = styles();

  return (
    <StyledGrid>
      <Paper className={ classes.section }>
        <Avatar alt="picture of Sam Bley" src="/assets/selfie.jpg" className={ classes.avatar } />
        <Typography varient="p">
          Lorem ipsum dolor sit amet, nonumy euismod ad eam, vis ut sonet detraxit,
          no virtute deterruisset sea.
          Oporteat quaestio nam ne, mucius molestiae vix at.
          Te pro quod eros timeam. Ut dicat incorrupte referrentur quo. Ei pro legimus accusam.
        </Typography>
      </Paper>
    </StyledGrid>
  );
};

export default AboutMe;
