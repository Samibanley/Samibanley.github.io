import React from 'react';
import { DateTime } from 'luxon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const config = {
  underConstruction: false
};

export const interests = {
  sectionTitle: 'Interests & Hobbies',
  items: [
    'Brain Teasers',
    'Curly Girl Method',
    'Mechanical Keyboards'
  ]
};

export const technology = {
  sectionTitle: 'Technologies I\'ve Used',
  items: [
    'Javascript',
    'React',
    'Node',
    'Typescript',
    'Kotlin',
    'Java'
  ]
};

export const learning = {
  sectionTitle: 'What I\'m Learning Now',
  items: [
    'Optical Character Recognition',
    'Functional Programming'
  ]
};

export const currentYear = DateTime.local().year;

export const work = {
  sectionTitle: 'Where I am & Where I\'ve Been',
  totalYearsExp: `${currentYear - 2016} years`,
  headers: ['Been There', 'Now Here'],
  postiions: ['Associate Programmer Analyst', 'Software Engineer'],
  places: ['Express Scripts', 'World Wide Technology - Application Services']
};

export const socialMedia = {
  github: <FontAwesomeIcon size="lg" icon={ faGithub } />,
  linkedIn: <FontAwesomeIcon size="lg" icon={ faLinkedinIn } />,
  twitter: <FontAwesomeIcon size="lg" icon={ faTwitter } />
};
