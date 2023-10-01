import React from 'react';
import { Container, HStack, Stack } from '@chakra-ui/react';
import SlimNav from './SlimNav';
import Directory from './Directory';
import Display from './Display';
import Snippets from './Snippets/Snippets';
import { scrollbarStyles } from '../../../theme/BrandColors';

const AboutMePage: React.FC = () => {
  return (
    <Container variant='page'>
      <Stack
        alignItems='flex-start'
        h='100%'
        w='fit-content'
        gap={0}
        flexDir={['column', 'row']}
        overflowY={['scroll', 'scroll', 'hidden']}
        css={scrollbarStyles}
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
      </Stack>
    </Container>
  );
};

export default AboutMePage;
