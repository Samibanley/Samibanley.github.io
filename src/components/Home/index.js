import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import colorPalette from '../../utils/colorPalette';

const Container = styled('div')({
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/heroImage3x.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  width: '100%',
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

const Header = styled('h1')({
  color: colorPalette.SEASHELL,
  margin: 0
});

const AboutMeButton = styled(Button)({
  backgroundColor: 'aliceblue'
});


const Home = () => (
  <Container>
    <Header>This is my header.</Header>
    <Link to="/about">
      <AboutMeButton>About Me.</AboutMeButton>
    </Link>
  </Container>
);


export default Home;
