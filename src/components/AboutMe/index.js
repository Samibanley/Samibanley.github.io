import React from 'react';
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent
} from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/styles';
import colorPalette from '../../utils/colorPalette';
import { socialMedia, interests } from '../../utils/constants';

const styles = makeStyles({
  grid: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  section: {
    display: 'flex',
    justifyContent: 'space-evenly',
    borderRadius: 4,
    backgroundColor: colorPalette.GHOST_WHITE,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '2vh',
    height: '90vh',
    width: '85vw'
  },
  header: {
    fontSize: '1vh'
  },
  socialContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  smallCard: {
    width: '35vh'
  },
  media: {
    height: 0,
    paddingTop: '100%'
  }
});

const AboutMe = () => {
  const classes = styles();

  return (
    <Grid className={ classes.grid }>
      <Paper className={ classes.section }>
        <Card className={ classes.smallCard }>
          <CardHeader
            title="Connect With Me On"
            className={ classes.header }
          />
          <CardMedia
            title="that's me"
            image="/assets/selfie.jpg"
            className={ classes.media }
          />
          <CardContent className={ classes.socialContent }>
            <a href="https://github.com/samibanley">{socialMedia.github}</a>
            <a href="https://www.linkedin.com/in/samibanley/">{socialMedia.linkedIn}</a>
            <a href="https://twitter.com/samibanley">{ socialMedia.twitter }</a>
          </CardContent>
        </Card>
        <Card className={ classes.smallCard }>
          <CardHeader
            title={ interests.sectionTitle }
            className={ classes.header }
          />
          <CardContent className={ classes.socialContent }>
            <a href="https://github.com/samibanley">{socialMedia.github}</a>
            <a href="https://www.linkedin.com/in/samibanley/">{socialMedia.linkedIn}</a>
            <a href="https://twitter.com/samibanley">{ socialMedia.twitter }</a>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};

export default AboutMe;
