import React, { useContext } from 'react';
import { Container } from '@chakra-ui/react';
import Section from './Section';
import {
  careerSections,
  hobbySections,
  personalInfoSections
} from './data/sections';
import { SiteContext } from '../../../context/Site.context';
import { SiteInterface } from '../../../@types/context';

const Directory: React.FC = () => {
  const { currentDirectory } = useContext(SiteContext) as SiteInterface;

  if (currentDirectory === 'career') {
    return (
      <Container variant='directory'>
        {careerSections.map((section, i) => (
          <Section key={i} title={section.title} folders={section.folders} />
        ))}
      </Container>
    );
  } else if (currentDirectory === 'personal') {
    return (
      <Container variant='directory'>
        {personalInfoSections.map((section, i) => (
          <Section key={i} title={section.title} folders={section.folders} />
        ))}
      </Container>
    );
  } else {
    return (
      <Container variant='directory'>
        {hobbySections.map((section, i) => (
          <Section key={i} title={section.title} folders={section.folders} />
        ))}
      </Container>
    );
  }
};

export default Directory;
