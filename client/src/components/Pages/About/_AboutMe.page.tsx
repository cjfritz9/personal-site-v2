import React from 'react';
import { Container, HStack, Stack } from '@chakra-ui/react';
import SlimNav from './SlimNav';
import Directory from './Directory';
import Display from './Display';
import Snippets from './Snippets/Snippets';

const AboutMePage: React.FC = () => {
  return (
    <Container variant='page'>
      <HStack
        alignItems='flex-start'
        h='100%'
        w='100%'
        gap={0}
        flexDir={['column', 'row']}
      >
        <SlimNav />
        <Stack
          h='100%'
          w='100%'
          gap={0}
          direction={['column', 'column', 'row']}
          alignItems='start'
        >
          <Directory />
          <Display />
        </Stack>
        <Snippets />
      </HStack>
    </Container>
  );
};

export default AboutMePage;
