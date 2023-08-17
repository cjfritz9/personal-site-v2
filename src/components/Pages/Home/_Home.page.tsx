import React from 'react';
import { Container, Flex, Stack } from '@chakra-ui/react';
import Intro from './Intro';
import Codle from './Codle';

const HomePage: React.FC = () => {
  return (
    <Container variant='page'>
      <Stack h='100%' justifyContent='center'>
        <Flex gap='8rem'>
          <Intro />
          <Codle />
        </Flex>
      </Stack>
    </Container>
  );
};

export default HomePage;
