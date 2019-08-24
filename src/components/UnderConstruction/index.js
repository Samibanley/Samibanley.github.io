import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`;

const Header = styled.h1`
  color: rgb(0, 0, 0);
  text-align: center;
`;

const UnderConstruction = () => (
  <>
    <Header>This page is currently under construction.</Header>
    <Image
      className="pikachu"
      src="https://media.giphy.com/media/S5JSwmQYHOGMo/giphy.gif"
      alt="animated pikachu on a jackhammer with an under construction sign in the background"
    />
  </>
);

export default UnderConstruction;
