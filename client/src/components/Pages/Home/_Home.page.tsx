import React from 'react';
import { Container, Flex, Stack } from '@chakra-ui/react';
import Intro from './Intro';
import Codle from './Codle/Codle';
import Backsplash from '../../Shared/Backsplash';
import { CodleProvider } from '../../../context/Codle.context';

const HomePage: React.FC = () => {
  return (
    <Container variant='page'>
      <Stack pos='relative' h='100%' justifyContent='center'>
        <Flex gap='8rem' pointerEvents='none'>
          <Intro />
          <CodleProvider>
            <Codle />
          </CodleProvider>
        </Flex>
      </Stack>
      <Backsplash />
    </Container>
  );
};

export default HomePage;
