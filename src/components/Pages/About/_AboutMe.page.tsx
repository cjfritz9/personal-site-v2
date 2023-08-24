import React from 'react';
import { Container, HStack } from '@chakra-ui/react';
import SlimNav from './SlimNav';
import Directory from './Directory';
import Display from './Display';
import Snippets from './Snippets';

const AboutMePage: React.FC = () => {

  return (
    <Container variant='page'>
      <HStack alignItems='flex-start' h='100%' w='100%' gap={0}>
        <SlimNav />
        <Directory />
        <Display />
        <Snippets />
      </HStack>
    </Container>
  );
};

export default AboutMePage;
