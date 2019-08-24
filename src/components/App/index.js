import React from 'react';
import { Grid } from '@material-ui/core';
import { styled, makeStyles } from '@material-ui/styles';

import '../../../assets/main.css';
import AboutMe from '../AboutMe';
import colorPalette from '../../utils/colorPalette';

const styles = makeStyles({
  grid: {
    height: '100%',
    width: '100%',
    position: 'fixed'
  }
});

const HeroImage = styled('div')({
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/heroImage.jpg");',
  height: '75%',
  width: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'fixed',
  top: '0',
  zIndex: '-1'
});

const Header = styled('h1')({
  color: colorPalette.SEASHELL,
  justifySelf: 'center'
});

const App = () => (
  <Grid container justify="center" alignItems="center" className={ styles().grid }>
    <HeroImage>
      <Header>this is my header.</Header>
    </HeroImage>
    <AboutMe />
  </Grid>
);

export default App;
