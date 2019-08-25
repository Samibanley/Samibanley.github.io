import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/styles';
import { Button, SvgIcon } from '@material-ui/core';

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
  color: colorPalette.WHITE,
  textAlign: 'left',
  fontFamily: 'Roboto',
  fontSize: '4vh',
  margin: 0,
  padding: '0.5rem',
  borderRadius: 4,
  backgroundColor: colorPalette.TRANSPARENT_BLACK,
  width: '40vh'
});

const Pink = styled('span')({
  color: colorPalette.PINK
});

const AboutMeButton = styled(Button)({
  fontFamily: 'Roboto',
  fontWeight: '700',
  margin: '1rem',
  color: colorPalette.WHITE,
  backgroundColor: colorPalette.DARK_PINK,
  borderColor: colorPalette.WHITE,
  display: 'flex'
});


const Home = () => (
  <Container>
    <Header>
      Hello! I'm
      <Pink> Sam Bley</Pink>
      .
    </Header>
    <Header><i>Software Engineer</i></Header>
    <Header><i>Problem Solver</i></Header>
    <Header>
      <i>
        <Pink>STEM</Pink>
        inist
      </i>
    </Header>
    <Link to="/about">
      <AboutMeButton variant="outlined">
        more
        <SvgIcon>
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </SvgIcon>
      </AboutMeButton>
    </Link>
  </Container>
);


export default Home;
