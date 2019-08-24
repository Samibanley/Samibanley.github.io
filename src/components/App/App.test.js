import React from 'react';
import { shallow } from 'enzyme';

import App from '.';

const wrapper = props => (
  shallow(<App { ...props } />)
);

describe('App', () => {
  test('renders header with correct text', () => {
    const app = wrapper({});
    const header = app.find('h1.header');
    expect(header.text()).toEqual('This page is currently under construction.');
  });
  test('renders img tag with appropriate alt text', () => {
    const app = wrapper({});
    const gif = app.find('img.pikachu');
    expect(gif.prop('alt')).toEqual('animated under construction sign');
  });
  test('renders img tag with pikachuConstruction.gif', () => {
    const app = wrapper({});
    const gif = app.find('img.pikachu');
    expect(gif.prop('src')).toEqual('https://media.giphy.com/media/S5JSwmQYHOGMo/giphy.gif');
  });
});
