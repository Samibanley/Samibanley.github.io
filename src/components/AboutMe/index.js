/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Paper,
  Button,
  IconButton,
  Grid,
  Card,
  Typography,
  CardMedia,
  CardContent,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, styled } from '@material-ui/styles';
import colorPalette from '../../utils/colorPalette';
import * as c from '../../utils/constants';
import { Pink } from '../Home';

const styles = makeStyles({
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    paddingTop: '1vh'
  },
  textContainer: {
    width: '55vw',
    display: 'flex',
    flexDirection: 'column',
    margin: '2vh',
    justifyContent: 'center'
  },
  listContainer: {
    width: '80vw',
    display: 'flex',
    flexDirection: 'column',
    margin: '1vh',
    justifyContent: 'center'
  },
  homeButton: {
    width: '8vh',
    height: '8vh',
    borderRadius: '50%',
    margin: '1vh',
    backgroundColor: colorPalette.GHOST_WHITE
  },
  homeLink: {
    width: '8vh',
    height: '8vh',
    margin: '1vh',
    borderRadius: '50%'
  },
  section: {
    display: 'flex',
    justifyContent: 'space-evenly',
    borderRadius: 4,
    backgroundColor: colorPalette.GHOST_WHITE,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '1vh',
    width: '85vw',
    padding: '2vh'
  },
  header: {
    fontSize: '1vh'
  },
  socialContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: '.5vh 0 0 0'
  },
  smallCard: {
    width: '35vh',
    margin: '2vh',
    padding: '.5vh',
    borderRadius: 30
  },
  media: {
    height: 0,
    paddingTop: '100%',
    borderRadius: '50%'
  },
  paragraph: {
    fontSize: '2.25vh'
  },
  email: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0
  }
});

const Footer = styled('footer')({
  color: colorPalette.WHITE,
  textAlign: 'center',
  margin: '2vh'
});

const AboutMe = () => {
  const classes = styles();

  return (
    <>
      <Grid container className={ classes.grid }>
        <Link className={ classes.homeLink } to="/">
          <Button variant="outlined" className={ classes.homeButton }>
            <HomeIcon size="lg" />
          </Button>
        </Link>
        <Paper className={ classes.section }>
          <Card className={ classes.smallCard }>
            <CardMedia
              title="that's me"
              image="/assets/selfie.jpg"
              className={ classes.media }
            />
            <CardContent className={ classes.socialContent }>
              <IconButton href="https://github.com/samibanley">{ c.socialMedia.github }</IconButton>
              <IconButton href="https://www.linkedin.com/in/samibanley/">{ c.socialMedia.linkedIn }</IconButton>
              <IconButton href="https://twitter.com/samibanley">{ c.socialMedia.twitter }</IconButton>
            </CardContent>
            <CardContent className={ classes.email }>
              <IconButton href="mailto:hello@sambley.me"><EmailIcon size="lg" /> :</IconButton>
              <a href="mailto:hello@sambley.me">Hello@SamBley.Me</a>
            </CardContent>
          </Card>
          <Grid className={ classes.textContainer }>
            <Typography variant="h3" style={ { fontSize: '5vh' } } gutterBottom>About Me.</Typography>
            <Typography variant="body1" className={ classes.paragraph } paragraph>
              My name is Sam Bley.
            </Typography>
            <Typography variant="body1" className={ classes.paragraph } paragraph>
              {`I've been coding for about ${c.work.totalYearsExp}. I have a passion for problem solving, building new things, and 
              helping grow diversity in the Technology Industry. `}
            </Typography>
            <Typography variant="body1" className={ classes.paragraph } paragraph>
              I am currently a Software Engineer at <a href="https://www.wwt.com/about">World Wide Technology</a>.
            </Typography>
          </Grid>
          <Grid className={ classes.listContainer }>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={ <ExpandMoreIcon /> }
              >
                <h4>{c.technology.sectionTitle}</h4>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  {c.technology.items.map(item => <ul><li>{item}</li></ul>)}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={ <ExpandMoreIcon /> }
              >
                <h4>{c.learning.sectionTitle}</h4>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  {c.learning.items.map(item => <ul><li>{item}</li></ul>)}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={ <ExpandMoreIcon /> }
              >
                <h4>{c.interests.sectionTitle}</h4>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  {c.interests.items.map(item => <ul><li>{item}</li></ul>)}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Paper>
      </Grid>
      <Footer>Samantha Bley<Pink>©{c.currentYear}</Pink></Footer>
    </>
  );
};

export default AboutMe;
