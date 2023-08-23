import React from 'react'
import { Container, HStack }  from '@chakra-ui/react'
import SlimNav from './SlimNav';
import Directory from './Directory';

const AboutMePage: React.FC = () => {
  return (
    <Container variant='page'>
      <HStack alignItems='flex-start' h='100%' w='100%'>
        <SlimNav />
        <Directory />
      </HStack>
    </Container>
  );
}

export default AboutMePage;